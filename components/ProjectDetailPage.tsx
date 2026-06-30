import Link from "next/link";
import type { Project } from "@/data/projects";
import { ProjectMedia } from "@/components/ProjectMedia";

export function ProjectDetailPage({ project }: { project: Project }) {
  const heroVideoSrc =
    project.slug === "whyspent" ? project.demoVideoSrc : project.media.videoSrc;

  return (
    <main>
      <section className="mx-auto max-w-[1440px] px-6 pb-16 pt-28 md:px-10 md:pb-24 md:pt-32">
        <Link
          aria-label="Назад к проектам"
          className="back-button focus-ring"
          href="/#projects"
        >
          <span aria-hidden="true">←</span>
        </Link>

        <div className="mt-16 grid gap-10 md:grid-cols-[1fr_0.85fr] md:items-end md:gap-20">
          <h1 className="text-7xl font-normal leading-none text-paper md:text-9xl">
            {project.title}
          </h1>
          <div>
            <p className="max-w-3xl text-2xl leading-snug text-paper md:text-4xl">
              {project.subtitle}
            </p>
            <p className="mt-6 text-base text-paper/55">
              {project.year}{project.status ? ` · ${project.status}` : ""}
            </p>
          </div>
        </div>

        <div className="mt-14">
          {heroVideoSrc ? (
            <ProjectMedia
              autoPlay
              aspect="wide"
              detail={`Демо продукта ${project.title}`}
              fit={project.slug === "whyspent" ? "contain" : project.media.fit}
              kind="video"
              label={`Демо ${project.title}`}
              poster={project.media.poster}
              videoSrc={heroVideoSrc}
            />
          ) : (
            <ProjectMedia
              aspect="wide"
              detail={project.media.detail}
              fit={project.media.fit}
              imageSrc={project.media.imageSrc}
              kind={project.media.kind}
              label={project.media.label}
              poster={project.media.poster}
              videoSrc={project.media.videoSrc}
            />
          )}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pb-3 pt-16 md:px-10 md:pb-4 md:pt-24">
        <div className="ml-auto grid max-w-5xl gap-20 md:gap-28">
          <TextBlock title="о проекте" text={project.overview} />
          <TextBlock title="задача" text={project.task} />
          <div>
            <h2 className="text-3xl font-normal leading-tight text-paper md:text-5xl">что сделано</h2>
            <ul className="mt-8 grid gap-4 text-xl leading-relaxed text-paper md:text-2xl">
              {project.whatWasDone.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <TextBlock title="результат" text={project.result} />
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-5 md:grid-cols-2">
          {project.gallery.map((media, index) => (
            <ProjectMedia
              autoPlay={media.kind === "video"}
              aspect={media.aspect}
              className={media.aspect === "wide" ? "md:col-span-2" : ""}
              detail={media.detail}
              fit={media.fit}
              imageSrc={media.imageSrc}
              key={`${project.slug}-media-${index}`}
              kind={media.kind}
              label={media.label}
              poster={media.poster}
              videoSrc={media.videoSrc}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pb-20 pt-3 md:px-10 md:pb-28 md:pt-4">
        <div className="rounded-[32px] bg-paper p-6 text-ink md:p-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="max-w-4xl text-4xl font-normal leading-tight md:text-7xl">
              хотите похожий продукт?
            </h2>
            <Link className="button-dark focus-ring" href="/#contact">
              обсудить проект
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function TextBlock({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h2 className="text-3xl font-normal leading-tight text-paper md:text-5xl">{title}</h2>
      <p className="mt-8 max-w-4xl text-xl leading-relaxed text-paper md:text-2xl">
        {text}
      </p>
    </div>
  );
}
