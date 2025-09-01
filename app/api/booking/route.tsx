import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    console.log("[v0] Booking API route called")

    const body = await request.json()
    console.log("[v0] Received booking data:", body)

    const { serviceType, date, time, duration, attendees, name, email, phone, company, requirements } = body

    // Validate required fields
    if (!serviceType || !date || !time || !name || !email) {
      console.log("[v0] Missing required fields")
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Format the email content
    const emailContent = `
      <h2>New Booking Request - Sky Business Centre</h2>
      
      <h3>Service Details:</h3>
      <ul>
        <li><strong>Service Type:</strong> ${serviceType}</li>
        <li><strong>Date:</strong> ${date}</li>
        <li><strong>Time:</strong> ${time}</li>
        <li><strong>Duration:</strong> ${duration} hours</li>
        <li><strong>Number of Attendees:</strong> ${attendees}</li>
      </ul>
      
      <h3>Contact Information:</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Company:</strong> ${company}</li>
      </ul>
      
      ${requirements ? `<h3>Special Requirements:</h3><p>${requirements}</p>` : ""}
      
      <p><em>This booking request was submitted through the Sky Business Centre website.</em></p>
    `

    console.log("[v0] Sending email...")

    // Send email to both recipients
    const emailResponse = await resend.emails.send({
      from: "Sky Business Centre <noreply@skybizcentre.com>",
      to: ["sales@skybizcentre.com", "shahseo5@gmail.com"],
      replyTo: email,
      subject: `New Booking Request - ${serviceType} for ${date}`,
      html: emailContent,
    })

    console.log("[v0] Email sent successfully:", emailResponse)

    return NextResponse.json({
      success: true,
      message: "Booking request sent successfully",
    })
  } catch (error) {
    console.error("[v0] Error processing booking:", error)
    return NextResponse.json({ error: "Failed to process booking request" }, { status: 500 })
  }
}
