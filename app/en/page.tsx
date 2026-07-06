import { About } from "@/components/About";
import { ContactForm } from "@/components/ContactForm";
import { Process } from "@/components/Process";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Services } from "@/components/Services";

export default function EnglishHome() {
  return (
    <main>
      <ProjectGrid locale="en" />
      <Services locale="en" />
      <About locale="en" />
      <Process locale="en" />
      <ContactForm locale="en" />
    </main>
  );
}
