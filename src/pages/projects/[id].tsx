import { useRouter } from "next/router";
import { projects, Project } from "../../data/projects"; // Import the correct 'Project' type
import Navigation from "../navigation";
import Footer from "../footer";
import ProjectDetailContent from "./project_content";

const ProjectDetail: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    const project = projects.find((p: Project) => p.id.toString() === id); // Use the correct 'Project' type

    if (!project) {
        return <p>Project not found</p>;
    }

    const relatedProjects = projects.filter((p: Project) => project.relatedProjects.includes(p.id)); // Use the correct 'Project' type

    return (
        <div>
            <Navigation />
            <ProjectDetailContent project={project} relatedProjects={relatedProjects} />
            <Footer />
        </div>
    );
};

export default ProjectDetail;