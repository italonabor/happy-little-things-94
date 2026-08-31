import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Gauge,
  Instagram,
  LayoutTemplate,
  MousePointerClick,
  Quote,
  Search,
  Star,
  Target,
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { WhatsappFloat, WhatsappIcon, WHATSAPP_URL } from "@/components/site/WhatsappFloat";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Criativos Digitais - Agência de Marketing & Web Design" },
      {
        name: "description",
        content:
          "Web Design focado em conversão, Google Ads e SEO. A Criativos Digitais cria sites que geram clientes para clínicas e empresas de serviço premium.",
      },
      { property: "og:title", content: "Criativos Digitais - Agência de Marketing & Web Design" },
      {
        property: "og:description",
        content:
          "Ecossistemas digitais que vendem todos os dias: sites de alta conversão, tráfego qualificado e SEO.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const pillars = [
  { icon: MousePointerClick, label: "Design Orientado à Conversão" },
  { icon: Gauge, label: "Alta Velocidade de Carregamento" },
  { icon: Target, label: "Tráfego Local (Google Ads)" },
  { icon: Search, label: "Otimização para Buscas (SEO)" },
];

const services = [
  {
    icon: LayoutTemplate,
    title: "Criação de Sites e Landing Pages",
    description:
      "Desenvolvimento com layouts exclusivos, alta velocidade e otimização total para celulares (Mobile First).",
  },
  {
    icon: Target,
    title: "Tráfego Pago (Google Ads)",
    description:
      "Campanhas precisas para atrair clientes que já estão procurando pelo seu serviço no Google, direto na sua região.",
  },
  {
    icon: Search,
    title: "SEO e Descoberta",
    description:
      "Estrutura técnica, conteúdo e sinais locais para que sua empresa apareça nas buscas de forma consistente.",
  },
  {
    icon: Instagram,
    title: "Social Media",
    description:
      "Gestão de redes sociais com identidade visual consistente, calendário de conteúdo e posts pensados para gerar contato.",
  },
];


const steps = [
  {
    number: "01",
    title: "Diagnóstico e Estratégia",
    description:
      "Entendemos seu serviço, seu público e o caminho que o cliente percorre antes de entrar em contato.",
  },
  {
    number: "02",
    title: "Design e Copywriting",
    description:
      "Layout exclusivo e texto persuasivo, construídos para conduzir o visitante até a ação principal.",
  },
  {
    number: "03",
    title: "Desenvolvimento e Otimização",
    description:
      "Site rápido, responsivo e preparado tecnicamente para performar nas buscas e nas campanhas.",
  },
  {
    number: "04",
    title: "Lançamento e Tráfego",
    description:
      "Colocamos o site no ar e iniciamos as campanhas no Google para enviar fluxo qualificado imediato.",
  },
];

const cases = [
  {
    image: "/images/case-cardiologista.png",
    name: "Dr. Renato Ferraz",
    segment: "Cardiologia · São Paulo",
    detail: "Site institucional de alto padrão com agendamento direto por WhatsApp.",
  },
  {
    image: "/images/case-advocacia.png",
    name: "Cássia Ribeiro Advogados",
    segment: "Direito do Trabalho · São Paulo",
    detail: "Página de autoridade com áreas de atuação e captação por WhatsApp.",
  },
  {
    image: "/images/case-pilates.png",
    name: "Efetivo Estúdio Pilates",
    segment: "Saúde e Bem-estar · São Paulo",
    detail: "Estrutura com planos, equipe e conversão para aula experimental.",
  },
];

const reviews = [
  {
    client: "Dr. Carlos Eduardo",
    role: "Clínica Médica",
    text: "O site foi entregue super rápido, ficou com um design incrível, 100% responsivo e as otimizações para o Google já estão trazendo mais visibilidade para a clínica.",
  },
  {
    client: "Clínica Bem Estar",
    role: "Saúde",
    text: "A Criativos Digitais entendeu perfeitamente nossa necessidade e criou uma página de alta conversão que facilitou muito a chegada de novos pacientes.",
  },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsappFloat />

      <main>
        {/* Hero */}
        <section id="inicio" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-40 -top-24 size-[34rem] rounded-full bg-brand-blue-soft blur-3xl"
          />
          <div className="container-site relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink">
                Agência de Marketing & Web Design
              </span>
              <h1 className="mt-6 text-[clamp(2.1rem,5vw,3.6rem)] font-bold leading-[1.08]">
                Muito além de sites bonitos.{" "}
                <span className="text-brand-blue">Entregamos ecossistemas digitais que vendem</span>{" "}
                todos os dias.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                A Criativos Digitais une Web Design focado em conversão, Tráfego Qualificado e SEO para
                posicionar sua empresa como autoridade na internet.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-7 py-4 text-sm font-semibold text-white transition-[transform,background-color] duration-150 ease-out hover:bg-brand-ink active:scale-[0.97]"
                >
                  <WhatsappIcon className="size-4" />
                  Falar com um Especialista <ArrowRight className="size-4" />
                </a>


                <a
                  href="#projetos"
                  className="inline-flex items-center justify-center rounded-full border border-brand-ink/15 px-7 py-4 text-sm font-semibold text-brand-ink transition-colors hover:border-brand-blue hover:text-brand-blue"
                >
                  Ver Nossos Projetos
                </a>
              </div>

              <dl className="mt-12 grid max-w-lg grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-3">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">Foco</dt>
                  <dd className="mt-1 text-sm font-semibold text-brand-ink">Conversão</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">Base</dt>
                  <dd className="mt-1 text-sm font-semibold text-brand-ink">Goiânia, GO</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">Canais</dt>
                  <dd className="mt-1 text-sm font-semibold text-brand-ink">Site · Ads · SEO</dd>
                </div>
              </dl>
            </div>

            <div className="relative w-full">
              <div className="overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-[0_30px_70px_-40px_rgba(8,30,102,0.45)]">
                <video
                  className="aspect-video h-auto w-full object-cover"
                  src="/videos/hero-ecossistema-digital.mp4"
                  poster="/images/hero-video-poster.webp"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Animação do ecossistema digital da Criativos Digitais"
                />
              </div>
            </div>

          </div>
        </section>

        {/* Metodologia */}
        <section id="sobre" className="border-y border-border bg-secondary/60 py-20 md:py-24">
          <div className="container-site grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <h2 className="text-[clamp(1.7rem,3.4vw,2.5rem)] font-bold leading-tight">
                Por que a Criativos Digitais é diferente?
              </h2>
              <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
                Nós entendemos que um site sem estratégia é apenas um panfleto online. Nossa metodologia
                foca na jornada completa do seu cliente: da pesquisa no Google até o contato com a sua
                equipe, de forma rápida e persuasiva.
              </p>
            </Reveal>
            <ul className="grid gap-4 sm:grid-cols-2">
              {pillars.map(({ icon: Icon, label }, index) => (
                <Reveal
                  as="li"
                  key={label}
                  delay={index * 90}
                  className="flex items-start gap-3 rounded-2xl bg-background p-6 shadow-[0_1px_0_0_var(--border)]"
                >
                  <Icon className="mt-0.5 size-5 shrink-0 text-brand-blue" />
                  <span className="text-sm font-semibold text-brand-ink">{label}</span>
                </Reveal>
              ))}

            </ul>
          </div>
        </section>

        {/* Soluções */}
        <section id="solucoes" className="py-20 md:py-28">
          <div className="container-site">
            <div className="max-w-2xl">
              <h2 className="text-[clamp(1.7rem,3.4vw,2.5rem)] font-bold">Nossas Soluções</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Engenharia digital para escalar os resultados do seu negócio.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map(({ icon: Icon, title, description }, index) => (
                <Reveal
                  as="article"
                  key={title}
                  delay={index * 100}
                  className="group rounded-2xl border border-border p-8 transition-colors hover:border-brand-blue"
                >
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-blue-soft text-brand-ink transition-colors group-hover:bg-brand-blue group-hover:text-white">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </Reveal>
              ))}

            </div>
          </div>
        </section>

        {/* Processo */}
        <section id="processo" className="bg-brand-ink py-20 text-white md:py-28">
          <div className="container-site grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
                Processo
              </span>
              <h2 className="mt-4 text-[clamp(1.7rem,3.4vw,2.5rem)] font-bold text-white">
                Um caminho claro entre o briefing e os primeiros contatos.
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-white/70">
                Cada etapa tem entregas definidas, para você acompanhar a evolução do projeto sem
                surpresas.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Especialistas em Web Design", "Especialistas em Tráfego e SEO"].map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white/80"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <ol className="grid gap-5 sm:grid-cols-2">
              {steps.map((step, index) => (
                <Reveal as="li" key={step.number} delay={index * 90} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">

                  <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-brand-blue">
                    {step.number}
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{step.description}</p>
                </Reveal>

              ))}
            </ol>
          </div>
        </section>

        {/* Portfólio */}
        <section id="projetos" className="py-20 md:py-28">
          <div className="container-site">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-xl">
                <h2 className="text-[clamp(1.7rem,3.4vw,2.5rem)] font-bold">Projetos no ar</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Sites desenvolvidos para profissionais e clínicas que precisam de presença digital de
                  alto padrão.
                </p>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-ink"
              >
                Quero um projeto assim <ArrowRight className="size-4" />
              </a>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {cases.map((item, index) => (
                <Reveal as="figure" key={item.name} delay={index * 120} className="flex flex-col">
                  <div
                    aria-label={`Ver o site completo de ${item.name}`}
                    style={{ ["--case-height" as string]: "20rem" }}
                    className="case-frame relative h-80 w-full overflow-hidden rounded-2xl border border-border bg-secondary/50"
                  >
                    <img
                      src={item.image}
                      alt={`Site desenvolvido pela Criativos Digitais para ${item.name}`}
                      loading="lazy"
                      className="case-shot block h-auto w-full"
                    />
                    <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-ink/80 to-transparent px-4 py-3 text-[0.7rem] font-semibold uppercase tracking-widest text-white">
                      Ver o site completo
                    </span>
                  </div>
                  <figcaption className="mt-5">
                    <h3 className="text-base font-semibold">{item.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-widest text-brand-blue">
                      {item.segment}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                  </figcaption>
                </Reveal>
              ))}
            </div>

          </div>
        </section>

        {/* Autoridade */}
        <section className="border-y border-border bg-secondary/60 py-20 md:py-24">
          <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <h2 className="text-[clamp(1.7rem,3.4vw,2.5rem)] font-bold leading-tight">
                A revolução da captação no seu setor.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Se você é profissional da saúde, clínica ou prestador de serviço premium, sabe que uma
                presença digital amadora custa caro. A Criativos Digitais resolve isso implementando
                sites de alta conversão, onde design de alto padrão encontra a estratégia de tráfego
                certa para não perder nenhuma oportunidade.
              </p>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: LayoutTemplate, title: "Especialistas em Web Design" },
                { icon: BarChart3, title: "Especialistas em Tráfego e SEO" },
              ].map(({ icon: Icon, title }, index) => (
                <Reveal key={title} delay={index * 90} className="rounded-2xl bg-background p-7 shadow-[0_1px_0_0_var(--border)]">
                  <Icon className="size-5 text-brand-blue" />
                  <p className="mt-4 text-sm font-semibold text-brand-ink">{title}</p>
                </Reveal>
              ))}

            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-20 md:py-28">
          <div className="container-site">
            <div className="max-w-xl">
              <h2 className="text-[clamp(1.7rem,3.4vw,2.5rem)] font-bold">Resultados reais.</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Veja o impacto das nossas soluções nos negócios de quem já confiou na Criativos Digitais.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {reviews.map((review) => (
                <Reveal as="blockquote" key={review.client} className="rounded-2xl border border-border p-8">
                  <Quote className="size-6 text-brand-blue-soft" />
                  <p className="mt-4 leading-relaxed text-foreground">{review.text}</p>
                  <footer className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-5">
                    <div>
                      <p className="text-sm font-semibold text-brand-ink">{review.client}</p>
                      <p className="text-xs text-muted-foreground">{review.role}</p>
                    </div>
                    <div className="flex gap-0.5" aria-label="5 estrelas">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} className="size-4 fill-brand-blue text-brand-blue" />
                      ))}
                    </div>
                  </footer>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
