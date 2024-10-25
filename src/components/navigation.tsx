import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { NavItem } from "@/common/navigation/dto/navigation.dto";
import { MobileMenuProps } from "@/common/navigation/dto/mobilemenuprops.dto";

const navItems: NavItem[] = [
    {
        name: "About Me",
        href: "/about",
        hoverEffect: "hover:bg-blue-500 hover:text-white",
    },
    {
        name: "Portfolio",
        href: "/portfolio",
        hoverEffect: "hover:bg-green-500 hover:text-white",
    },
    {
        name: "Resume",
        href: "/resume",
        hoverEffect: "hover:bg-yellow-500 hover:text-black",
    },
    {
        name: "Contact",
        href: "/contact",
        hoverEffect: "hover:bg-red-500 hover:text-white",
    },
];

const MobileMenu: React.FC<MobileMenuProps> = ({
    navItems,
    toggleMenu,
    theme,
}) => (
    <div className="md:hidden">
        <div
            className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${theme === "light" ? "bg-white" : "bg-stone-800"}`}
        >
            {navItems.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className={`${theme === "light" ? "text-stone-600" : "text-stone-300"} block px-3 py-2 rounded-md text-base font-medium ${item.hoverEffect}`}
                    onClick={toggleMenu} // Close menu on item click
                >
                    {item.name}
                </Link>
            ))}
        </div>
    </div>
);

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
        }, 350);
    };

    return (
        <nav
            className={`${theme === "light" ? "bg-white" : "bg-stone-900"} shadow-md`}
        >
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <span className="text-4xl font-bold text-amber-500">
                                Vendron
                            </span>
                            <span className="text-4xl font-bold text-black dark:text-white">
                                .
                            </span>
                        </Link>
                    </div>
                    <div className="items-center hidden space-x-4 md:flex">
                        <div className="flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`${theme === "light" ? "text-stone-600" : "text-stone-300"} px-3 py-2 rounded-md text-sm font-medium ${item.hoverEffect}`}
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
                <MobileMenu
                    navItems={navItems}
                    toggleMenu={toggleMenu}
                    theme={theme}
                />
            )}
        </nav>
    );
};

export default Navigation;
