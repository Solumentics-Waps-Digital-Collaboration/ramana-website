import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, type, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Helvetica', Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
          .header { background-color: #2563EB; padding: 30px; text-align: center; }
          .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 1px; }
          .content { padding: 40px 30px; color: #333333; }
          .intro { font-size: 16px; color: #555; margin-bottom: 30px; text-align: center; }
          .grid { display: table; width: 100%; border-collapse: collapse; margin-bottom: 30px; }
          .row { display: table-row; }
          .col { display: table-cell; width: 50%; padding: 12px; border-bottom: 1px solid #eeeeee; }
          .label { font-size: 11px; text-transform: uppercase; color: #888; letter-spacing: 0.5px; margin-bottom: 5px; display: block; }
          .value { font-size: 15px; font-weight: 500; color: #111; display: block; }
          .message-block { background-color: #f8fafc; border-left: 4px solid #2563EB; padding: 20px; border-radius: 4px; margin-top: 10px; }
          .footer { background-color: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #eee; }
          .button { display: inline-block; background-color: #2563EB; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Client Inquiry</h1>
          </div>
          <div class="content">
            <p class="intro">You have received a new lead via the <strong>Ramanasa</strong> website.</p>
            
            <div class="grid">
              <div class="row">
                <div class="col">
                  <span class="label">Name</span>
                  <span class="value">${name}</span>
                </div>
                <div class="col">
                  <span class="label">Inquiry Type</span>
                  <span class="value" style="color: #2563EB;">${type}</span>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <span class="label">Email</span>
                  <span class="value"><a href="mailto:${email}" style="color: #111; text-decoration: none;">${email}</a></span>
                </div>
                <div class="col">
                  <span class="label">Phone</span>
                  <span class="value"><a href="tel:${phone}" style="color: #111; text-decoration: none;">${phone}</a></span>
                </div>
              </div>
            </div>

            <div style="margin-top: 20px;">
              <span class="label">Message</span>
              <div class="message-block">
                ${message}
              </div>
            </div>

            <div style="text-align: center;">
              <a href="mailto:${email}?subject=RE: Your Inquiry - ${type}" class="button">Reply to Client</a>
            </div>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Ramanasa Website System.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"Ramanasa Website" <${process.env.SMTP_USER}>`,
      to: 'info@ramanasa.com',
      replyTo: email,
      subject: `New Inquiry: ${type} - ${name}`,
      html: htmlContent,
    });

    return NextResponse.json({ message: 'Sent' }, { status: 200 });
  } catch (error) {
    console.error('Email Error:', error);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}