"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/actions/sendEmail";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+55 51986106570",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "matheuswachcruz@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Venâncio Aires, Rio Grande do Sul, BRAZIL",
  },
];

const Contact = () => {
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
        description: "Please fill out all fields",
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
        description: "Failed to send email, try again",
        variant: "destructive",
      });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              action={sendMessage}
              className="flex flex-col gap-6 p-10 bg-background-700 rounded-xl"
            >
              <h3 className="text-4xl text-white">Let&apos;s work together</h3>
              <p className="text-white/60">
                Are you interested in getting to know more about me and my work?
                Send me a message and I will reply as soon as possible.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstName" placeholder="First name*" />
                <Input name="lastName" placeholder="Last name*" />
                <Input type="email" name="email" placeholder="Email address*" />
              </div>

              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here."
              />

              <Button type="submit" size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item) => (
                <li key={item.title} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-background-700 text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>

                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
