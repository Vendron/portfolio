import Navigation from "../components/navigation";
import Footer from "../components/footer";
import ProjectsSection from "@/components/projects";

/**
 * @brief       Portfolio Page
 * @description This page is used to display the projects, showing proof-of-work.
 * @returns     Portfolio page
 */
export default function Portfolio() {
    return (
        <>
            <Navigation />
            <ProjectsSection />
            <Footer />
        </>
    );
}
