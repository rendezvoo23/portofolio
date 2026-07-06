import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/ProjectDetailPage";
import { getProject, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }> | { slug: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug, "en");

  if (!project) {
    return {
      title: "Project not found"
    };
  }

  return {
    title: `${project.title} — Simon Bedunkevich`,
    description: project.subtitle
  };
}

export default async function EnglishProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug, "en");

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage locale="en" project={project} />;
}
