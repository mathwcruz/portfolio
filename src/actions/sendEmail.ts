"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (
  name: string,
  email: string,
  message: string
) => {
  try {
    await resend.emails.send({
      to: "matheuswachcruz@gmail.com",
      from: "onboarding@resend.dev",
      subject: `Message from ${name} <${email}>`,
      html: `<span>${message}</span>`,
    });
  } catch (error) {
    console.error(`Failed to send email: ${error}`);

    throw new Error("Email sending failed");
  }
};
