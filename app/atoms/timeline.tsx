import { Card } from "@/components/ui/card"
import { Car } from "lucide-react"
import { TimelineHeader } from "../molecules/timeline-header";

export default function Timeline() {
    return (
        <section className="w-full py-16 bg-gradient-to-b from-[#0B1220] to-[#0F172A]">
            <TimelineHeader />
            <div className="mx-auto  px-4">
                <Card className="p-0 m-0 bg-white" variant="red">
                    <iframe
                        src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=v2%3A2PACX-1vRWx87SdRdSS3bfV9UW-JglcrIVDak3muoeo7BcL9yAROx2XHlMC3U5O4HadjekGr0mzvziazSwuR8e&font=Default&lang=en&initial_zoom=2&height=650"
                        className="w-full"
                        height="650"
                        frameBorder="0"
                        allowFullScreen
                    />
                </Card>
            </div>
        </section>
    );
}
