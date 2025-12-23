import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function IntroSection() {
    return (
        <section className="relative bg-gray-50 py-20 px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 overflow-hidden">
            <div className="absolute inset-0 bg-repeat opacity-10" style={{ backgroundImage: "url('/textured/1.webp')" }} />
            <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:20px_20px]" />
            <div className="relative z-10 flex flex-col md:flex-row gap-14 items-start">
                <div className="w-full md:w-1/2 space-y-8">
                    <Button
                        size="sm"
                        className="bg-main text-white font-bold border-2 border-black shadow-shadow px-6"
                    >
                        INTRODUCTION
                    </Button>
                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                            A Nation of
                        </h1>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-main">
                            17,000 Stories
                        </h1>
                    </div>
                    <div className="space-y-6 text-lg leading-relaxed text-gray-800">
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
                    </div>
                    <div className="flex gap-6 pt-6">
                        <Card className="w-40 p-5 bg-slate-900 text-white border-2 border-black shadow-shadow">
                            <p className="text-3xl font-extrabold">300+</p>
                            <p className="text-sm mt-1 opacity-90">Ethnic Groups</p>
                        </Card>

                        <Card className="w-40 p-5 bg-main text-white border-2 border-black shadow-shadow">
                            <p className="text-3xl font-extrabold">700+</p>
                            <p className="text-sm mt-1 opacity-90">Languages</p>
                        </Card>
                    </div>
                </div>
                <div className="w-full md:w-1/2 relative">
                    <Card className="" variant={"red"} >
                        <div className="aspect-[3/4] w-full">
                            <Image
                                src="/Tari bali.webp"
                                alt="Indonesian Culture"
                                className="h-full w-full object-cover"
                                fill
                            />
                        </div>
                    </Card>
                    <Card className="absolute -bottom-6 -left-6 bg-white border-2 border-black shadow-shadow px-5 py-4">
                        <p className="font-bold text-main text-lg">
                            Unity in Diversity
                        </p>
                        <p className="text-sm text-gray-700">
                            Bhinneka Tunggal Ika
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    );
}
