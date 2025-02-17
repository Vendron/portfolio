import ProjectsSection from "./projects";
import Footer from "./footer";
import About from "./about";
import Navigation from "./navigation";
import SkillsSection from "./skills";

const Home: React.FC = () => (
    <div>
        <header>{/* Add your header content */}</header>
        <main>
            <Navigation />
            <About />
            <ProjectsSection />
            <SkillsSection />
            <Footer />
        </main>
        <footer>{/* Add your footer content */}</footer>
    </div>
);

export default Home;
