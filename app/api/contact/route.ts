import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM!,   // e.g. onboarding@resend.dev
      to: process.env.EMAIL_TO!,       // your inbox
      subject:"🚀 New Demo Request",
      html: `
      <!-- 🔵 BANNER -->
      <img
        src="https://omqnhinzethgcihcyduu.supabase.co/storage/v1/object/public/Ramki_star/banner.jpeg"
        alt="Ramki Technologies"
        style="width:100%; display:block;"
      />
        <h2>New Contact Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Company:</b> ${company ?? "-"}</p>
       

        
      `,
    });

    console.log("Resend email sent:", data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);
    return NextResponse.json(
      { error: "Email sending failed" },
      { status: 500 }
    );
  }
}

console.log("EMAIL_FROM:", process.env.EMAIL_FROM);
console.log("EMAIL_TO:", process.env.EMAIL_TO);
