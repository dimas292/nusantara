import { Button } from "@/components/ui/button";

export function TimelineHeader() {
    return (
        <div className="mx-auto mb-8 sm:mb-10 md:mb-12 max-w-3xl text-center px-4 sm:px-6">
            <Button
                size="sm"
                className="bg-main text-white font-bold border-black text-sm sm:text-base"
                variant={"white"}
            >
                History Timeline
            </Button>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mt-4 sm:mt-6">
                Journey Through <span className="text-red-500">Time</span>
            </h1>

            <p className="mt-3 sm:mt-4 text-white text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                Explore the pivotal moments that shaped Indonesia's rich cultural tapestry
            </p>
        </div>
    );
}
