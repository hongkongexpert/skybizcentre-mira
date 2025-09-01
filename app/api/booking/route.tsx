import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    console.log("[v0] API route called")

    const body = await request.json()
    console.log("[v0] Request body:", body)

    const { serviceType, date, time, duration, attendees, name, email, phone, company, requirements } = body

    // Validate required fields
    if (!serviceType || !date || !time || !name || !email || !phone) {
      console.log("[v0] Missing required fields")
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Format service type for display
    const serviceTypeDisplay = serviceType
      .split("-")
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    // Create email content
    const emailContent = `
      <h2>New Booking Enquiry - Sky Business Centre</h2>
      
      <h3>Service Details:</h3>
      <p><strong>Service Type:</strong> ${serviceTypeDisplay}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Duration:</strong> ${duration} hours</p>
      <p><strong>Number of Attendees:</strong> ${attendees}</p>
      
      <h3>Contact Information:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company || "Not provided"}</p>
      
      ${requirements ? `<h3>Special Requirements:</h3><p>${requirements}</p>` : ""}
      
      <hr>
      <p><em>This enquiry was submitted through the Sky Business Centre website.</em></p>
    `

    console.log("[v0] Sending email...")

    // Send email to both recipients
    const emailResponse = await resend.emails.send({
      from: "Sky Business Centre <noreply@skybizcentre.com>",
      to: ["sales@skybizcentre.com", "shahseo5@gmail.com"],
      replyTo: email,
      subject: `New Booking Enquiry - ${serviceTypeDisplay} for ${date}`,
      html: emailContent,
    })

    console.log("[v0] Email sent successfully:", emailResponse)

    return NextResponse.json({
      success: true,
      message: "Booking enquiry sent successfully",
    })
  } catch (error) {
    console.error("[v0] API Error:", error)
    return NextResponse.json({ error: "Failed to send booking enquiry" }, { status: 500 })
  }
}
