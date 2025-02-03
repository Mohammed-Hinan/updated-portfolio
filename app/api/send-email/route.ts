import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, message } = body

  // Here you would typically use a service like SendGrid, Mailgun, or AWS SES to send the email
  // For this example, we'll just log the data and return a success response

  console.log("Received message:", { name, email, message })

  // TODO: Implement actual email sending logic here

  return NextResponse.json({ success: true })
}

