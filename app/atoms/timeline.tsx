'use client';
import { Card } from "@/components/ui/card"
import { TimelineHeader } from "../molecules/timeline-header";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Timeline() {
    const [isIframeReady, setIsIframeReady] = useState(false);
    const iframeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
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
    }, []);
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
                            <AnimatePresence>
                                {!isIframeReady && (
                                    <motion.div
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-full h-175 flex items-center justify-center bg-white"
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.2 }}
                                            className="animate-spin rounded-full h-16 w-16 border-4 border-red-200 border-t-red-600"
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <motion.iframe
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: isIframeReady ? 1 : 0 }}
                                    transition={{ duration: 0.5 }}
                                    src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=v2%3A2PACX-1vRWx87SdRdSS3bfV9UW-JglcrIVDak3muoeo7BcL9yAROx2XHlMC3U5O4HadjekGr0mzvziazSwuR8e&font=Default&lang=en&initial_zoom=2&width=100%25&height=650"
                                    className="w-full h-175 border-0"
                                    scrolling="no"
                                    style={{ overflow: 'hidden' }}
                                    frameBorder="0"
                                    allowFullScreen
                                    loading="lazy"
                                    title="Indonesian History Timeline"
                                    onLoad={() => {
                                        setTimeout(() => setIsIframeReady(true), 500);
                                    }}
                                />
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
