import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Project {
    id: number;
    title: string;
    metric: string;
    imageUrl: string;
    altText: string;
    url?: string;
    tags?: { [key: string]: string }[];
}

const projects: Project[] = [
    {
        id: 1,
        title: "Scikit-Longitudinal Package",
        metric: "Longitudinal Data Analysis",
        imageUrl: "/images/Scikit-long-banner.png",
        altText: "NLP word cloud",
        url: "https://simonprovost.github.io/scikit-longitudinal/",
        tags: [
            { Python: "bg-yellow-500" },
            { "Machine Laerning": "bg-blue-500" },
        ],
    },
    {
        id: 2,
        title: "Helio Discord App",
        metric: "500,000 users+",
        imageUrl: "/images/helio_game.png",
        altText: "NLP word cloud",
        url: "https://helio.gg",
        tags: [
            { Game: "bg-yellow-500" },
            { "Machine Learning": "bg-blue-500" },
            { TypeScript: "bg-blue-600" },
        ],
    },
    {
        id: 3,
        title: "Biggest Mental Health Discord Community",
        metric: "700,000 joins+",
        imageUrl: "/images/DABanner.png",
        altText: "NLP word cloud",
        url: "https://depressionsantidote.com",
        tags: [
            { Community: "bg-yellow-500" },
            { "Machine Laerning": "bg-blue-500" },
        ],
    },
    {
        id: 4,
        title: "Dionysus Discord App",
        metric: "100,000 users+",
        imageUrl: "/images/Dionysushead.png",
        altText: "Climate prediction model visualization",
    },
    {
        id: 5,
        title: "Biggest Mental Health Discord Community",
        metric: "700,000 joins+",
        imageUrl: "/images/DABanner.png",
        altText: "NLP word cloud",
    },
    {
        id: 6,
        title: "Biggest Mental Health Discord Community",
        metric: "700,000 joins+",
        imageUrl: "/images/DABanner.png",
        altText: "NLP word cloud",
    },
    {
        id: 7,
        title: "Biggest Mental Health Discord Community",
        metric: "700,000 joins+",
        imageUrl: "/images/DABanner.png",
        altText: "NLP word cloud",
    },
    {
        id: 8,
        title: "Biggest Mental Health Discord Community",
        metric: "700,000 joins+",
        imageUrl: "/images/DABanner.png",
        altText: "NLP word cloud",
    },
    {
        id: 9,
        title: "Biggest Mental Health Discord Community",
        metric: "700,000 joins+",
        imageUrl: "/images/DABanner.png",
        altText: "NLP word cloud",
    },
];

const ProjectTile: React.FC<{
    project: Project;
    isInteractable: boolean;
}> = ({ project, isInteractable }) => (
    <Link href={isInteractable ? `/projects/${project.id}` : "#"} passHref>
        <div
            className={`relative overflow-hidden transition transform bg-white rounded-lg shadow-md dark:bg-gray-700 ${
                isInteractable ? "hover:bg-opacity-75 hover:scale-105 cursor-pointer" : "opacity-60"
            }`}
            style={!isInteractable ? { pointerEvents: "none" } : {}}
        >
            <div className="relative">
                <Image
                    src={project.imageUrl}
                    alt={project.altText}
                    width={400}
                    height={300}
                    className="object-cover w-full h-48"
                />
                {project.tags && (
                    <div className="absolute flex flex-wrap space-x-2 bottom-4 left-4">
                        {project.tags.map((tag, index) => (
                            <span
                                key={index}
                                className={`px-2 py-1 text-xs font-semibold text-white rounded-full ${Object.values(tag)[0]}`}
                            >
                                {Object.keys(tag)[0]}
                            </span>
                        ))}
                    </div>
                )}
            </div>
            <div className="p-4">
                <h3 className={`text-lg font-semibold ${isInteractable ? "text-gray-800 dark:text-white hover:text-opacity-75" : "text-gray-400 dark:text-gray-500"}`}>
                    {project.title}
                </h3>
                <p className={`text-gray-600 dark:text-gray-300 ${!isInteractable ? "text-opacity-50" : ""}`}>{project.metric}</p>
            </div>
        </div>
    </Link>
);

const ProjectsSection: React.FC = () => {
    const [showAll, setShowAll] = useState(false);

    // Show first 3 interactable + 3 non-interactable unless "showAll" is true
    const visibleProjects = showAll ? projects : projects.slice(0, 6);

    return (
        <section className="relative bg-gray-100 dark:bg-gray-900">
            <div className="container px-4 mx-auto">
                <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 dark:text-white">
                    Projects
                </h2>

                <div className="relative">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {visibleProjects.map((project, index) => (
                            <ProjectTile
                                key={project.id}
                                project={project}
                                isInteractable={showAll || index < 3}
                            />
                        ))}
                    </div>

                    {!showAll && (
                        <div className="absolute bottom-0 left-0 w-full pointer-events-none h-80 bg-gradient-to-t from-gray-100 dark:from-gray-900 to-transparent"></div>
                    )}
                </div>

                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-4 py-2 text-lg font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        {showAll ? "Hide More" : "Show More"}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;