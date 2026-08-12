"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const sendEmail = async (
  name: string,
  email: string,
  message: string
) => {
  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    throw new Error("All fields are required.");
  }
  if (!EMAIL_RE.test(trimmedEmail)) {
    throw new Error("Please enter a valid email address.");
  }
  if (trimmedName.length > 100 || trimmedMessage.length > 5000) {
    throw new Error("Input too long.");
  }

  try {
    await resend.emails.send({
      to: "matheuswachcruz@gmail.com",
      from: "onboarding@resend.dev",
      subject: `Message from ${trimmedName} <${trimmedEmail}>`,
      html: `<span>${trimmedMessage}</span>`,
    });
  } catch (error) {
    console.error(`Failed to send email: ${error}`);

    throw new Error("Email sending failed");
  }
};
