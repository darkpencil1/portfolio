import ContactFormState, { ContactForm } from "@/types/ContactFormInterface";
import { z } from "zod";

const contactSchema = z.object({
  first_name: z.string().min(1).max(50).trim(),
  last_name: z.string().min(1).max(50).trim(),
  email: z.string().email().trim(),
  message: z.string().min(10).max(500).trim(),
});

const submitForm = async (
  _previousState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> => {
  try {
    const data = {
      first_name: formData.get("first_name") as string,
      last_name: formData.get("last_name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    const validatedData = contactSchema.parse(data);

    if (true) {
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
