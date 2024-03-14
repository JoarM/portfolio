import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { createTransport } from "nodemailer";
import z from "zod";
import { SMTP_USER, SMTP_PASSWORD } from '$env/static/private';

const messageValidator = z.object({
    name: z.string().min(2, "Your name must be atleast two characthers long."),
    email: z.string().email("Please enter a valid email."),
    message: z.string().min(1, "You need to enter a message").max(1024, "Message cant be more than 1024 characthers."),
});

export const actions = {
	default: async ({ request }) => {
        const formData = await request.formData();

		const feedback = await messageValidator.safeParseAsync({
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        });
    
        if (!feedback.success) {
            const error = feedback.error.flatten().fieldErrors;
            return fail(400, {
                error
            });
        }
    
        const transporter = createTransport({
            host: "smtp.gmail.com",
            port: 587,
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASSWORD,
            },
        });
    
        try {
            const email = `
            Feedback from ${feedback.data.name} \n
            Email: ${feedback.data.email} \n
            \n
            Message: ${feedback.data.message}`;
    
            await transporter.sendMail({
                from: process.env.SMTP_USER,
                to: process.env.SMTP_USER,
                subject: `Feedback from ${feedback.data.name}`,
                text: email,
            });
        } catch (e) {
            console.log(e);
            return fail(400, {
                message: "An unexpected error occured.",
            });
        }
    
        return {
            success: true,
        }
	},
} satisfies Actions;