import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { IoEarth } from "react-icons/io5";

const navItems = [
    { name: "About Me", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
];

const Navigation: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const [isSpinning, setIsSpinning] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleToggleTheme = () => {
        setIsSpinning(true);
        setTimeout(() => {
            toggleTheme();
            setIsSpinning(false);
        }, 500); // Match the duration of the spin animation
    };

    return (
        <nav className={`${theme === "light" ? "bg-white" : "bg-stone-900"} shadow-md`}>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <span
                                className={`text-4xl font-bold text-amber-500`}
                            >
                                Vendron
                            </span>
                            <span className="text-4xl font-bold text-black dark:text-white">
                                .
                            </span>
                        </Link>
                    </div>
                    </div>
                    <div className="items-center hidden space-x-4 md:flex">
                        <div className="flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`${theme === "light" ? "text-stone-600 hover:text-stone-950" : "text-stone-300 hover:text-white"} px-3 py-2 rounded-md text-sm font-medium hover:font-bold`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <button
                            onClick={handleToggleTheme}
                            className={`${theme === "light" ? "text-stone-800" : "text-white"} p-2 rounded-md mr-2`}
                            aria-label="Toggle theme"
                        >
                            <div className={isSpinning ? "animate-spin" : ""}>
                                {theme === "light" ? (
                                    <Moon size={20} />
                                ) : (
                                    <Sun size={20} />
                                )}
                            </div>
                        </button>
                    </div>
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={handleToggleTheme}
                            className={`${theme === "light" ? "text-stone-800" : "text-white"} p-2 rounded-md`}
                            aria-label="Toggle theme"
                        >
                            <div className={isSpinning ? "animate-spin" : ""}>
                                {theme === "light" ? (
                                    <Moon size={20} />
                                ) : (
                                    <Sun size={20} />
                                )}
                            </div>
                        </button>
                        <button
                            onClick={toggleMenu}
                            className={`${theme === "light" ? "text-stone-800" : "text-white"} p-2 rounded-md`}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>
                </div>
            </div>
                        {/* Mobile menu, show/hide based on menu state */}
                        {isOpen && (
                <div className="md:hidden">
                    <div
                        className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${theme === "light" ? "bg-white" : "bg-stone-800"}`}
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`${theme === "light" ? "text-stone-600 hover:bg-stone-100 hover:text-stone-950" : "text-stone-300 hover:bg-stone-700 hover:text-white"} block px-3 py-2 rounded-md text-base font-medium`}
                                onClick={toggleMenu}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
