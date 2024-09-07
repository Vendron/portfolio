/**
 * @brief       About component
 * @description This component is used to display the about me section, to introduce the user.
 * @returns     About section
 */
export default function About() {
    return (
        <section className="py-16 bg-gray-100 dark:bg-gray-900">
            <div className="container px-4 mx-auto">
                <h2 className="mb-6 text-3xl font-bold text-center text-black dark:text-white">
                    About Me
                </h2>
                <div className="gap-8 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-700">
                    <p className="p-4 text-gray-900 dark:text-white">
                        I hold a Master&rsquo;s degree in Computer Science,
                        specializing in Machine Learning. With extensive
                        experience in both academic research and private sector
                        projects, my expertise lies in optimizing workflows and
                        applying AI techniques to real-world challenges. I have
                        a passion for creating scalable machine learning models
                        that drive innovation.
                    </p>
                </div>
            </div>
        </section>
    );
}
