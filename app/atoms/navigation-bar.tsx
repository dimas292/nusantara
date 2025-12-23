'use client';
import { Button } from "@/components/ui/button";
import { useState } from "react";

const navigationList = [
    { name: "Home", href: "#" },
    { name: "Intro", href: "#intro" },
    { name: "History", href: "#history" },
    { name: "Map", href: "#map" },
    { name: "Education", href: "#education" },
];

export default function NavigationBar() {
    const [activeItem, setActiveItem] = useState("Home");

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: { name: string; href: string }) => {
        e.preventDefault();
        setActiveItem(item.name);

        if (item.href === "#") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            const element = document.querySelector(item.href);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    };

    return (
        <div className="sticky top-0 z-50 border-b-10 border-black-200 bg-white">
            <nav className="flex items-center p-6 mx-12 lg:mx-32 xl:mx-48 2xl:mx-64">
                <h1 className="text-4xl">Nusantara</h1>
                <div className="flex-grow"></div>
                <ul className="flex gap-8 text-xl">
                    {navigationList.map((item) => (
                        <li
                            key={item.name}
                            className="relative cursor-pointer group"
                        >
                            <a
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item)}
                            >
                                {item.name}
                            </a>
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