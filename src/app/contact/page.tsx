import type { Metadata } from "next";
import type { ComponentType } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { MotionFade } from "@/components/utils/MotionFade";
import ContactForm from "@/components/app/contact/ContactForm";
import { contactInfo, type ContactInfo } from "@/lib/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Matheus Cruz about projects and opportunities.",
};

const contactIcons: Record<ContactInfo["icon"], ComponentType> = {
  phone: FaPhoneAlt,
  email: FaEnvelope,
  address: FaMapMarkerAlt,
};

const Contact = () => {
  return (
    <MotionFade className="py-4 md:py-6 lg:py-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-0">
            <ContactForm />
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-0 mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {contactInfo.map((item) => {
                const Icon = contactIcons[item.icon];

                return (
                  <li key={item.title} className="flex items-center gap-6">
                    <div className="w-[38px] h-[38px] md:w-[52px] md:h-[52px] xl:w-[72px] xl:h-[72px] bg-background-700 text-accent rounded-md flex items-center justify-center">
                      <div className="text-xl md:text-[28px]">
                        <Icon />
                      </div>
                    </div>

                    <div className="flex-1">
                      <p className="text-white/60 text-sm md:text-base">{item.title}</p>
                      <h3 className="text-base md:text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </MotionFade>
  );
};

export default Contact;
