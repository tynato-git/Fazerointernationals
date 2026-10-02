import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  CTA,
  PageHero,
  SectionIntro,
} from "@/components/fazero/Sections";
import {
  caseStudies,
  resultDisclaimer,
} from "@/lib/fazero-data";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    ...pageHead(
      "Verified Client Case Studies | Fazero International",
      "Explore documented Meta advertising results across real estate, interior design, construction and technology.",
      "/case-studies"
    ),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Fazero International Client Case Studies",
          description:
            "Documented advertising results with client-confirmed conversions.",
        }),
      },
    ],
  }),
  component: CaseStudies,
});

function CaseStudies() {
  const [filter, setFilter] = useState("Overview");

  const tabs = [
    "Overview",
    "Real Estate",
    "Interior Design",
    "Construction",
    "Technology",
  ];

  const shown =
    filter === "Overview"
      ? caseStudies
      : caseStudies.filter((c) => c.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Verified client results"
        title="Real Campaigns. Real Leads. Confirmed Conversions."
        body="Our documented client portfolio demonstrates how Fazero International measures campaign performance through actual advertising data, lead generation and client-confirmed conversions."
      />

      <section className="py-24">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <SectionIntro
            eyebrow="The numbers behind the work"
            title="Five Programs. Transparent Reporting."
            body="Filter the portfolio by industry, then open each case study for the full documented view."
          />

          <div
            className="mt-12 flex gap-2 overflow-x-auto pb-2"
            role="tablist"
          >
            {tabs.map((t) => (
              <Button
                key={t}
                variant={filter === t ? "default" : "outline"}
                className="shrink-0 rounded-none"
                onClick={() => setFilter(t)}
                role="tab"
                aria-selected={filter === t}
              >
                {t}
              </Button>
            ))}
          </div>

          <Accordion
            type="multiple"
            className="mt-8 border-t border-border"
          >
            {shown.map((c) => (
              <AccordionItem
                key={c.id}
                value={c.id}
                className="bg-background"
              >
                <AccordionTrigger className="px-2 py-7 hover:no-underline">
                  <div className="grid flex-1 grid-cols-[1fr_auto] items-center gap-6 text-left lg:grid-cols-[2fr_1.2fr_1fr_1fr_1fr]">
                    <div>
                      <span className="label">
                        Case study {c.id}
                      </span>

                      <h2 className="mt-2 font-display text-3xl">
                        {c.client}
                      </h2>
                    </div>

                    <p className="hidden text-sm text-muted-foreground lg:block">
                      {c.industry}
                    </p>

                    <Metric
                      value={c.leads}
                      label="Leads"
                    />

                    <Metric
                      value={c.conversions}
                      label="Conversions"
                    />

                    <Metric
                      value={c.rate}
                      label="Conversion rate"
                    />
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-2 pb-10">
                  <div className="grid gap-8 bg-secondary p-7 lg:grid-cols-[1.2fr_2fr]">
                    <div>
                      <p className="label">
                        Campaign flow
                      </p>

                      <div className="mt-8 flex items-center gap-3">
                        <Flow label="Campaign" />

                        <ArrowRight className="size-4 text-primary" />

                        <Flow label={`${c.leads} Leads`} />

                        <ArrowRight className="size-4 text-primary" />

                        <Flow
                          label={`${c.conversions} Conversions`}
                        />
                      </div>

                      <p className="mt-8 text-sm leading-7 text-muted-foreground">
                        {c.campaign}
                        <br />
                        {c.period}

                        {c.duration && (
                          <>
                            <br />
                            {c.duration}
                          </>
                        )}
                      </p>
                    </div>

                    <dl className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3">
                      <Detail
                        label="Ad spend"
                        value={c.spend}
                      />

                      <Detail
                        label="Cost per result"
                        value={c.cpr}
                      />

                      <Detail
                        label="Reach"
                        value={c.reach}
                      />

                      <Detail
                        label="Impressions"
                        value={c.impressions}
                      />

                      <Detail
                        label="Frequency"
                        value={c.frequency}
                      />

                      <Detail
                        label="Cost / conversion"
                        value={c.cpc}
                      />

                      <Detail
                        label="Estimated CPM"
                        value={c.cpm}
                      />

                      {c.ctr && (
                        <Detail
                          label="Link CTR"
                          value={c.ctr}
                        />
                      )}

                      {c.clickCost && (
                        <Detail
                          label="Cost per click"
                          value={c.clickCost}
                        />
                      )}
                    </dl>
                  </div>

                  <p className="mt-5 text-xs text-muted-foreground">
                    Client source: Client Meta Ads export & client-confirmed conversions.
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="mt-10 max-w-4xl border-l border-primary pl-5 text-xs leading-6 text-muted-foreground">
            {resultDisclaimer}
          </p>
        </div>
      </section>

      {/* Portfolio Transparency */}
      <section
        className="!bg-[#F5F0E8] py-24 !text-[#151515]"
        style={{
          backgroundColor: "#F5F0E8",
          color: "#151515",
        }}
      >
        <div
          className="
            mx-auto max-w-[1440px] px-5 lg:px-10
            [&_.section-title]:!bg-transparent
            [&_.section-title]:!text-[#151515]
            [&_.label]:!bg-transparent
            [&_.label]:!text-[#C9A45C]
          "
        >
          <SectionIntro
            eyebrow="Portfolio transparency"
            title="Measured. Reported. Verified."
            body="Fazero International measures campaign performance through actual advertising data and client-confirmed conversions rather than projections."
          />

          <div className="mt-14 flex flex-wrap items-center gap-3">
            {[
              "Campaign",
              "Data",
              "Leads",
              "Sales Pipeline",
              "Confirmed Conversions",
            ].map((x, i) => (
              <div
                key={x}
                className="flex items-center gap-3"
              >
                <span
                  className="
                    !border-[#151515]/20
                    !bg-transparent
                    px-5 py-4
                    text-xs uppercase
                    !text-[#C9A45C]
                  "
                >
                  {x}
                </span>

                {i < 4 && (
                  <ArrowRight className="size-4 !text-[#C9A45C]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

function Metric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div>
      <strong className="font-display text-2xl">
        {value}
      </strong>

      <span className="block text-[9px] uppercase text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

function Flow({ label }: { label: string }) {
  return (
    <span className="border border-primary px-3 py-3 text-center text-[10px] uppercase">
      {label}
    </span>
  );
}

function Detail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="bg-background p-4">
      <dt className="text-[9px] uppercase text-muted-foreground">
        {label}
      </dt>

      <dd className="mt-2 font-display text-2xl">
        {value}
      </dd>
    </div>
  );
}