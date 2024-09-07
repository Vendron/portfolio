import { useRouter } from "next/router";
import { projects } from "../../data/projects";
import Navigation from "../navigation";
import Footer from "../footer";
import ProjectDetailContent from "./project_content";

const ProjectDetail: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    const project = projects.find((p: any) => p.id.toString() === id);

    if (!project) {
        return <p>Project not found</p>;
    }

    const relatedProjects = projects.filter((p: any) => project.relatedProjects.includes(p.id));

    return (
        <div>
            <Navigation />
            <ProjectDetailContent project={project} relatedProjects={relatedProjects} />
            <Footer />
        </div>
    );
};

export default ProjectDetail;