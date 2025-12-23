"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const backgroundImages = [
    "/bg-batik.jpg",
    "/386.jpg",
];

export default function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            className="relative h-[700px] flex items-center justify-center bg-cover bg-center bg-no-repeat transition-all duration-1000"
            style={{
                backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
            }}
        >
            <div className="absolute inset-0 bg-black/70" />

            <div className="container mx-auto px-6 text-center relative z-10">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                    Discover the
                </h1>

                <div className="bg-white border-6 border-black inline-block mb-6">
                    <h2 className="text-4xl md:text-5xl font-bold p-4 text-red-600">
                        Soul of Indonesia
                    </h2>
                </div>

                <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto">
                    Journey through 17,000 islands of rich culture, ancient traditions, and vibrant heritage
                </p>

                <Button size="lg" variant={"red"} className="text-lg px-8 py-6 bg-white text-black ">
                    Start Exploring
                </Button>
            </div>
        </section>
    );
}