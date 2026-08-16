"use client";

import { useTranslations } from "next-intl";

import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/actions/sendEmail";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Script from "next/script";
import { useLocale } from "next-intl";

declare global {
  interface Window {
    turnstile?: { reset: () => void };
  }
}

const ContactForm = () => {
  const t = useTranslations("contact");
  const tToast = useTranslations("toasts");
  const locale = useLocale();
  const { toast } = useToast();

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
      // tokens are single-use; without reset every retry fails
      window.turnstile?.reset();
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

      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" />
      <div
        className="cf-turnstile"
        data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
        data-theme="dark"
        data-language={locale}
      />

      <Button type="submit" size="md" className="max-w-40">
        {t("form.send")}
      </Button>
    </form>
  );
};

export default ContactForm;
