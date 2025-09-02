"use server";

import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormValues = z.infer<typeof formSchema>;

export async function handleSubmit(data: FormValues) {
  console.log("Form submitted:", data);
  // Here you would typically send an email or save to a database.
  // We'll simulate a successful submission.
  return { success: true, message: "Your message has been sent!" };
}
