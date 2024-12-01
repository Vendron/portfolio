import { FaSquareGithub } from "react-icons/fa6";
import { RiArrowRightUpLine } from "react-icons/ri";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // Support GitHub Markdown
import rehypeRaw from "rehype-raw"; // Support raw HTML Markdown
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/common/projects/dto/project.dto";

interface ProjectProps {
    project: Project;
    relatedProjects: Project[];
}

const ProjectDetailContent: React.FC<ProjectProps> = ({
    project,
    relatedProjects,
}) => {
    if (!project) {
        return <p>Project not found</p>;
    }

    const visibleTags = project.tags;

    return (
        <div className=" bg-stone-100 dark:bg-stone-950">
            <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                {project.imageUrl && (
                    <Image
                        src={project.imageUrl}
                        alt={project.altText ?? ""}
                        // Dynamic sizing based on screen width
                        sizes="(max-width: 768px) 100vw, 
                           (max-width: 1200px) 80vw, 
                           60vw"
                        width={1200}
                        height={600} // Ensures good resolution
                        className="object-cover w-full h-auto rounded-lg"
                    />
                )}
                <div>
                    <h1 className="mt-6 text-4xl font-bold">{project.title}</h1>
                    {visibleTags.length > 0 && (
                        <div className="flex flex-wrap mt-2 space-x-2">
                            {visibleTags.map((tag, index) => (
                                <span
                                    key={index}
                                    className={`flex mt-2 items-center space-x-1 px-2 py-1 text-base font-semibold text-white rounded-full ${tag.color}`}
                                >
                                    <tag.icon className="w-4 h-4" />{" "}
                                    {/* Icon rendering */}
                                    <span>{tag.name}</span>
                                </span>
                            ))}
                        </div>
                    )}
                    <div className="flex items-center mt-4 space-x-4 text-base text-stone-600 dark:text-stone-400">
                        <p>
                            <strong>Start Date:</strong> {project.startDate}
                        </p>
                        <p>
                            <strong>End Date:</strong> {project.endDate}
                        </p>
                    </div>
                    <div className="w-full mt-6">
                        {/* Markdown Rendering with enhanced plugins */}
                        <ReactMarkdown
                            className="prose prose-stone dark:prose-invert max-w-none"
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                        >
                            {project.description}
                        </ReactMarkdown>
                    </div>
                </div>
                <div className="flex mt-4 space-x-4">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            className="inline-flex items-center px-2 py-1 space-x-1 text-base font-semibold text-white rounded-full bg-zinc-800 hover:bg-zinc-950 hover:text-white"
                        >
                            <FaSquareGithub className="w-4 h-4" />{" "}
                            <span>GitHub</span>
                        </a>
                    )}
                    {project.websiteUrl && (
                        <a
                            href={project.websiteUrl}
                            target="_blank"
                            className="inline-flex items-center px-2 py-1 space-x-1 text-base font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-600 hover:text-white"
                        >
                            <RiArrowRightUpLine className="w-4 h-4" /> Visit
                            Project Website
                        </a>
                    )}
                </div>
                <hr className="my-6 border-stone-200 dark:border-stone-600" />
                <div className="">
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
        </div>
    );
};

export default ProjectDetailContent;
