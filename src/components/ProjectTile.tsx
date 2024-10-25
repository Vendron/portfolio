import React from "react";
import Image from "next/image";
import Link from "next/link";
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

export default ProjectTile;
