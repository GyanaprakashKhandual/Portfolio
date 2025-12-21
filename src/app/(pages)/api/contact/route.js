import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

async function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function generateEmailTemplate(formData) {
  return `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px; }
          .header { background: linear-gradient(135deg, #000000 0%, #333333 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
          .content { background: white; padding: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #000; margin-bottom: 5px; }
          .value { background: #f0f0f0; padding: 10px; border-left: 4px solid #000; border-radius: 4px; }
          .footer { background: #f0f0f0; padding: 15px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 8px 8px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Message from your Portfolio</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">From:</div>
              <div class="value">${formData.name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${formData.email}">${formData.email}</a></div>
            </div>
            <div class="field">
              <div class="label">Subject:</div>
              <div class="value">${formData.subject}</div>
            </div>
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${formData.message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          <div class="footer">
            <p>This is an automated email from your portfolio contact form.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

function generateReplyTemplate(name) {
  return `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px; }
          .header { background: linear-gradient(135deg, #000000 0%, #333333 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
          .content { background: white; padding: 20px; line-height: 1.6; }
          .footer { background: #f0f0f0; padding: 15px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 8px 8px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You for Reaching Out!</h1>
          </div>
          <div class="content">
            <p>Hi ${name},</p>
            <p>Thank you for contacting me through my portfolio. I have received your message and will get back to you as soon as possible.</p>
            <p>I typically respond within 24-48 hours.</p>
            <p>In the meantime, feel free to connect with me on:</p>
            <ul>
              <li><a href="https://www.linkedin.com/in/gyana-prakash-khandual-79b205332/">LinkedIn</a></li>
              <li><a href="https://github.com/GyanaprakashKhandual">GitHub</a></li>
            </ul>
            <p>Best regards,<br>Gyana Prakash Khandual</p>
          </div>
          <div class="footer">
            <p>This is an automated reply. Please do not reply to this email.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 }
      );
    }

    const isValidEmail = await validateEmail(email);
    if (!isValidEmail) {
      return NextResponse.json(
        { message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { message: 'Message must be at least 10 characters long.' },
        { status: 400 }
      );
    }

    const emailTemplate = generateEmailTemplate({ name, email, subject, message });
    const replyTemplate = generateReplyTemplate(name);

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVE,
      subject: `New Contact Form: ${subject}`,
      html: emailTemplate,
      replyTo: email,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank You for Contacting Me',
      html: replyTemplate,
    });

    return NextResponse.json(
      { message: 'Your message has been sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}