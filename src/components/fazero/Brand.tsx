import { Link } from "@tanstack/react-router";
export function Brand({ light = false }: { light?: boolean }) {
  return <Link to="/" aria-label="Fazero International home" className="group flex items-center gap-3">
    <span className={`grid size-9 place-items-center border ${light ? "border-gold text-gold" : "border-primary text-primary"}`}><span className="font-display text-lg">F</span></span>
    <span><strong className={`block text-[13px] uppercase leading-none tracking-[0.16em] ${light ? "text-primary-foreground" : "text-foreground"}`}>Fazero</strong><span className={`mt-1 block text-[8px] uppercase tracking-[0.28em] ${light ? "text-primary-foreground/60" : "text-muted-foreground"}`}>International</span></span>
  </Link>;
}
