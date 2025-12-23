"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const backgroundImages = [
    {
        src: "/bg-batik.webp",
        placeholder: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 700'%3E%3Crect fill='%23333333' width='1920' height='700'/%3E%3C/svg%3E",
    },
    {
        src: "/386.webp",
        placeholder: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 700'%3E%3Crect fill='%23333333' width='1920' height='700'/%3E%3C/svg%3E",
    },
];

export default function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Preload next image
        const nextIndex = (currentImageIndex + 1) % backgroundImages.length;
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.as = 'image';
        link.href = backgroundImages[nextIndex].src;
        document.head.appendChild(link);
        
        return () => {
            document.head.removeChild(link);
        };
    }, [currentImageIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
            setIsLoaded(false);
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-125 h-[70vh] sm:h-150 md:h-162.5 lg:h-175 flex items-center justify-center overflow-hidden">
            {/* Background Images with Next.js Image optimization */}
            {backgroundImages.map((img, index) => (
                <div
                    key={img.src}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <Image
                        src={img.src}
                        alt="Indonesian cultural background"
                        fill
                        priority={index === 0}
                        quality={85}
                        sizes="100vw"
                        className="object-cover object-center"
                        placeholder="blur"
                        blurDataURL={img.placeholder}
                        onLoad={() => index === currentImageIndex && setIsLoaded(true)}
                    />
                </div>
            ))}
            
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-black/60"
            />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white"
                >
                    Discover the
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6, type: "spring", stiffness: 100 }}
                    className="bg-white border-4 sm:border-6 border-black inline-block mb-4 sm:mb-6"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold p-3 sm:p-4 text-red-600">
                        Soul of Indonesia
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 max-w-3xl mx-auto px-4"
                >
                    Journey through 17,000 islands of rich culture, ancient traditions, and vibrant heritage
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button size="lg" variant={"red"} className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-white text-black">
                        Start Exploring
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
}