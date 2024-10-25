import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects";
import { Project } from "@/common/projects/dto/project.dto";

const ProjectTile: React.FC<{
    project: Project;
    isInteractable: boolean;
}> = ({ project, isInteractable }) => {
    const visibleTags = project.tags.slice(0, 3); // Only show the first 3 tags

    return (
        <Link href={isInteractable ? `/projects/${project.id}` : "#"} passHref>
            <div
                className={`relative overflow-hidden transition transform bg-white rounded-lg shadow-md dark:bg-stone-700 ${
                    isInteractable
                        ? "hover:bg-opacity-75 hover:scale-105 cursor-pointer"
                        : "opacity-60"
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
                    {visibleTags.length > 0 && (
                        <div className="absolute flex flex-wrap space-x-2 bottom-4 left-4">
                            {visibleTags.map((tag, index) => (
                                <span
                                    key={index}
                                    className={`flex items-center space-x-1 px-2 py-1 text-xs font-semibold text-white rounded-full ${tag.color}`}
                                >
                                    <tag.icon className="w-4 h-4" />{" "}
                                    {/* Icon rendering */}
                                    <span>{tag.name}</span>
                                </span>
                            ))}
                        </div>
                    )}
                </div>
                <div className="p-4">
                    <h3
                        className={`text-lg font-semibold ${isInteractable ? "text-stone-800 dark:text-white hover:text-opacity-75" : "text-stone-400 dark:text-stone-500"}`}
                    >
                        {project.title}
                    </h3>
                    <p
                        className={`text-stone-600 dark:text-stone-300 ${!isInteractable ? "text-opacity-50" : ""}`}
                    >
                        {project.metric}
                    </p>
                </div>
            </div>
        </Link>
    );
};

const ProjectsSection: React.FC = () => {
    const [showAll, setShowAll] = useState(false);

    // Show first 3 interactable + 3 non-interactable unless "showAll" is true
    const visibleProjects = showAll ? projects : projects.slice(0, 6);

    return (
        <section className="relative bg-stone-100 dark:bg-stone-950">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h2 className="mb-12 text-3xl font-bold text-center text-stone-950 dark:text-white">
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
                        <div className="absolute bottom-0 left-0 w-full pointer-events-none h-80 bg-gradient-to-t from-stone-100 dark:from-stone-950 to-transparent"></div>
                    )}
                </div>

                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-4 py-2 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        {showAll ? "Hide More" : "Show More"}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;