import { ArrowRight, BarChart3, Bot, ChartNoAxesCombined, Globe2, Megaphone, Network, Search, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services, totals, resultDisclaimer } from "@/lib/fazero-data";

const icons = [
  Megaphone,
  Users,
  Network,
  Bot,
  Search,
  Search,
  Globe2,
  ChartNoAxesCombined,
  BarChart3,
];

export function Eyebrow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="label mb-5 flex items-center gap-3 !bg-transparent">
      <span className="h-px w-8 bg-primary" />
      {children}
    </p>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  body,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>

      <h2
        className={`section-title !bg-transparent ${
          dark ? "!text-[#F5F0E8]" : "!text-[#151515]"
        }`}
      >
        {title}
      </h2>

      {body && (
        <p
          className={`mt-6 max-w-2xl text-base leading-8 ${
            dark
              ? "!text-[#F5F0E8]/70"
              : "!text-[#5B554C]"
          }`}
        >
          {body}
        </p>
      )}
    </div>
  );
}

export function ServicesGrid({
  limit,
}: {
  limit?: number;
}) {
  return (
    <div className="mt-14 grid border-l border-t border-border md:grid-cols-2 lg:grid-cols-3">
      {services.slice(0, limit).map((s, i) => {
        const Icon = icons[i] ?? Megaphone;

        return (
          <article
            key={s.name}
            className="group min-h-64 border-b border-r border-border bg-background p-7 transition-colors hover:bg-secondary"
          >
            <div className="flex items-center justify-between">
              <span className="grid size-10 place-items-center border border-primary/35 text-primary">
                <Icon className="size-4" />
              </span>

              <span className="text-xs text-muted-foreground">
                0{i + 1}
              </span>
            </div>

            <h3 className="mt-10 font-display text-2xl">
              {s.name}
            </h3>

            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {s.description}
            </p>

            <div className="mt-6 flex items-center gap-2 overflow-hidden text-[10px] uppercase text-primary">
              <span className="h-px w-6 bg-primary transition-all group-hover:w-10" />
              {s.short}
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function ResultsBand() {
  return (
    <section
      className="!bg-[#F5F0E8] py-24 !text-[#151515]"
      style={{
        backgroundColor: "#F5F0E8",
        color: "#151515",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
        <SectionIntro
          eyebrow="Documented portfolio"
          title="Results Backed by Real Conversions."
          body="A transparent look at Fazero International's Meta advertising programs across real estate, interior design, construction and technology — measured through leads, spend, reach and client-confirmed conversions."
        />

        <div className="mt-16 grid border-l border-t border-[#151515]/15 sm:grid-cols-2 lg:grid-cols-4">
          {totals.map(([v, l], i) => (
            <div
              key={l}
              className="border-b border-r border-[#151515]/15 p-6"
            >
              <p className="font-display text-4xl !text-[#C9A45C] lg:text-5xl">
                {v}
              </p>

              <p className="mt-3 text-xs uppercase tracking-[0.12em] !text-[#5B554C]">
                {l}
              </p>

              <div className="mt-8 h-px !bg-[#151515]/10">
                <div
                  className="h-px !bg-[#C9A45C]"
                  style={{
                    width: `${38 + (i * 7) % 55}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-7 border-t border-[#151515]/15 pt-8 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-3xl text-xs leading-6 !text-[#5B554C]">
            {resultDisclaimer}
          </p>

          <Button
            asChild
            variant="outline"
            className="h-12 shrink-0 rounded-none !border-[#C9A45C] bg-transparent !text-[#151515] hover:!bg-[#C9A45C] hover:!text-[#151515]"
          >
            <a href="/case-studies">
              Explore case studies
              <ArrowRight />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 lg:flex-row lg:items-end lg:justify-between lg:px-10">
        <div>
          <p className="label text-gold">
            Your next stage
          </p>

          <h2 className="mt-5 max-w-3xl font-display text-5xl leading-[1.02] sm:text-6xl">
            Let’s build growth that can be measured.
          </h2>
        </div>

        <Button
          asChild
          className="h-14 shrink-0 rounded-none bg-gold px-7 text-foreground hover:bg-gold/90"
        >
          <a href="/contact">
            Request a Consultation
            <ArrowRight />
          </a>
        </Button>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section className="relative overflow-hidden bg-secondary pb-20 pt-40">
      <div className="absolute inset-y-0 right-0 hidden w-2/5 border-l border-border lg:block">
        <div className="absolute left-1/3 top-0 h-full w-px bg-border" />

        <div className="absolute left-0 top-1/2 h-px w-full bg-border" />

        <div className="absolute left-1/3 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 bg-primary" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 lg:px-10">
        <Eyebrow>{eyebrow}</Eyebrow>

        <h1 className="max-w-5xl font-display text-5xl leading-[.98] sm:text-6xl lg:text-8xl">
          {title}
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
          {body}
        </p>
      </div>
    </section>
  );
}