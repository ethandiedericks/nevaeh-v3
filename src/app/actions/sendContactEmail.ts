"use server";

import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { z } from "zod";

const schema = z.object({
  fullName: z.string().min(1, "Full name is required."),
  email: z.string().email("Invalid email address."),
  phoneNumber: z.string().optional(),
  subject: z.string().min(1, "Subject is required."),
  message: z.string().min(1, "Message is required."),
});

const ses = new SESClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function sendContactEmail(formData: FormData) {
  const parsed = schema.safeParse(Object.fromEntries(formData.entries()));

  if (!parsed.success) {
    const flat = parsed.error.flatten().fieldErrors;
    return {
      success: false,
      error: Object.values(flat).flat().join(", ") || "Validation error.",
    };
  }

  const { fullName, email, phoneNumber, subject, message } = parsed.data;

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; color: #333; background-color: #f9f9f9; padding: 30px;">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.05); overflow: hidden;">
        <tr style="background-color: #0f172a;">
          <td style="padding: 20px; text-align: center; color: #ffffff;">
            <h2 style="margin: 0; font-size: 22px;">New Business Inquiry</h2>
            <p style="margin: 4px 0 0; font-size: 14px;">from your website contact form</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 30px;">
            <table cellpadding="6" cellspacing="0" width="100%" style="font-size: 14px; line-height: 1.6;">
              <tr><td style="font-weight: bold;">Full Name:</td><td>${fullName}</td></tr>
              <tr><td style="font-weight: bold;">Email:</td><td>${email}</td></tr>
              <tr><td style="font-weight: bold;">Phone:</td><td>${phoneNumber || "N/A"}</td></tr>
              <tr><td style="font-weight: bold;">Subject:</td><td>${subject}</td></tr>
              <tr><td style="font-weight: bold;">Message:</td><td style="white-space: pre-wrap;">${message}</td></tr>
            </table>
            <p style="margin-top: 20px; font-size: 13px; color: #888;">
              Submitted from your business site: ${process.env.NEXT_PUBLIC_BASE_URL || "your website"}
            </p>
          </td>
        </tr>
        <tr style="background-color: #f1f5f9;">
          <td style="text-align: center; padding: 16px; font-size: 12px; color: #666;">
            &copy; ${new Date().getFullYear()} Your Company. All rights reserved.
          </td>
        </tr>
      </table>
    </div>
  `;

  const command = new SendEmailCommand({
    Destination: {
      ToAddresses: [process.env.CONTACT_RECEIVER_EMAIL!],
    },
    Message: {
      Subject: {
        Data: `Website Contact: ${subject}`,
        Charset: "UTF-8",
      },
      Body: {
        Html: {
          Data: htmlBody,
          Charset: "UTF-8",
        },
      },
    },
    Source: process.env.SES_VERIFIED_SENDER_EMAIL!,
    ReplyToAddresses: [email],
  });

  try {
    await ses.send(command);
    return { success: true };
  } catch (err) {
    console.error("SES error:", err);
    return {
      success: false,
      error: "Could not send your message. Please try again later.",
    };
  }
}
