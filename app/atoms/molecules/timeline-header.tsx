import { Button } from "@/components/ui/button";

export function TimelineHeader() {
    return (
        <div className="mx-auto mb-12 max-w-3xl text-center px-4">
            <Button
                size="sm"
                className="bg-main text-white font-bold  border-black  px-6"
                variant={"white"}
            >
                History Timeline
            </Button>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">
                Journey Through <span className="text-red-500">Time</span>
            </h1>

            <p className="mt-4 text-white md:text-lg">
                Explore the pivotal moments that shaped Indonesia’s rich cultural tapestry
            </p>
        </div>
    );
}
