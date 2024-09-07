import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const navItems = [
    { name: "About Me", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
];

const Navigation: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav
            className={`${theme === "light" ? "bg-white" : "bg-gray-800"} shadow-md`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <span
                                className={`text-xl font-bold ${theme === "light" ? "text-gray-800" : "text-white"}`}
                            >
                                Vendron
                            </span>
                            <span className="text-xl font-bold text-indigo-600">
                                .
                            </span>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`${theme === "light" ? "text-gray-600 hover:bg-gray-100 hover:text-gray-900" : "text-gray-300 hover:bg-gray-700 hover:text-white"} px-3 py-2 rounded-md text-sm font-medium`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <button
                            onClick={toggleTheme}
                            className={`${theme === "light" ? "bg-gray-200 text-gray-800" : "bg-gray-700 text-white"} px-3 py-2 rounded-md flex items-center text-sm`}
                        >
                            <div className="mr-2">
                                {theme === "light" ? (
                                    <Moon size={16} />
                                ) : (
                                    <Sun size={16} />
                                )}
                            </div>
                            <div>{theme === "light" ? "Dark" : "Light"}</div>
                        </button>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleTheme}
                            className={`${theme === "light" ? "bg-gray-200 text-gray-800" : "bg-gray-700 text-white"} p-2 rounded-md mr-2`}
                            aria-label="Toggle theme"
                        >
                            {theme === "light" ? (
                                <Moon size={20} />
                            ) : (
                                <Sun size={20} />
                            )}
                        </button>
                        <button
                            onClick={toggleMenu}
                            className={`inline-flex items-center justify-center p-2 rounded-md ${theme === "light" ? "text-gray-400 hover:text-gray-500 hover:bg-gray-100" : "text-gray-300 hover:text-white hover:bg-gray-700"} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500`}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X
                                    className="block h-6 w-6"
                                    aria-hidden="true"
                                />
                            ) : (
                                <Menu
                                    className="block h-6 w-6"
                                    aria-hidden="true"
                                />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            {isOpen && (
                <div className="md:hidden">
                    <div
                        className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${theme === "light" ? "bg-white" : "bg-gray-800"}`}
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`${theme === "light" ? "text-gray-600 hover:bg-gray-100 hover:text-gray-900" : "text-gray-300 hover:bg-gray-700 hover:text-white"} block px-3 py-2 rounded-md text-base font-medium`}
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
