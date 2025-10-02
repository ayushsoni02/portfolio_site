import Header from "@/components/Header";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Blogs from "@/sections/Blogs";
import Contact from "@/sections/Contact";
import Hackathons from "@/sections/Hackathons";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-4xl">
        <Hero />
        {/* <About /> */}
        <Skills />
        <Experience />
        <Projects />
        <Blogs />
        <Hackathons />
        <Contact />
      </main>
    </div>
  );
}
