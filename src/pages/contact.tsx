// Portfolio Contact Me
import React from "react";
import Navigation from "./navigation";
import Link from "next/link";
import Footer from "./footer";

const Contact: React.FC = () => (
    <div>
        <div className="bg-stone-100 dark:bg-stone-950">
            <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <h1 className="text-4xl font-bold">Let&apos;s Connect</h1> 
                    <p className="text-stone-600 dark:text-stone-400">
                        I&apos;m always open to new opportunities and
                        collaborations. Feel free to reach out to me using the
                        following methods.
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center mt-8 space-y-4">
                    <h2 className="text-2xl font-bold">Email</h2>
                    <p className="text-stone-600 dark:text-stone-400">
                        <Link
                            className="hover:text-amber-500"
                            href="mailto:
                                
                            "
                        ></Link>
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center mt-8 space-y-4">
                    <h2 className="text-2xl font-bold">Social Media</h2>
                    <p className="text-stone-600 dark:text-stone-400">
                        <Link
                            className="hover:text-amber-500"
                            href="https://twitter.com/
                            "
                        ></Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default Contact;
