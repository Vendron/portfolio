import React from "react";
import Link from "next/link";
import Image from "next/image"; // Assuming you're using next/image for the image component

const Contact: React.FC = () => (
    <div className="bg-stone-100 dark:bg-stone-950">
        <div className="flex flex-col px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 md:flex-row">
            {/* Left Side - Contact Form */}
            <div className="flex-1 space-y-4 md:pr-8">
                <div className="flex items-center">
                    <h1 className="text-4xl font-bold">Contact Me</h1>
                    <div className="w-1/4 md:hidden flex justify-center ml-4">
                        <Image
                            src="/images/profile_mac.png"
                            alt="Contact Us"
                            width={80}
                            height={80}
                            className="rounded-lg"
                        />
                    </div>
                </div>
                <div className="pl-0">
                    <p className="text-stone-600 dark:text-stone-400">
                        Interested in connecting? Shoot me a message below.
                    </p>
                </div>
                <form className="space-y-4">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-lg font-medium text-stone-600 dark:text-stone-400"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="block w-full p-2 mt-1 border rounded-md border-stone-300 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300 focus:border-amber-500 focus:ring-amber-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-lg font-medium text-stone-600 dark:text-stone-400"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="block w-full p-2 mt-1 border rounded-md border-stone-300 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300 focus:border-amber-500 focus:ring-amber-500"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-lg font-medium text-stone-600 dark:text-stone-400"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            required
                            className="block w-full p-2 mt-1 border rounded-lg border-stone-300 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300 focus:border-amber-500 focus:ring-amber-500"
                        />
                    </div>
                    <div className="flex justify-start">
                        <button
                            type="submit"
                            className="px-4 py-2 text-white transition duration-300 rounded-md bg-amber-500 hover:bg-amber-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>

            {/* Right Side - Image (hidden on mobile, shown on md and up) */}
            <div className="flex-1 mt-8 md:mt-0 hidden md:block">
                <Image
                    src="/images/profile_mac.png"
                    alt="Contact Us"
                    layout="responsive"
                    width={330}
                    height={330}
                    className="rounded-lg"
                />
            </div>
        </div>
    </div>
);

export default Contact;
