import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
from: "onboarding@resend.dev",
to: "digitaliyauruguay@gmail.com",
      subject: "Nuevo mensaje desde la web",
      html: `
        <h2>Nuevo contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    });

    await resend.emails.send({
  from: "onboarding@resend.dev",
 /* to: email, // - CAMBIAR CUANDO HAYA CLIENTE CON DOMINIO*/    
  to: "digitaliyauruguay@gmail.com",
 subject: "Recibimos tu mensaje",
  html: `
    <p>Hola ${name}, recibimos tu mensaje.</p>
    <p>Te responderemos a la brevedad.</p>
  `,
});

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: "Error enviando email" }, { status: 500 });
  }
}