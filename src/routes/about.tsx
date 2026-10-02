import { createFileRoute } from "@tanstack/react-router";
import { CTA, PageHero, SectionIntro } from "@/components/fazero/Sections";
import { pageHead } from "@/lib/seo";
export const Route=createFileRoute("/about")({head:()=>pageHead("About Fazero International | Business Growth Consultancy","Learn how Fazero connects business strategy, marketing, technology, AI and sales into scalable growth systems.","/about"),component:About});
function About(){return <><PageHero eyebrow="About Fazero" title="We Don’t Just Market Businesses. We Build Growth Engines." body="Fazero International is a business growth consultancy focused on helping organizations identify opportunities, acquire customers, adopt technology, integrate AI, improve sales and build scalable growth systems."/><section className="py-24"><div className="mx-auto grid max-w-[1440px] gap-px bg-border px-5 lg:grid-cols-2 lg:px-10"><article className="bg-background p-10"><p className="label">Mission</p><p className="mt-8 font-display text-4xl leading-tight">To help ambitious businesses build sustainable and scalable growth through strategy, technology, marketing, AI and sales.</p></article><article className="bg-background p-10"><p className="label">Vision</p><p className="mt-8 font-display text-4xl leading-tight">To become a trusted global growth partner for businesses entering new markets and building their next stage of growth.</p></article></div></section><section
  className="!bg-[#F5F0E8] py-24 !text-[#151515]"
  style={{
    backgroundColor: "#F5F0E8",
    color: "#151515",
  }}
>
  <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
    <div>
      <SectionIntro
        eyebrow="How we think"
        title="One System. Six Growth Outcomes."
      />
    </div>

    <div className="mt-14 grid border-l border-t border-[#151515]/15 sm:grid-cols-2 lg:grid-cols-3">
      {[
        "Acquire Customers",
        "Build Digital Visibility",
        "Implement Technology",
        "Adopt AI",
        "Improve Sales",
        "Enter New Markets",
      ].map((x, i) => (
        <div
          key={x}
          className="border-b border-r border-[#151515]/15 p-8"
        >
          <span className="text-xs font-medium text-[#C9A45C]">
            0{i + 1}
          </span>

          <p className="mt-12 font-display text-3xl text-[#151515]">
            {x}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
<CTA/>
</>
}
