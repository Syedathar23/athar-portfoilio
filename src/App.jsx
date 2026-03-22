import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { SkillSection } from "@/sections/SkillSection";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
import EducationSection from './sections/EducationSection';
import TrainingSection from "./sections/TrainingSection";
import Certifications from "./sections/Certifications";
function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <EducationSection />
        <TrainingSection />
        <SkillSection />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
