'use client';
import { Card } from "@/components/ui/card"
import { TimelineHeader } from "../molecules/timeline-header";
import { useEffect, useRef, useState } from "react";

export default function Timeline() {
    const [isIframeLoaded, setIsIframeLoaded] = useState(false);
    const iframeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Lazy load iframe when it enters viewport
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isIframeLoaded) {
                        setIsIframeLoaded(true);
                        observer.disconnect();
                    }
                });
            },
            { rootMargin: '200px' } // Load 200px before it enters viewport
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
                        <div>
                            {isIframeLoaded ? (
                                <iframe
                                    src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=v2%3A2PACX-1vRWx87SdRdSS3bfV9UW-JglcrIVDak3muoeo7BcL9yAROx2XHlMC3U5O4HadjekGr0mzvziazSwuR8e&font=Default&lang=en&initial_zoom=2&width=100%25&height=700"
                                    className="w-full h-175 border-0"
                                    scrolling="no"
                                    style={{ overflow: 'hidden' }}
                                    frameBorder="0"
                                    allowFullScreen
                                    loading="lazy"
                                    title="Indonesian History Timeline"
                                />
                            ) : (
                                <div className="w-full h-175 flex items-center justify-center bg-gray-100">
                                    <div className="text-center">
                                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
                                        <p className="text-gray-600">Loading Timeline...</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
