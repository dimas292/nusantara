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
        <div className={`fixed top-4 left-4 right-4 z-50 backdrop-blur-md bg-white/40 border border-white/20 shadow-2xl rounded-2xl transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
            }`}>
            <nav className="flex items-center justify-between p-4 sm:p-6 mx-2 sm:mx-4 md:mx-6 lg:mx-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">Nusantara</h1>

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
                    <Button  className="hidden sm:inline-flex text-sm md:text-base backdrop-blur-sm bg-red-600/90 hover:bg-red-700/90 rounded-full">ID</Button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 text-black hover:bg-white/50 rounded-full transition-all backdrop-blur-sm"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-white/20 ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 border-t-0'
                }`}>
                <ul className="flex flex-col p-4 space-y-2 backdrop-blur-xl bg-white/50">
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
                                className={`block py-3 px-4 text-lg font-semibold transition-all rounded-xl ${activeItem === item.name
                                        ? "bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg"
                                        : "hover:bg-white/50 backdrop-blur-sm"
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