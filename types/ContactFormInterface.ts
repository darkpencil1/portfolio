export type ContactData = {
  name: string;
  email: string;
  message: string;
};

export type ErrorDetail = { field: string; message: string };

export default interface ContactFormState {
  success: boolean | null;
  error: boolean | null;
  popupToggle: 1 | 0;
  errorDetails?: ErrorDetail[] | null;
}
