export type ContactData = {
  name: string;
  email: string;
  message: string;
};

export type ErrorDetail = { field: string; message: string };

export default interface ContactFormState {
  success: string | null;
  error: string | null;
  errorDetails?: ErrorDetail[] | null;
}
