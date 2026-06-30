import { About } from "@/components/About";
import { ContactForm } from "@/components/ContactForm";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectGrid />
      <Services />
      <About />
      <Process />
      <ContactForm />
    </main>
  );
}
