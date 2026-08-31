import { Mail, MapPin, Phone } from "lucide-react";

const quickLinks = ["Criação de Sites", "Tráfego Pago", "SEO e Descoberta", "Social Media"];

export function Footer() {
  return (
    <footer className="bg-brand-ink text-white/75">
      <div className="container-site grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <div className="inline-flex rounded-xl bg-white px-4 py-3">
            <img
              src="/images/logo-criativos-digitais-trim.png"
              alt="Criativos Digitais"
              width={442}
              height={160}
              className="h-8 w-auto"
              loading="lazy"
            />
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed">
            Web Design focado em conversão, tráfego qualificado e SEO para posicionar sua empresa como
            autoridade na internet.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Soluções</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href="#solucoes" className="transition-colors hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Contato</h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-brand-blue" />
              <a href="mailto:italosuzuke@gmail.com" className="hover:text-white">
                italosuzuke@gmail.com
              </a>

            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-brand-blue" />
              <a href="https://wa.me/5562994847180" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                +55 (62) 99484-7180
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-blue" />
              <span>Goiânia, GO, Brasil</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site py-6 text-xs text-white/55">
          © 2026 Criativos Digitais. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
