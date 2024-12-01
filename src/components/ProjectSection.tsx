import React, { useState, useEffect, useCallback } from "react";
import { projects } from "@/data/projects";
import ProjectTile from "./ProjectTile";
import { Project } from "@/common/projects/dto/project.dto";

const ProjectSection: React.FC = () => {
    const [showAll, setShowAll] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const handleResize = useCallback(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    const visibleProjects: Project[] = showAll 
        ? projects 
        : isMobile
            ? projects.slice(0, 4)
            : projects.slice(0, 6);

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
                                isInteractable={showAll || index < (isMobile ? 3 : 3)}
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

export default ProjectSection;
