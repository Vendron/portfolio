import ProjectsSection from "../components/projects";
import Footer from "../components/footer";
import About from "./about";
import Navigation from "../components/navigation";
import SkillsSection from "../components/skills";
import Contact from "../components/contact";

const Home: React.FC = () => (
    <div>
        <header>{/* Add your header content */}</header>
        <main>
            <Navigation />
            <About />
            <ProjectsSection />
            <SkillsSection />
            <Contact />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
);

export default Home;
