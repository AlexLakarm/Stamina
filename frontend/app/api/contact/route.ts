import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Créer le transporteur SMTP avec les infos OVH
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: true,  // true pour le port 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, subject, message, type } = body;
  
  // Déterminer l'adresse email de destination
  const toEmail = type === 'consulting' 
    ? 'consulting@staminadev.com'
    : type === 'dev'
    ? 'dev@staminadev.com'
    : 'contact@staminadev.com';

  try {
    await transporter.sendMail({
      from: '"Stamina Contact" <noreply@staminadev.com>',
      to: toEmail,
      replyTo: email,  // Important : les réponses iront au client
      subject: `Nouveau message de ${name}: ${subject}`,
      text: `
        Nom: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 