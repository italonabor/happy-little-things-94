import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export const WHATSAPP_URL =
  "https://wa.me/5562900000000?text=" +
  encodeURIComponent("Olá! Vi o site da Criativos Digitais e quero falar com um especialista.");

export function WhatsappFloat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
        <div className="w-[min(20rem,calc(100vw-2rem))] rounded-2xl border border-border bg-background p-5 shadow-xl">
          <div className="flex items-start justify-between gap-3">
            <p className="text-sm leading-relaxed text-foreground">
              Olá! Quer transformar seu site em uma máquina de captação de clientes? Me chame aqui!
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar mensagem"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center rounded-full bg-brand-blue px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-ink"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir contato pelo WhatsApp"
        className="inline-flex size-14 items-center justify-center rounded-full bg-brand-blue text-white shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="size-6" />
      </button>
    </div>
  );
}
