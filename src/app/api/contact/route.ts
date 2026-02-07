import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

type ContactPayload = {
  name: string;
  email: string;
  subject?: string;
  message: string;
  service?: string;
  source?: string;
};

function getEnv(name: string) {
  const value = process.env[name];
  return value && value.trim().length > 0 ? value : undefined;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;

    const name = body.name?.trim();
    const email = body.email?.trim();
    const subject = body.subject?.trim() || body.service?.trim() || 'Website inquiry';
    const message = body.message?.trim();
    const source = body.source?.trim() || 'website';

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const host = getEnv('SMTP_HOST');
    const port = Number(getEnv('SMTP_PORT') || 587);
    const user = getEnv('SMTP_USER');
    const pass = getEnv('SMTP_PASS');
    const from = getEnv('SMTP_FROM') || user;
    const to = getEnv('SMTP_TO') || getEnv('CONTACT_TO_EMAIL') || from;

    if (!host || !user || !pass || !from || !to) {
      return NextResponse.json(
        { error: 'Email service is not configured.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const html = `
      <h2>New Website Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Source:</strong> ${source}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br />')}</p>
    `;

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `New message: ${subject}`,
      text: `New Website Message\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nSource: ${source}\n\n${message}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
