import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { serviceType, date, time, duration, attendees, name, email, phone, company, requirements } = body

    // Validate required fields
    if (!serviceType || !date || !time || !name || !email) {
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
      
      <hr>
      <p><em>This booking request was submitted through the Sky Business Centre website.</em></p>
    `

    // Send email to both recipients
    const { data, error } = await resend.emails.send({
      from: "Sky Business Centre <noreply@skybizcentre.com>",
      to: ["sales@skybizcentre.com", "shahseo5@gmail.com"],
      subject: `New Booking Request - ${serviceType} for ${date}`,
      html: emailContent,
      replyTo: email,
    })

    if (error) {
      console.error("Email sending error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
