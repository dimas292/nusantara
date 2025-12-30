'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import { Provinces } from "@/app/constant/provinsi";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProvinceModalProps {
    provinceId: string | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function ProvinceModal({ provinceId, open, onOpenChange }: ProvinceModalProps) {
    const province = provinceId
        ? Provinces.find((p) => p.id.toLowerCase() === provinceId.toLowerCase())
        : null;

    if (!province) return null;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="w-[95vw] max-w-6xl h-[90vh] p-0 overflow-hidden backdrop-blur-3xl bg-white/20 border-2 border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-3xl">
                <ScrollArea className="h-full w-full">
                    <div className="relative h-[300px] sm:h-[350px] lg:h-[400px] w-full overflow-hidden rounded-t-3xl">
                        {province.image_url && (
                            <Image
                                src={province.image_url}
                                alt={province.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
                            <DialogHeader>
                                <DialogTitle className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                                    {province.title}
                                </DialogTitle>
                                {province.title_en && (
                                    <p className="text-lg sm:text-xl lg:text-2xl text-gray-200">{province.title_en}</p>
                                )}
                            </DialogHeader>
                        </div>
                    </div>

                    <div className="p-6 sm:p-8 lg:p-10 max-w-6xl mx-auto backdrop-blur-sm bg-white/10">
                        {province.short_description && (
                            <div className="mb-8 backdrop-blur-md bg-white/40 p-6 rounded-2xl border border-white/30 shadow-lg">
                                <p className="text-lg text-gray-800 leading-relaxed font-medium">
                                    {province.short_description}
                                </p>
                            </div>
                        )}

                        {province.description && (
                            <div className="mb-10 backdrop-blur-md bg-white/40 p-6 rounded-2xl border border-white/30 shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    About {province.title}
                                </h3>
                                <p className="text-base text-gray-700 leading-relaxed">
                                    {province.description}
                                </p>
                            </div>
                        )}

                        <div className="mt-10 pb-8 flex justify-center">
                            <button
                                onClick={() => onOpenChange(false)}
                                className="backdrop-blur-lg bg-gradient-to-r from-red-600 to-red-800 text-white font-bold border-2 border-white/50 shadow-2xl rounded-full px-10 py-3 text-base hover:scale-105 hover:shadow-[0_8px_30px_rgb(220,38,38,0.5)] transition-all"
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}
