import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Project } from "@/data/projects";
import { siteCopy, type Locale } from "@/data/site";
import { ProjectMedia } from "@/components/ProjectMedia";

export function ProjectDetailPage({
  project,
  locale = "ru"
}: {
  project: Project;
  locale?: Locale;
}) {
  const copy = siteCopy[locale].detail;
  const homeHref = locale === "en" ? "/en/#projects" : "/#projects";
  const contactHref = locale === "en" ? "/en/#contact" : "/#contact";
  const heroVideoSrc =
    project.slug === "whyspent" ? project.demoVideoSrc : project.media.videoSrc;

  return (
    <main>
      <section className="mx-auto max-w-[1440px] px-5 pb-12 pt-24 md:px-10 md:pb-24 md:pt-32">
        <Link
          aria-label={copy.backLabel}
          className="back-button focus-ring"
          href={homeHref}
        >
          <ArrowLeft aria-hidden="true" className="back-arrow-icon" strokeWidth={1.8} />
        </Link>

        <div className="mt-10 grid gap-6 md:mt-16 md:grid-cols-[1fr_0.85fr] md:items-end md:gap-20">
          <h1 className="text-5xl font-normal leading-none text-paper md:text-9xl">
            {project.title}
          </h1>
          <div>
            <p className="max-w-3xl text-xl font-normal leading-snug text-paper md:text-[32px]">
              {project.subtitle}
            </p>
            <p className="mt-4 text-sm text-paper/55 md:mt-6 md:text-base">
              {project.year}{project.status ? ` · ${project.status}` : ""}
            </p>
          </div>
        </div>

        <div className="mt-10 md:mt-14">
          {heroVideoSrc ? (
            <ProjectMedia
              autoPlay
              aspect="wide"
              detail={`${copy.demo} ${project.title}`}
              fit={project.slug === "whyspent" ? "contain" : project.media.fit}
              kind="video"
              label={`${copy.demo} ${project.title}`}
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

      <section className="mx-auto max-w-[1440px] px-5 py-14 md:px-10 md:pb-4 md:pt-24">
        <div className="ml-auto grid max-w-5xl gap-12 md:gap-20">
          <TextBlock title={copy.about} text={project.overview} />
          <TextBlock title={copy.task} text={project.task} />
          <div>
            <h2 className="portfolio-heading">{copy.work}</h2>
            <ul className="case-list">
              {project.whatWasDone.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <TextBlock title={copy.result} text={project.result} />
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-12 md:px-10 md:py-24">
        <div className="grid gap-3 md:grid-cols-2 md:gap-5">
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

      <section className="mx-auto max-w-[1440px] px-5 pb-14 pt-2 md:px-10 md:pb-28 md:pt-4">
        <div className="rounded-[28px] bg-paper p-5 text-ink md:rounded-[32px] md:p-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end md:gap-8">
            <h2 className="max-w-4xl text-3xl font-normal leading-tight md:text-7xl">
              {copy.similarProduct}
            </h2>
            <Link className="button-dark focus-ring w-full md:w-auto" href={contactHref}>
              {copy.discuss}
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
      <h2 className="portfolio-heading">{title}</h2>
      <p className="case-copy">{text}</p>
    </div>
  );
}
