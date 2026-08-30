import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const menu = [
  { label: "Início", href: "#inicio" },
  { label: "Nossas Soluções", href: "#solucoes" },
  { label: "Processo", href: "#processo" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-shadow ${
        scrolled ? "bg-background/95 shadow-[0_1px_0_0_var(--border)] backdrop-blur" : "bg-background"
      }`}
    >
      <div className="container-site flex h-20 items-center justify-between gap-6">
        <a href="#inicio" className="flex items-center" aria-label="Criativos Digitais - página inicial">
          <img
            src="/images/logo-criativos-digitais-trim.png"
            alt="Criativos Digitais"
            width={442}
            height={160}
            className="h-8 w-auto md:h-9"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Menu principal">
          {menu.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-brand-blue"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contato"
            className="hidden rounded-full bg-brand-blue px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-ink sm:inline-flex"
          >
            Solicitar diagnóstico
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-border text-brand-ink lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-site flex flex-col py-2" aria-label="Menu mobile">
            {menu.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-4 text-base font-medium text-foreground last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="my-4 rounded-full bg-brand-blue px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Solicitar diagnóstico
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
