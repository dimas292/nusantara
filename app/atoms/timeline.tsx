'use client';
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { TimelineHeader } from "../molecules/timeline-header";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Timeline() {
    const [isIframeLoaded, setIsIframeLoaded] = useState(false);
    const [isIframeReady, setIsIframeReady] = useState(false);
    const iframeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
       
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isIframeLoaded) {
                        setIsIframeLoaded(true);
                        observer.disconnect();
                    }
                });
            },
            { rootMargin: '200px' } 
        );

        if (iframeRef.current) {
            observer.observe(iframeRef.current);
        }

        return () => observer.disconnect();
    }, [isIframeLoaded]);

    return (
        <section
            className="w-full py-12 sm:py-14 md:py-16 bg-linear-to-b from-[#0B1220] to-[#0F172A]"
            id="history"
        >
            <div>
                <TimelineHeader />
            </div>

            <div className="mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
                <div ref={iframeRef}>
                    <Card className="p-0 m-0 bg-white" variant="red">
                        <div className="relative">
                            {/* Animated skeleton loader with AnimatePresence */}
                            <AnimatePresence>
                                {(!isIframeLoaded || !isIframeReady) && (
                                    <motion.div
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-full h-175 p-6 space-y-4"
                                    >
                                        <div className="space-y-3">
                                            <Skeleton className="h-12 w-3/4 bg-gray-200" />
                                            <Skeleton className="h-4 w-1/2 bg-gray-200" />
                                        </div>
                                        
                                        <div className="space-y-6 mt-8">
                                            {/* Timeline items skeleton with stagger animation */}
                                            {[1, 2, 3, 4].map((item, index) => (
                                                <motion.div
                                                    key={item}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="flex gap-4"
                                                >
                                                    <div className="flex flex-col items-center">
                                                        <Skeleton className="h-12 w-12 rounded-full bg-gray-200" />
                                                        {item < 4 && <Skeleton className="h-20 w-1 bg-gray-200 mt-2" />}
                                                    </div>
                                                    <div className="flex-1 space-y-2">
                                                        <Skeleton className="h-6 w-32 bg-gray-200" />
                                                        <Skeleton className="h-24 w-full bg-gray-100" />
                                                        <Skeleton className="h-4 w-3/4 bg-gray-100" />
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                        
                                        <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm">
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.2 }}
                                                className="text-center space-y-3"
                                            >
                                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
                                                <p className="text-gray-600 font-medium">Loading Interactive Timeline...</p>
                                                <p className="text-gray-500 text-sm">This may take a few moments</p>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            
                            {/* Iframe - with smooth fade in */}
                            {isIframeLoaded && (
                                <motion.iframe
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: isIframeReady ? 1 : 0 }}
                                    transition={{ duration: 0.5 }}
                                    src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=v2%3A2PACX-1vRWx87SdRdSS3bfV9UW-JglcrIVDak3muoeo7BcL9yAROx2XHlMC3U5O4HadjekGr0mzvziazSwuR8e&font=Default&lang=en&initial_zoom=2&width=100%25&height=700"
                                    className="w-full h-175 border-0"
                                    scrolling="no"
                                    style={{ overflow: 'hidden' }}
                                    frameBorder="0"
                                    allowFullScreen
                                    loading="lazy"
                                    title="Indonesian History Timeline"
                                    onLoad={() => {
                                        // Add a small delay to ensure content is rendered
                                        setTimeout(() => setIsIframeReady(true), 500);
                                    }}
                                />
                            )}
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
