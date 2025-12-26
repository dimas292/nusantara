"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
} as const;

const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 12,
        },
    },
} as const;

const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            type: "spring" as const,
            stiffness: 80,
            damping: 15,
        },
    },
} as const;

const badgeVariants = {
    hidden: { opacity: 0, y: 20, rotate: 10 },
    visible: {
        opacity: 1,
        y: 0,
        rotate: 0,
        transition: {
            type: "spring" as const,
            stiffness: 120,
            damping: 10,
        },
    },
} as const;

export default function IntroSection() {
    const shouldReduceMotion = useReducedMotion();
    
    return (
        <section id="intro" className="relative bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-48 overflow-hidden">
            <div 
                className="absolute inset-0 bg-repeat opacity-10" 
                style={{ 
                    backgroundImage: "url('https://res.cloudinary.com/dmx8hcmxh/image/upload/v1766741471/1_we60wq.webp')",
                    backgroundSize: 'auto'
                }} 
            />
            <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] bg-size-[20px_20px]" />
            <motion.div
                className="relative z-10 flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-14 items-start max-w-7xl mx-auto"
                variants={shouldReduceMotion ? undefined : containerVariants}
                initial={shouldReduceMotion ? "visible" : "hidden"}
                whileInView={shouldReduceMotion ? undefined : "visible"}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
                    <motion.div variants={itemVariants}>
                        <Button
                            size="sm"
                            className="bg-main text-white font-bold border-2 border-black shadow-shadow px-4 sm:px-6 text-sm sm:text-base"
                        >
                            INTRODUCTION
                        </Button>
                    </motion.div>

                    <motion.div className="space-y-2" variants={itemVariants}>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                            A Nation of
                        </h1>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-main">
                            17,000 Stories
                        </h1>
                    </motion.div>

                    <motion.div className="space-y-4 md:space-y-6 text-base sm:text-lg leading-relaxed text-gray-800" variants={itemVariants}>
                        <p>
                            Indonesia is not just a country it's a living museum of human
                            civilization. From the ancient temples of Java to the mystical
                            rituals of Papua, every island tells a unique story of resilience,
                            creativity, and harmony.
                        </p>
                        <p>
                            With over 300 ethnic groups, 700 languages, and countless
                            traditions, Indonesia represents one of the world's most diverse
                            cultural landscapes. Here, modernity dances with tradition,
                            creating a vibrant tapestry that continues to inspire the world.
                        </p>
                    </motion.div>

                    <motion.div className="flex flex-wrap gap-4 md:gap-6 pt-4 md:pt-6" variants={containerVariants}>
                        <motion.div variants={itemVariants} whileHover={{ scale: 1.08, y: -5 }}>
                            <Card className="w-36 sm:w-40 p-4 sm:p-5 bg-slate-900 text-white border-2 border-black shadow-shadow">
                                <p className="text-2xl sm:text-3xl font-extrabold">300+</p>
                                <p className="text-xs sm:text-sm mt-1 opacity-90">Ethnic Groups</p>
                            </Card>
                        </motion.div>

                        <motion.div variants={itemVariants} whileHover={{ scale: 1.08, y: -5 }}>
                            <Card className="w-36 sm:w-40 p-4 sm:p-5 bg-main text-white border-2 border-black shadow-shadow">
                                <p className="text-2xl sm:text-3xl font-extrabold">700+</p>
                                <p className="text-xs sm:text-sm mt-1 opacity-90">Languages</p>
                            </Card>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    className="w-full lg:w-1/2 relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <motion.div variants={imageVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <Card className="relative" variant={"red"}>
                            <div className="aspect-3/4 w-full relative">
                                <Image
                                    src="https://res.cloudinary.com/dmx8hcmxh/image/upload/v1766741450/Tari_bali_axjafm.webp"
                                    alt="Indonesian Culture"
                                    className="h-full w-full object-cover"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    quality={85}
                                    loading="lazy"
                                />
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div
                        variants={badgeVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, rotate: 5 }}
                    >
                        <Card className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white border-2 border-black shadow-shadow px-4 sm:px-5 py-3 sm:py-4">
                            <p className="font-bold text-main text-base sm:text-lg">
                                Unity in Diversity
                            </p>
                            <p className="text-xs sm:text-sm text-gray-700">
                                Bhinneka Tunggal Ika
                            </p>
                        </Card>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
