'use client';
import { Card } from "@/components/ui/card"
import { TimelineHeader } from "../molecules/timeline-header";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
} as const;

const cardVariants = {
    hidden: { opacity: 0, y: 50, rotate: -2 },
    visible: {
        opacity: 1,
        y: 0,
        rotate: 0,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 15,
            duration: 0.6,
        },
    },
} as const;

export default function Timeline() {
    return (
        <motion.section
            className="w-full py-12 sm:py-14 md:py-16 bg-linear-to-b from-[#0B1220] to-[#0F172A]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} 
            id="history"
        >
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: "spring" }}
            >
                <TimelineHeader />
            </motion.div>

            <motion.div
                className="mx-auto px-4 sm:px-6 md:px-8 max-w-7xl"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div>
                    <Card className="p-0 m-0 bg-white" variant="red">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <iframe
                                src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=v2%3A2PACX-1vRWx87SdRdSS3bfV9UW-JglcrIVDak3muoeo7BcL9yAROx2XHlMC3U5O4HadjekGr0mzvziazSwuR8e&font=Default&lang=en&initial_zoom=2&width=100%25&height=650"
                                className="w-full h-150 sm:h-162.5 md:h-150 lg:h-137.5 xl:h-125"
                                frameBorder="0"
                                allowFullScreen
                                title="Indonesian History Timeline"
                            />
                        </motion.div>
                    </Card>
                </div>
            </motion.div>
        </motion.section>
    );
}
