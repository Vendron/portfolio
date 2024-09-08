import Image from "next/image";
import Link from "next/link";

/**
 * @brief       Primary links
 * @description This array contains the primary links and their hrefs.
 */
const primaryLinks: { name: string; href: string }[] = [
    { name: "LinkedIn", href: "/shop" },
    { name: "Github", href: "/team" },
    { name: "Tutorial", href: "/tutorial" },
];

/**
 * @brief       Footer component
 * @description This component is used to display the footer section of the website.
 * @returns     Footer section
 */
export default function Footer() {
    return (
        <footer className="justify-between max-w-5xl px-6 pt-12 pb-6 mx-auto mt-10 text-black bg-white dark:text-white dark:bg-stone-900">
            <div className="mx-auto">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-20">
                    <div className="w-full m-1">
                        <div className="flex items-center mb-2">
                            <Image
                                src="/images/profile_smile.png"
                                alt="Vendron logo"
                                width={64}
                                height={64}
                                className="mr-4"
                            />
                            <div>
                                <h5 className="text-xl font-bold">VENDRON.</h5>
                                <p className="text-sm text-stone-400">
                                    Portfolio of projects and products by Vendron.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full m-1">
                        <h5 className="mb-2 text-xl font-bold">QUICK LINKS</h5>
                        <ul className="text-sm text-stone-400">
                            {primaryLinks.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        className="hover:text-white hover:font-bold"
                                        href={item.href}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-full m-1">
                        <h5 className="mb-2 text-xl font-bold">CONTACT</h5>
                        <ul className="text-sm text-stone-400">
                            <li>
                                <Link
                                    className="hover:text-white hover:font-bold"
                                    href="mailto:hello@vendron.org"
                                >
                                    hello@vendron.org
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-white hover:font-bold"
                                    href="/support"
                                >
                                    Support Server
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-10 text-sm text-stone-400">
                    <span>Copyright © 2024 Vendron. All rights reserved</span>
                    <Link
                        href="/terms"
                        className="text-blue-400 transition-colors duration-300 ease-in-out hover:text-white"
                    >
                        Terms & Conditions
                    </Link>
                </div>
            </div>
        </footer>
    );
}
