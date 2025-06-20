import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // Try multiple methods to get the real IP
  let ip =
    request.headers.get("x-real-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-client-ip") ||
    // request.ip ||
    "Unknown";

  // Remove IPv6 prefix if present
  if (ip.startsWith("::ffff:")) {
    ip = ip.substring(7);
  }

  return NextResponse.json({
    ip: ip,
    timestamp: new Date().toISOString(),
  });
}
