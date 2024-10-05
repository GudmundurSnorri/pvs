"use server";
import { FormValues } from "@/components/form/Form";
import nodemailer from "nodemailer";

export async function sendMail({
  description,
  email,
  name,
  phoneNumber,
  title,
}: FormValues) {
  var transporter = nodemailer.createTransport({
    host: "smtp.mailgun.org",
    port: 465,
    auth: {
      user: process.env.USER_FOR_EMAIL,
      pass: process.env.PW_FOR_EMAIL,
    },
  });

  const htmlEmail = `
    Upplýsingar
    Nafn sendanda: ${name}
    Veffang sendanda: ${email}
    Símanúmer sendanda: ${phoneNumber}
    Viðfangsefni: ${title}
    Nánari lýsing:
    ${description}
    `;

  var mailOptions = {
    from: email,
    to: "gss21@hi.is",
    subject: title,
    text: htmlEmail,
  };

  try {
    // Send the email
    const response = await transporter.sendMail(mailOptions);

    // If successful, return a success message
    return { success: true, message: "Tókst að senda póst", response };
  } catch (error) {
    // If failed, return an error message
    return { success: false, message: "Eitthvað fór úrskeiðis!", error };
  }
}
