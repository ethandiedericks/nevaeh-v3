"use server";

import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

async function internalSendContactEmail(formData: FormData) {
  const raw = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phoneNumber: formData.get("phoneNumber"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  const result = contactSchema.safeParse(raw);
  if (!result.success) {
    console.error("Validation failed:", result.error.format());
    return;
  }

  const { fullName, email, phoneNumber, subject, message } = result.data;

  const ownerEmail = process.env.CONTACT_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!ownerEmail || !fromEmail) {
    console.error("Missing env vars");
    return;
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const htmlContent = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    ${phoneNumber ? `<p><strong>Phone:</strong> ${phoneNumber}</p>` : ""}
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

  try {
    await resend.emails.send({
      from: `Contact Form <${fromEmail}>`,
      to: ownerEmail,
      subject: `New Contact: ${subject}`,
      html: htmlContent,
      replyTo: email,
    });
  } catch (err) {
    console.error("Failed to send email:", err);
  }
}

// This is the exported server action you use in <form action={...}>
export async function sendContactEmail(formData: FormData): Promise<void> {
  await internalSendContactEmail(formData);
}
