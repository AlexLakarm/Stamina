import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Créer le transporteur SMTP avec les infos OVH
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'ssl0.ovh.net',
  port: Number(process.env.EMAIL_PORT) || 465,
  secure: true,  // true pour le port 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  },
  tls: {
    // Ne pas vérifier le certificat en développement
    rejectUnauthorized: process.env.NODE_ENV === 'production'
  }
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('Received data:', body); // Debug log
    console.log('SMTP Config:', { // Debug log
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      user: process.env.EMAIL_USER,
      // Ne pas logger le mot de passe
    });

    const { name, email, subject, message, type } = body;

    // Déterminer l'adresse email de destination
    const toEmail = type === 'consulting' 
      ? 'consulting@staminadev.com'
      : type === 'dev'
      ? 'dev@staminadev.com'
      : 'contact@staminadev.com';

    try {
      const info = await transporter.sendMail({
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
      console.log('Email sent:', info); // Debug log
      return NextResponse.json({ success: true });
    } catch (emailError) {
      console.error('SMTP Error:', emailError); // Debug log
      throw emailError;
    }
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send email', 
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 