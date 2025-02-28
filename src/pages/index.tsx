import ProjectsSection from "@/components/ProjectSection";
import Footer from "@/components/footer";
import About from "./about";
import Navigation from "@/components/navigation";
import SkillsSection from "@/components/skills";
import Contact from "@/components/contact";
import Head from "next/head";
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const DynamicProjectsSection = dynamic(() => import("@/components/ProjectSection"), {
    loading: () => <div className="h-96 animate-pulse bg-stone-200 dark:bg-stone-800"></div>
  });
  
  const DynamicSkillsSection = dynamic(() => import("@/components/skills"), {
    loading: () => <div className="h-96 animate-pulse bg-stone-200 dark:bg-stone-800"></div>
  });
  
  const DynamicContact = dynamic(() => import("@/components/contact"), {
    loading: () => <div className="h-96 animate-pulse bg-stone-200 dark:bg-stone-800"></div>
  });
  
  const Home: React.FC = () => (
      <div>
          <Head>
              <title>Vendron</title>
              <meta name="description" content="Vendron's portfolio website" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <header>
              <Navigation />
          </header>
          <main className="scroll-smooth">
              <section id="about">
                  <About />
              </section>
              <section id="projects">
                  <Suspense fallback={<div className="h-96 animate-pulse bg-stone-200 dark:bg-stone-800"></div>}>  
                      <DynamicProjectsSection />
                  </Suspense>
              </section>
              <section id="skills">
                  <Suspense fallback={<div className="h-96 animate-pulse bg-stone-200 dark:bg-stone-800"></div>}>
                      <DynamicSkillsSection />
                  </Suspense>
              </section>
              <section id="contact">
                  <Suspense fallback={<div className="h-96 animate-pulse bg-stone-200 dark:bg-stone-800"></div>}>
                      <DynamicContact />
                  </Suspense>
              </section>
          </main>
          <footer>
              <Footer />
          </footer>
      </div>
  );
  
  export default Home;