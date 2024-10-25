import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ProjectSection from "@/components/ProjectSection";

/**
 * @brief       Portfolio Page
 * @description This page is used to display the projects, showing proof-of-work.
 * @returns     Portfolio page
 */
export default function Portfolio() {
    return (
        <>
            <Navigation />
            <ProjectSection />
            <Footer />
        </>
    );
}
