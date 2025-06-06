// src/app/api/sendMessage/route.ts

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// En App Router, los «environment variables» siguen estando en process.env
// Asegúrate de haber definido en .env.local:
//   GMAIL_USER=tu‐gmail@gmail.com
//   GMAIL_PASS=tu_app_password_de_gmail

export async function POST(request: Request) {
  try {
    // 1) Leer el body como texto (viene como x-www-form-urlencoded)
    const bodyText = await request.text();
    //    Convierte el texto en un objeto con URLSearchParams
    const data = Object.fromEntries(new URLSearchParams(bodyText));
    const { servicio, nombre, email, telefono, mensaje } = data as {
      servicio?: string;
      nombre?: string;
      email?: string;
      telefono?: string;
      mensaje?: string;
    };

    // 2) Validar campos requeridos
    if (!servicio || !nombre || !email || !telefono) {
      return NextResponse.json(
        { success: false, error: "Faltan campos requeridos." },
        { status: 400 }
      );
    }

    // 3) Construir contenido HTML del correo
    const emailContent = `
      <h2>Nuevo mensaje desde el formulario</h2>
      <p><strong>Servicio seleccionado:</strong> ${servicio}</p>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Correo electrónico:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${telefono}</p>
      ${
        mensaje
          ? `<p><strong>Mensaje adicional:</strong><br/>${(
              mensaje as string
            ).replace(/\n/g, "<br/>")}</p>`
          : ""
      }
      <hr />
      <p>Enviado desde: <em>https://tu-dominio.com/</em></p>
    `;
    console.log(process.env.GMAIL_USER, process.env.GMAIL_PASS);
    // 4) Configurar transporter de Nodemailer
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // 5) Enviar el correo
    await transport.sendMail({
      from: `"Formulario Web" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // envia a tu misma cuenta de Gmail
      subject: `Nuevo formulario: ${servicio} — ${nombre}`,
      html: emailContent,
      replyTo: email, // para que, al hacer “Responder” en Gmail, conteste al usuario
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err: unknown) {
    console.log(err);
    // Extractor de mensaje (si `err` es un objeto Error)
    const errorMessage = err instanceof Error ? err.message : String(err);

    console.error("Error enviando correo:", errorMessage);
    return NextResponse.json(
      { success: false, error: "Error interno al enviar el mensaje." },
      { status: 500 }
    );
  }
}
