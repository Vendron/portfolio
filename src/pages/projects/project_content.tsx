import Image from "next/image";
import Link from "next/link";
import { Key } from "react";
import { IconType } from "react-icons";
import { FaSquareGithub} from "react-icons/fa6";
interface Project {
    id: string;
    title: string;
    imageUrl?: string;
    altText?: string;
    metric?: string;
    startDate?: string;
    endDate?: string;
    description?: string;
    githubUrl?: string;
    websiteUrl?: string;
    tags?: Array<{ name: string; color: string; icon: IconType }>; // Updated to match projects.tsx
}

interface ProjectProps {
    project: Project;
    relatedProjects: Project[];
}

const ProjectDetailContent: React.FC<ProjectProps> = ({
    project,
    relatedProjects,
}) => {
    const visibleTags = project.tags?.slice(0, 3) || []; // Only show the first 3 tags

    return (
        <div className="container px-4 py-12 mx-auto">
            {project.imageUrl && (
                <Image
                    src={project.imageUrl}
                    alt={project.altText ?? ""}
                    width={800}
                    height={400}
                    className="object-cover w-full rounded-lg h-96"
                />
            )}
            <div>
                <h1 className="mt-6 text-4xl font-bold">{project.title}</h1>
                <p className="mt-4 text-lg">{project.metric}</p>
                <p className="mt-4 text-sm text-stone-600">
                    <strong>Start Date:</strong> {project.startDate}
                </p>
                <p className="text-sm text-stone-600">
                    <strong>End Date:</strong> {project.endDate}
                </p>
                <div className="mt-6">
                    <p className="text-lg">{project.description}</p>
                    {project.githubUrl && (
                        <p className="mt-4">
                            
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                className="text-blue-500 underline"
                            >
                                <FaSquareGithub className="w-4 h-4" /> {/* Icon rendering */}
                                GitHub
                            </a>
                        </p>
                    )}
                    {project.websiteUrl && (
                        <p className="mt-4">
                            <a
                                href={project.websiteUrl}
                                target="_blank"
                                className="text-blue-500 underline"
                            >
                                Visit Project Website
                            </a>
                        </p>
                    )}
                    {visibleTags.length > 0 && (
                        <div className="flex flex-wrap mt-4 space-x-2">
                            {visibleTags.map((tag, index) => (
                                <span
                                    key={index}
                                    className={`flex items-center space-x-1 px-2 py-1 text-xs font-semibold text-white rounded-full ${tag.color}`}
                                >
                                    <tag.icon className="w-4 h-4" /> {/* Icon rendering */}
                                    <span>{tag.name}</span>
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-12">
                <h2 className="text-2xl font-bold">Related Projects</h2>
                <div className="grid grid-cols-1 gap-8 mt-6 md:grid-cols-2 lg:grid-cols-3">
                    {relatedProjects.map((relatedProject) => (
                        <Link
                            key={relatedProject.id}
                            href={`/projects/${relatedProject.id}`}
                        >
                            <div className="relative overflow-hidden transition transform bg-white rounded-lg shadow-md cursor-pointer dark:bg-stone-700 hover:bg-opacity-75 hover:scale-105">
                                {relatedProject.imageUrl ? (
                                    <Image
                                        src={relatedProject.imageUrl}
                                        alt={relatedProject.altText ?? ""}
                                        width={400}
                                        height={300}
                                        className="object-cover w-full h-48"
                                    />
                                ) : (
                                    <div className="object-cover w-full h-48 bg-stone-200 dark:bg-stone-600"></div>
                                )}
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-stone-800 dark:text-white">
                                        {relatedProject.title}
                                    </h3>
                                    <p className="text-stone-600 dark:text-stone-300">
                                        {relatedProject.metric}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailContent;