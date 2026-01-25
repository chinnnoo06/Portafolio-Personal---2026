import { GMAIL_APP_PASSWORD, GMAIL_USER } from "../config/env";
import nodemailer from "nodemailer"
import { TContact } from "../types/contact.types";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_APP_PASSWORD, 
  },
})

export const sendContactEmail = async (data: TContact) => {

  await transporter.sendMail({
    from: `"Portafolio Web | Contacto" <${GMAIL_USER}>`,
    to: GMAIL_USER, // TU correo
    replyTo: data.email, // 👈 clave: responder al usuario
    subject: `📩 Nuevo mensaje de contacto del portafolio web: ${data.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #272727; line-height: 1.6;">
        <h2 style="color: #b03a3a;">Nuevo mensaje desde el formulario de contacto</h2>

        <p><strong>Nombre:</strong> ${data.name} </p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Asunto:</strong> ${data.subject}</p>

        <hr />

        <p style="white-space: pre-line;">
          ${data.message}
        </p>

        <hr />

        <p style="font-size: 0.85rem; color: #b03a3a;">
          Puedes responder directamente a este correo para contestar al usuario.
        </p>
      </div>
    `,
  })
};