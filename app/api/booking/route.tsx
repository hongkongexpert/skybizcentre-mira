import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  console.log("[v0] API route called")

  try {
    const body = await request.json()
    console.log("[v0] Request body:", body)

    // Validate required fields
    const { serviceType, date, time, duration, name, email, phone, company } = body

    if (!serviceType || !date || !time || !name || !email || !phone) {
      console.log("[v0] Missing required fields")
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Format the email content
    const emailContent = `
      <h2>New Booking Enquiry - Sky Business Centre</h2>
      <p><strong>Service:</strong> ${serviceType.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Duration:</strong> ${duration} hours</p>
      ${body.attendees ? `<p><strong>Number of Attendees:</strong> ${body.attendees}</p>` : ""}
      
      <h3>Contact Information</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company}</p>
      
      ${body.requirements ? `<h3>Special Requirements</h3><p>${body.requirements}</p>` : ""}
      
      <hr>
      <p><em>This enquiry was submitted through the Sky Business Centre website.</em></p>
    `

    console.log("[v0] Attempting to send email")

    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: "Sky Business Centre <bookings@timessquare.skybizcentre.com>",
      to: ["sales@skybizcentre.com", "shahseo5@gmail.com"],
      subject: `New Booking Enquiry - ${serviceType.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}`,
      html: emailContent,
      replyTo: email,
    })

    console.log("[v0] Email response:", emailResponse)

    if (emailResponse.error) {
      console.log("[v0] Email sending failed:", emailResponse.error)
      return NextResponse.json({ error: "Failed to send email", details: emailResponse.error }, { status: 500 })
    }

    console.log("[v0] Email sent successfully")
    return NextResponse.json({
      success: true,
      message: "Booking enquiry sent successfully",
      emailId: emailResponse.data?.id,
    })
  } catch (error) {
    console.error("[v0] API Error:", error)
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    )
  }
}
