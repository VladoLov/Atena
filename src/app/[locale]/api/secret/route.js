import fs from "fs";
import { NextResponse } from "next/server";

export async function GET() {
  const secretPath = "/run/secrets/resend_api_key";
  let secretValue = "";

  if (fs.existsSync(secretPath)) {
    secretValue = fs.readFileSync(secretPath, "utf8").trim();
  }

  return NextResponse.json({
    secret: secretValue ? "Loaded Successfully" : "Not Found",
  });
}
