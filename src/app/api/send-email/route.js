// app/api/send-email/route.js
import { NextResponse } from "next/server";
import { Resend } from "resend";

// Instantiate Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    // Parse the request body to get the form data
    const body = await req.json();
    const { name, email, phone, sqm, projectDetails } = body;

    // Use Resend to send the email
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["info@gulvmestere.no"],
      subject: `New Inquiry from ${name}`,
      react: (
        <div>
          <h1>New Project Inquiry</h1>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Phone:</strong> {phone}
          </p>
          <p>
            <strong>Estimated Square Meters:</strong> {sqm}
          </p>
          <hr />
          <p>
            <strong>Project Details:</strong>
          </p>
          <p>{projectDetails}</p>
        </div>
      ),
    });

    // Handle potential errors from the Resend API
    if (error) {
      console.error({ error });
      return NextResponse.json(
        { error: "Error sending email." },
        { status: 500 }
      );
    }

    // Return a success response
    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    // Handle exceptions in the try block
    console.error(error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
