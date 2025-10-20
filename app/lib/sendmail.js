"use server"
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const SendEmail = async (name, sender, subject) => {
  try {
    console.log("Sending email from:", sender, "with message:", subject);

    const data = await resend.emails.send({
      from: name + "<onboarding@resend.dev>",
      to: "alper.ertugrul.46.123@gmail.com",
      subject: `New message from ${name}`,
      html: `<p><strong>Sender:</strong> ${sender}</p><p><p><strong>Message:</strong> ${subject}</p>`,
    });

    console.log("Email sent:", data);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
}