"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
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
        const nextIndex = (currentImageIndex + 1) % backgroundImages.length;
        const imgElement = document.createElement("img");
        imgElement.src = backgroundImages[nextIndex].src;
    }, [currentImageIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
            setIsLoaded(false);
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
                style={{
                    backgroundImage: `url(${backgroundImages[currentImageIndex].src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: isLoaded ? 1 : 0.9,
                }}
                onLoad={() => setIsLoaded(true)}
            >
                {!isLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 animate-pulse" />
                )}
            </div>
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
                className="container mx-auto px-6 text-center relative z-10"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-5xl md:text-6xl font-bold mb-6 text-white"
                >
                    Discover the
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6, type: "spring", stiffness: 100 }}
                    className="bg-white border-6 border-black inline-block mb-6"
                >
                    <h2 className="text-4xl md:text-5xl font-bold p-4 text-red-600">
                        Soul of Indonesia
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto"
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
                    <Button size="lg" variant={"red"} className="text-lg px-8 py-6 bg-white text-black ">
                        Start Exploring
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
}