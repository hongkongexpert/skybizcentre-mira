import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, serviceType, preferredDate, preferredTime, message } = body

    // Validate required fields
    if (!name || !email || !phone || !serviceType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const emailContent = `
      <h2>New Booking Enquiry - Sky Business Centre</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company || "Not provided"}</p>
      <p><strong>Service Type:</strong> ${serviceType}</p>
      <p><strong>Preferred Date:</strong> ${preferredDate || "Not specified"}</p>
      <p><strong>Preferred Time:</strong> ${preferredTime || "Not specified"}</p>
      <p><strong>Message:</strong> ${message || "No additional message"}</p>
      
      <hr>
      <p><em>This enquiry was submitted through the Sky Business Centre website.</em></p>
    `

    // Send email to both recipients
    const { data, error } = await resend.emails.send({
      from: "Sky Business Centre <noreply@skybizcentre.com>",
      to: ["sales@skybizcentre.com", "shahseo5@gmail.com"],
      subject: `New Booking Enquiry - ${serviceType} from ${name}`,
      html: emailContent,
      reply_to: email,
    })

    if (error) {
      console.error("Email sending error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ message: "Booking enquiry sent successfully", data }, { status: 200 })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
