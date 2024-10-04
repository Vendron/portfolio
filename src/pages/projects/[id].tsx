import { useRouter, NextRouter } from "next/router";
import { projects, Project } from "../../data/projects";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import ProjectDetailContent from "./project_content";
import { useEffect, useState } from "react";

const ProjectDetail: React.FC = () => {
    const router: NextRouter = useRouter();
    const { id } = router.query as { id: string };

    const [project, setProject] = useState<Project | null>(null);
    const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);

    useEffect(() => {
        if (id) {
            const currentProject: Project | undefined = projects.find((p: Project) => p.id.toString() === id);
            setProject(currentProject || null);

            if (currentProject) {
                const related: Project[] = projects.filter((p: Project) => currentProject.relatedProjects.includes(p.id));
                setRelatedProjects(related);
            }
        }
    }, [id]);

    if (!project) {
        return <p>Project not found</p>;
    }

    return (
        <div>
            <Navigation />
            <ProjectDetailContent project={project} relatedProjects={relatedProjects} />
            <Footer />
        </div>
    );
};

export default ProjectDetail;