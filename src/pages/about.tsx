import Image from "next/image";

/**
 * @brief       About component
 * @description This component is used to display the about me section, to introduce the user.
 * @returns     About section
 */
export default function About() {
    return (
        <section className="py-16 bg-stone-100 dark:bg-stone-950">
            <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid gap-8 overflow-hidden md:grid-cols-2">
                    <div className="flex items-center justify-center p-4 text-stone-950 dark:text-white">
                        <div>
                            <h2 className="mb-6 text-3xl font-bold text-center text-black dark:text-white">
                                About Me
                            </h2>
                            <p>
                                I hold a Master&rsquo;s degree in Computer Science,
                                specializing in Machine Learning. With extensive
                                experience in both academic research and private
                                sector projects, my expertise lies in optimizing
                                workflows and applying AI techniques to real-world
                                challenges. I have a passion for creating scalable
                                machine learning models that drive innovation.
                            </p>
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center p-4">
                        <Image
                            src="/images/profile_mac.png" // Replace with your image path
                            alt="Profile Picture"
                            width={400}
                            height={400}
                            className="rounded-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}