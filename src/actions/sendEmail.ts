"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const HONEYPOT_FIELD = "website";
const MIN_FILL_TIME_MS = 3000;

const verifyTurnstile = async (token: string) => {
  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY!,
        response: token,
      }),
    }
  );

  return ((await res.json()) as { success: boolean }).success;
};

export const sendEmail = async (formData: FormData) => {
  const get = (key: string) =>
    (formData.get(key) as string | null)?.trim() ?? "";

  const honeypot = get(HONEYPOT_FIELD);
  const renderedAt = Number(formData.get("formRenderedAt"));

  if (honeypot || !renderedAt || Date.now() - renderedAt < MIN_FILL_TIME_MS) {
    return;
  }

  const name = `${get("firstName")} ${get("lastName")}`.trim();
  const email = get("email");
  const message = get("message");

  if (!get("firstName") || !get("lastName") || !email || !message) {
    throw new Error("All fields are required.");
  }
  if (!EMAIL_RE.test(email)) {
    throw new Error("Please enter a valid email address.");
  }
  if (name.length > 100 || message.length > 5000) {
    throw new Error("Input too long.");
  }

  const token = get("cf-turnstile-response");
  if (!token || !(await verifyTurnstile(token))) {
    throw new Error("Captcha verification failed.");
  }

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
