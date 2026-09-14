import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder")

export async function POST(request: NextRequest) {
  console.log("[v0] API route called")

  try {
    const body = await request.json()
    console.log("[v0] Request body:", body)

    const { service, groupSize, date, time, name, email, phone, company, requirements } = body

    // Validate required fields
    if (!service || !date || !time || !name || !email || !phone) {
      console.log("[v0] Missing required fields")
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const salesEmailContent = `
New Booking Enquiry - Sky Business Centre Mira Place

Service: ${service}
Group Size: ${groupSize || "Not provided"}
Date: ${date}
Time: ${time}

Contact Information:
Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company || "Not provided"}

Special Requirements: ${requirements || "None"}

---
This enquiry was submitted through the Sky Business Centre website.
Please follow up with the customer within 24 hours.
    `.trim()

    const customerEmailContent = `
Dear ${name},

Thank you for your booking enquiry with Sky Business Centre at Mira Place, Tsim Sha Tsui.

Your Booking Details:
Service: ${service}
Date: ${date}
Time: ${time}
Company: ${company || "Not provided"}
${requirements ? `Special Requirements: ${requirements}` : ""}

We have received your request and our team will contact you within 24 hours to confirm your booking and discuss any specific requirements.

Located at 1001, 10/F Mira Place Tower A, 132 Nathan Road, Tsim Sha Tsui, our new centre opens November 2026 — premium business facilities in the heart of Kowloon's shopping and business district.

If you have any immediate questions, please don't hesitate to contact us:
📧 sales@skybizcentre.com
📞 +852 2162 7306

Thank you for choosing Sky Business Centre.

Best regards,
Sky Business Centre Team
1001, 10/F Mira Place Tower A
132 Nathan Road, Tsim Sha Tsui, Kowloon, Hong Kong
    `.trim()

    console.log("[v0] Sending emails...")

    const salesEmailResponse = await resend.emails.send({
      from: "bookings@skybizcentre.com",
      to: ["sales@skybizcentre.com", "shahseo5@gmail.com"],
      subject: `New Booking Enquiry - Mira Place - ${service} - ${name}`,
      text: salesEmailContent,
      replyTo: email,
    })

    const customerEmailResponse = await resend.emails.send({
      from: "bookings@skybizcentre.com",
      to: [email],
      subject: `Booking Confirmation - Sky Business Centre Mira Place - ${service}`,
      text: customerEmailContent,
      replyTo: "sales@skybizcentre.com",
    })

    console.log("[v0] Sales email sent:", salesEmailResponse)
    console.log("[v0] Customer email sent:", customerEmailResponse)

    return NextResponse.json({
      success: true,
      message: "Booking confirmed! Check your email for confirmation details.",
    })
  } catch (error) {
    console.error("[v0] API Error:", error)
    return NextResponse.json({ error: "Failed to send booking enquiry" }, { status: 500 })
  }
}
