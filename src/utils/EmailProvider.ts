import emailjs from "@emailjs/browser";
import { EmailProviderProps } from "../components/common/interfaces";

export default async function EmailProvider({
  templateId,
  form,
}: EmailProviderProps): Promise<void> {
  const SERVICE_ID: string = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const PUBLIC_KEY: string = import.meta.env.VITE_EMAIL_PUBLIC_KEY;
  try {
    await emailjs.sendForm(SERVICE_ID, templateId, form, {
      publicKey: PUBLIC_KEY,
    });
  } catch (e) {
    console.log(e);
  }
}
