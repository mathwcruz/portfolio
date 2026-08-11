"use client";

import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/actions/sendEmail";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
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
        description: "Please fill out all fields.",
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
        description: "Your message has been sent :)",
      });
    } catch {
      toast({
        description: "Failed to send the email. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <form
      action={sendMessage}
      className="flex flex-col gap-6 p-10 bg-background-700 rounded-xl"
    >
      <h3 className="text-2xl lg:text-4xl text-white">Let&apos;s work together</h3>
      <p className="text-sm lg:text-base text-white/60">
        Got a project in mind? Let&apos;s talk — I&apos;ll get back to you as soon as possible.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input name="firstName" placeholder="First name*" />
        <Input name="lastName" placeholder="Last name*" />
        <Input type="email" name="email" placeholder="Email address*" />
      </div>

      <Textarea
        name="message"
        className="h-[200px]"
        placeholder="Tell me about your project or opportunity..."
      />

      <Button type="submit" size="md" className="max-w-40">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
