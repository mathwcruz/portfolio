"use client";

import { useTranslations } from "next-intl";

import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/actions/sendEmail";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Script from "next/script";
import { useLocale } from "next-intl";
import { useCallback, useEffect, useRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        opts: {
          sitekey: string;
          theme: string;
          language: string;
          "error-callback": (code: string) => boolean;
          "expired-callback": () => void;
        }
      ) => string;
      reset: (id?: string) => void;
      remove: (id?: string) => void;
    };
  }
}

const ContactForm = () => {
  const t = useTranslations("contact");
  const tToast = useTranslations("toasts");
  const locale = useLocale();
  const { toast } = useToast();
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | undefined>(undefined);

  const renderWidget = useCallback(() => {
    if (!containerRef.current || widgetId.current !== undefined) return;
    widgetId.current = window.turnstile?.render(containerRef.current, {
      sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "",
      theme: "dark",
      language: locale,
      "error-callback": (code: string) => {
        console.error(`turnstile error ${code}`);
        return true;
      },
      "expired-callback": () => {
        console.warn("turnstile token expired");
      },
    });
  }, [locale]);

  useEffect(() => {
    renderWidget();
    return () => {
      window.turnstile?.remove(widgetId.current);
      widgetId.current = undefined;
    };
  }, [renderWidget]);

  const sendMessage = async (formData: FormData) => {
    try {
      await sendEmail(formData);

      toast({
        description: tToast("sent"),
      });
    } catch {
      toast({
        description: tToast("failed"),
        variant: "destructive",
      });
    } finally {
      // tokens are single-use; reset by id — no-arg reset() throws on explicit widgets
      window.turnstile?.reset(widgetId.current);
    }
  };

  return (
    <form
      action={sendMessage}
      className="flex flex-col gap-6 p-10 bg-background-700 rounded-xl"
    >
      <h3 className="text-2xl lg:text-4xl text-white">{t("title")}</h3>
      <p className="text-sm lg:text-base text-white/60">{t("subtitle")}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input required name="firstName" placeholder={t("form.firstName")} />
        <Input required name="lastName" placeholder={t("form.lastName")} />
        <Input required type="email" name="email" placeholder={t("form.email")} />
      </div>

      <Textarea
        required
        name="message"
        className="h-[200px]"
        placeholder={t("form.message")}
      />

      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        onLoad={renderWidget}
      />
      <div ref={containerRef} />

      <Button type="submit" size="md" className="max-w-40">
        {t("form.send")}
      </Button>
    </form>
  );
};

export default ContactForm;
