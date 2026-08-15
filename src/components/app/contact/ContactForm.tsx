"use client";

import { useTranslations } from "next-intl";

import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/actions/sendEmail";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  const t = useTranslations("contact");
  const tToast = useTranslations("toasts");
  const { toast } = useToast();

  const sendMessage = async (formData: FormData) => {
    const mailInfo = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    const allFieldsAreFilled = Object.values(mailInfo).every(
      (value) => !!value
    );

    if (!allFieldsAreFilled) {
      toast({
        description: tToast("fillAll"),
        variant: "destructive",
      });

      return;
    }

    try {
      await sendEmail(
        `${mailInfo.firstName} ${mailInfo.lastName}`,
        mailInfo.email,
        mailInfo.message
      );

      toast({
        description: tToast("sent"),
      });
    } catch {
      toast({
        description: tToast("failed"),
        variant: "destructive",
      });
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
        <Input name="firstName" placeholder={t("form.firstName")} />
        <Input name="lastName" placeholder={t("form.lastName")} />
        <Input type="email" name="email" placeholder={t("form.email")} />
      </div>

      <Textarea
        name="message"
        className="h-[200px]"
        placeholder={t("form.message")}
      />

      <Button type="submit" size="md" className="max-w-40">
        {t("form.send")}
      </Button>
    </form>
  );
};

export default ContactForm;
