"use client";

import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const backgroundImage = {
    src: "/386.webp",
    placeholder: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 700'%3E%3Crect fill='%23333333' width='1920' height='700'/%3E%3C/svg%3E",
};

export default function Hero() {
    // Respect user's motion preferences
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className="relative min-h-125 h-[70vh] sm:h-150 md:h-162.5 lg:h-175 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="https://res.cloudinary.com/dmx8hcmxh/image/upload/v1766741469/386_uwr9fy.webp"
                    alt="Indonesian cultural background"
                    fill
                    priority
                    quality={85}
                    sizes="100vw"
                    className="object-cover object-center"
                    placeholder="blur"
                    blurDataURL={backgroundImage.placeholder}
                />
            </div>

            <motion.div
                initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
                className="absolute inset-0 bg-black/60"
            />
            <motion.div
                initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
                className="container mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10"
            >
                <motion.h1
                    initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: shouldReduceMotion ? 0 : 0.2, duration: shouldReduceMotion ? 0 : 0.8 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white"
                >
                    Discover the
                </motion.h1>

                <motion.div
                    initial={{ opacity: shouldReduceMotion ? 1 : 0, scale: shouldReduceMotion ? 1 : 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: shouldReduceMotion ? 0 : 0.4, duration: shouldReduceMotion ? 0 : 0.6, type: "spring", stiffness: 100 }}
                    className="bg-white border-4 sm:border-6 border-black inline-block mb-4 sm:mb-6"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold p-3 sm:p-4 text-red-600">
                        Soul of Indonesia
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: shouldReduceMotion ? 0 : 0.6, duration: shouldReduceMotion ? 0 : 0.8 }}
                    className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 max-w-3xl mx-auto px-4"
                >
                    Journey through 17,000 islands of rich culture, ancient traditions, and vibrant heritage
                </motion.p>

                <motion.div
                    initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: shouldReduceMotion ? 0 : 0.8, duration: shouldReduceMotion ? 0 : 0.8 }}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                >
                    <Button size="lg" variant={"red"} className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-white text-black">
                        Start Exploring
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
}