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
    host: process.env.OUTLOOK_SMTP,
    port: Number(process.env.OUTLOOK_PORT),
    secure: false, // Use STARTTLS
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.SITE_OWNER_EMAIL, // Site owner's email
      subject: "New Contact Form Submission",
      text: message,
    });

    return true;
  } catch (error) {
    throw error;
  }
};
const submitForm = async (
  _previousState: ContactFormState,
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
        success: "Message sent succesfully.",
        error: null,
      };
    } else {
      return {
        success: null,
        error: "Failed to send message. Please try again.",
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
        success: null,
        error: "Please check your input.",
        errorDetails: errorMessages,
      };
    }
    return { success: null, error: "An error occurred. Please try again." };
  }
};
export { submitForm };
