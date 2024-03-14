import { f as fail } from "../../../chunks/index.js";
import { createTransport } from "nodemailer";
import z from "zod";
const SMTP_USER = "joar.maltesson@gmail.com";
const SMTP_PASSWORD = "wekc louo gzca lwnr";
const messageValidator = z.object({
  name: z.string().min(2, "Your name must be atleast two characthers long."),
  email: z.string().email("Please enter a valid email."),
  message: z.string().min(1, "You need to enter a message").max(1024, "Message cant be more than 1024 characthers.")
});
const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const feedback = await messageValidator.safeParseAsync({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message")
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
        pass: SMTP_PASSWORD
      }
    });
    try {
      const email = `
            Feedback from ${feedback.data.name} 

            Email: ${feedback.data.email} 

            

            Message: ${feedback.data.message}`;
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.SMTP_USER,
        subject: `Feedback from ${feedback.data.name}`,
        text: email
      });
    } catch (e) {
      console.log(e);
      return fail(400, {
        message: "An unexpected error occured."
      });
    }
    return {
      success: true
    };
  }
};
export {
  actions
};
