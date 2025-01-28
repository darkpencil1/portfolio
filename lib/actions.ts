"use server";
import ContactFormState, { ContactData } from "@/types/ContactFormInterface";
import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  name: z.string().min(1).max(50).trim(),
  email: z.string().email().trim(),
  message: z.string().min(10).max(500).trim(),
});

const sendEmail = async (formData: ContactData): Promise<boolean> => {
  const { name, email, message } = formData;
  // Set up the transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.SITE_OWNER_EMAIL}>`,
      to: process.env.TARGET_EMAIL,
      subject: "New Contact Form Submission",
      replyTo: email,
      text: `Hei, uusi viesti henkilöltä ${name} ${email}:\n\n${message}`,
      html: `
        <p>Hei,</p>
        <p>Uusi viesti henkilöltä <strong>${name}</strong> - <strong>${email}</strong>:</p>
        <p>${message}</p>
      `,
    });

    return true;
  } catch (error) {
    throw error;
  }
};
const submitForm = async (
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> => {
  try {
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    const validatedData = contactSchema.parse(data);
    const ok = await sendEmail(validatedData);

    if (ok) {
      return {
        success: true,
        error: false,
        popupToggle: prevState.popupToggle === 0 ? 1 : 0,
      };
    } else {
      return {
        success: false,
        error: true,
        popupToggle: prevState.popupToggle,
      };
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Extract and format errors
      const errorMessages = error.errors.map((err) => ({
        field: err.path.join("."), // Join path array to get field name
        message: err.message, // Validation error message
      }));

      return {
        success: false,
        error: true,
        popupToggle: prevState.popupToggle,
        errorDetails: errorMessages,
      };
    }
    return { success: false, error: true, popupToggle: prevState.popupToggle };
  }
};
export { submitForm };
