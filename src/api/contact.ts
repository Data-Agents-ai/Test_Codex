import type { IncomingMessage, ServerResponse } from 'http';
import nodemailer from 'nodemailer';

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.end();
    return;
  }

  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', async () => {
    try {
      const { name, email, company, topic, message } = JSON.parse(body || '{}');
      if (!name || !email || !message) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Missing required fields' }));
        return;
      }

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false,
        auth: process.env.SMTP_USER
          ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
          : undefined,
      });

      await transporter.sendMail({
        to: process.env.CONTACT_EMAIL,
        from: email,
        subject: `Contact form: ${topic || 'general'}`,
        text: `Name: ${name}\nCompany: ${company || ''}\nTopic: ${topic || ''}\n\n${message}`,
      });

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ ok: true }));
    } catch (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Failed to send message' }));
    }
  });
}
