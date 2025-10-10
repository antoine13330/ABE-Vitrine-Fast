'use server'
import { ContactFormData } from '@/components/app/contact/ContactSendMessageTab/ContactSendMessageTab';
import nodemailer, { Transporter } from 'nodemailer';
import { z } from 'zod';
const contactZodSchema = z.object({
    email: z.string().email(),
    title: z.string(),
    subject: z.string(),
    message: z.string()
});
export default async function SendContactForm(formData : ContactFormData) {
    console.log(formData);
    let validForm = contactZodSchema.safeParse(formData);
    console.log(validForm);
    if (!validForm.success) {
        console.error(validForm.error);
        return validForm.error.errors;
    }
    let form = validForm.data;
    const transporter: Transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: 587,
        pool: true,
        secure: false,
        auth: {
            user: process.env.CONTACT_EMAIL,
            pass: process.env.CONTACT_PWD
        }
    });
    try {
        const mailOptions = {
            from: process.env.CONTACT_EMAIL,
            to: process.env.CONTACT_EMAIL,
            subject: `${form.title} - ${form.subject}`,
            text: `${form.message}\n\nFrom: ${form.email}`,
            html : `<p>${form.message}</p><p>From: ${form.email}</p>`
          };
        const res = await transporter.sendMail(mailOptions);
        return true;
    } catch (error) {
        console.error(error);

        return false;
    } finally {
        console.log('Closing transporter');
        transporter.close();
    }
}
