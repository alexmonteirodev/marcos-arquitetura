import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { ProjectHero } from "@/components/project/ProjectHero";
import { getNextProject, getProject, projects, type GalleryItem } from "@/data/projects";
import { Placeholder } from "@/ui/Placeholder";
import { RevealProvider } from "@/ui/RevealProvider";
import { RollText } from "@/ui/RollText";
import { SmoothScroll } from "@/ui/SmoothScroll";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.filter((p) => p.page).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.page) return {};
  return {
    title: `${project.name} · Marcos Vinícius Arquitetura`,
    description: project.page.lead,
  };
}

const specLabel = {
  fontSize: 13,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "var(--muted-2)",
} as const;

function GalleryImage({ item }: { item: GalleryItem }) {
  return (
    <div style={{ position: "relative", aspectRatio: item.ratio, height: item.ratio ? undefined : "100%", borderRadius: 4, overflow: "hidden" }}>
      {item.src ? (
        <Image src={item.src} alt={item.label} fill sizes="(max-width: 768px) 100vw, 1440px" style={{ objectFit: "cover" }} />
      ) : (
        <Placeholder label={item.label} style={{ width: "100%", height: "100%", minHeight: 200 }} />
      )}
    </div>
  );
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.page) notFound();
  const { page } = project;
  const next = getNextProject(slug);

  return (
    <RevealProvider>
      <SmoothScroll />
      <main>
        <ProjectHero name={project.name} src={project.src} alt={project.image} location={page.location} country={page.country} />

        <div className="page-over" style={{ background: "var(--paper)" }}>
          <section
            className="page-section reveal"
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              padding: "160px 32px 120px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
              gap: 80,
            }}
          >
            <div className="body-text" style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 640 }}>
              <p style={{ fontSize: "clamp(22px, 2.4vw, 30px)", lineHeight: 1.3, fontWeight: 500, color: "var(--ink)" }}>
                {page.lead}
              </p>
              {page.paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
            <dl className="project-specs">
              {page.specs.map((spec) => (
                <div key={spec.label} style={{ display: "contents" }}>
                  <dt style={specLabel}>{spec.label}</dt>
                  <dd>
                    {spec.value.map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section
            className="page-section"
            style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px 160px", display: "flex", flexDirection: "column", gap: 32 }}
          >
            {page.gallery.map((row, i) => (
              <div
                key={i}
                className={`reveal ${row.split ? "project-gallery-split" : row.items.length > 1 ? "project-gallery-pair" : ""}`}
              >
                {row.items.map((item) => (
                  <GalleryImage key={item.label} item={item} />
                ))}
              </div>
            ))}
          </section>

          <Link
            href={next.page ? `/projetos/${next.slug}` : "/#portfolio-lista"}
            className="next-project btn-roll page-section"
          >
            <span style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <span style={specLabel}>(Próximo projeto)</span>
              <span className="section-title">
                <RollText>{next.name}</RollText>
              </span>
            </span>
            <span className="next-project__arrow" aria-hidden>
              →
            </span>
          </Link>
        </div>
      </main>
      <div className="page-over">
        <Footer base="/" />
      </div>
    </RevealProvider>
  );
}
