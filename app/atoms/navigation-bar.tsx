'use client';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navigationList = [
    { name: "Home", href: "#" },
    { name: "Intro", href: "#intro" },
    { name: "History", href: "#history" },
    { name: "Map", href: "#map" },
    { name: "Education", href: "#education" },
];

export default function NavigationBar() {
    const [activeItem, setActiveItem] = useState("Home");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;


            if (currentScrollY < lastScrollY || currentScrollY < 10) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 100) {

                setIsVisible(false);
                setMobileMenuOpen(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: { name: string; href: string }) => {
        e.preventDefault();
        setActiveItem(item.name);
        setMobileMenuOpen(false);

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
        <div className={`fixed top-0 left-0 right-0 z-50 border-b-4 sm:border-b-6 md:border-b-10 border-black bg-white transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
            }`}>
            <nav className="flex items-center justify-between p-4 sm:p-6 mx-4 sm:mx-8 md:mx-12 lg:mx-32 xl:mx-48 2xl:mx-64">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Nusantara</h1>

                {/* Desktop Navigation */}
                <ul className="hidden lg:flex gap-4 xl:gap-8 text-lg xl:text-xl">
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

                <div className="flex items-center gap-4">
                    <Button variant={"red"} className="hidden sm:inline-flex text-sm md:text-base">ID</Button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 text-black hover:bg-gray-100 rounded-md transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-t-2 border-black ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 border-t-0'
                }`}>
                <ul className="flex flex-col p-4 space-y-2 bg-white">
                    {navigationList.map((item, index) => (
                        <li
                            key={item.name}
                            className="relative"
                            style={{
                                animation: mobileMenuOpen ? `slideIn 0.3s ease-out ${index * 0.05}s both` : 'none'
                            }}
                        >
                            <a
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item)}
                                className={`block py-3 px-4 text-lg font-semibold transition-colors rounded-md ${activeItem === item.name
                                        ? "bg-red-600 text-white"
                                        : "hover:bg-gray-100"
                                    }`}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                    <li
                        className="pt-2"
                        style={{
                            animation: mobileMenuOpen ? `slideIn 0.3s ease-out ${navigationList.length * 0.05}s both` : 'none'
                        }}
                    >
                        <Button className="w-full sm:hidden">EN</Button>
                    </li>
                </ul>
            </div>
        </div>
    );
}