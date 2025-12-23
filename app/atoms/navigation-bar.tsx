'use client';
import { Button } from "@/components/ui/button";
import { useState } from "react";

const navigationList = [
    { name: "Home", href: "#" },
    { name: "Intro", href: "#" },
    { name: "History", href: "#" },
    { name: "Map", href: "#" },
    { name: "Education", href: "#" },
];

export default function NavigationBar() {
    const [activeItem, setActiveItem] = useState("Home");

    return (
        <div className="sticky top-0 z-50 border-b-10 border-black-200 bg-white">
            <nav className="flex items-center p-6 mx-12 lg:mx-32 xl:mx-48 2xl:mx-64">
                <h1 className="text-4xl">Nusantara</h1>
                <div className="flex-grow"></div>
                <ul className="flex gap-8 text-xl">
                    {navigationList.map((item) => (
                        <li
                            key={item.name}
                            onClick={() => setActiveItem(item.name)}
                            className="relative cursor-pointer group"
                        >
                            {item.name}
                            <div className={`absolute bottom-0 left-0 h-1 bg-red-600 transition-all duration-500 ${activeItem === item.name
                                ? "w-full"
                                : "w-0 group-hover:w-full"
                                }`}></div>
                        </li>
                    ))}
                </ul>
                <Button variant={"red"} className="ml-8">ID | EN</Button>
            </nav>
        </div>
    );
}