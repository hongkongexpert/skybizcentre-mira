import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  console.log("[v0] API route called")

  try {
    const body = await request.json()
    console.log("[v0] Request body:", body)

    const { service, date, time, duration, attendees, name, email, phone, company, requirements } = body

    // Validate required fields
    if (!service || !date || !time || !name || !email || !phone) {
      console.log("[v0] Missing required fields")
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    console.log("[v0] Sending email...")

    // Send email to both recipients
    const emailData = await resend.emails.send({
      from: "Sky Business Centre <bookings@timessquare.skybizcentre.com>",
      to: ["sales@skybizcentre.com", "shahseo5@gmail.com"],
      replyTo: email,
      subject: `New Booking Enquiry - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">New Booking Enquiry</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Sky Business Centre - Times Square</p>
          </div>
          
          <div style="padding: 30px; background: #f8fafc;">
            <h2 style="color: #1e40af; margin-top: 0;">Booking Details</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 30%;">Service:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${service}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Date:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${date}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Time:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${time}</td>
                </tr>
                ${
                  duration
                    ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Duration:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${duration}</td>
                </tr>
                `
                    : ""
                }
                ${
                  attendees
                    ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Attendees:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${attendees}</td>
                </tr>
                `
                    : ""
                }
              </table>
            </div>

            <h2 style="color: #1e40af; margin-bottom: 15px;">Contact Information</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 30%;">Name:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                  <td style="padding: 8px 0; color: #1f2937;"><a href="mailto:${email}" style="color: #1e40af;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
                  <td style="padding: 8px 0; color: #1f2937;"><a href="tel:${phone}" style="color: #1e40af;">${phone}</a></td>
                </tr>
                ${
                  company
                    ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Company:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${company}</td>
                </tr>
                `
                    : ""
                }
              </table>
            </div>

            ${
              requirements
                ? `
            <h2 style="color: #1e40af; margin-bottom: 15px;">Special Requirements</h2>
            <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <p style="margin: 0; color: #1f2937; line-height: 1.6;">${requirements}</p>
            </div>
            `
                : ""
            }
          </div>
          
          <div style="background: #1f2937; color: white; padding: 20px; text-align: center;">
            <p style="margin: 0; font-size: 14px; opacity: 0.8;">
              Sky Business Centre | Level 34, Tower One, Times Square, Causeway Bay, Hong Kong
            </p>
          </div>
        </div>
      `,
    })

    console.log("[v0] Email sent successfully:", emailData)

    return NextResponse.json({
      success: true,
      message: "Booking enquiry sent successfully",
      emailId: emailData.data?.id,
    })
  } catch (error) {
    console.error("[v0] API Error:", error)
    return NextResponse.json(
      { error: "Failed to send booking enquiry", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    )
  }
}
