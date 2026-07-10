import Hero from "../components/Hero";
import About from "../components/about";
import Skills from "../components/skill section";
import Projects from "../components/projects";
import Contact from "../components/Contact";
import WorkedWith from "../components/workedwith";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <WorkedWith />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
}