import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

const FALLBACK_CA = "MvmoYvZcekJT5v5rUAUK7dNngi2YDQzKRHRpT1Upump";
const ADMIN_PASSCODE = process.env.ADMIN_PASSCODE || "fuku2026";

// In-memory store (active across warm lambda instances)
let inMemoryCA = FALLBACK_CA;

// Helper to get persistent file path in /tmp (writable in Vercel serverless)
const getStoragePath = () => {
  try {
    const tmpDir = "/tmp";
    if (fs.existsSync(tmpDir)) {
      return path.join(tmpDir, "fuku_ca.txt");
    }
  } catch {
    // ignore
  }
  return null;
};

function readCA(): string {
  const filePath = getStoragePath();
  if (filePath && fs.existsSync(filePath)) {
    try {
      const data = fs.readFileSync(filePath, "utf8").trim();
      if (data) return data;
    } catch {
      // fallback
    }
  }
  return inMemoryCA;
}

function writeCA(newCA: string) {
  inMemoryCA = newCA;
  const filePath = getStoragePath();
  if (filePath) {
    try {
      fs.writeFileSync(filePath, newCA, "utf8");
    } catch {
      // ignore tmp write errors
    }
  }
}

export async function GET() {
  const ca = readCA();
  return NextResponse.json({
    success: true,
    ca,
    updatedAt: new Date().toISOString(),
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { passcode, ca } = body;

    if (!passcode || passcode.trim() !== ADMIN_PASSCODE) {
      return NextResponse.json(
        { success: false, error: "Incorrect Admin Passcode. The Fuku Shrine rejects your offering." },
        { status: 401 }
      );
    }

    if (!ca || typeof ca !== "string" || ca.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid Contract Address." },
        { status: 400 }
      );
    }

    const cleanedCA = ca.trim();
    writeCA(cleanedCA);

    return NextResponse.json({
      success: true,
      ca: cleanedCA,
      message: "Fuku Shrine Contract Address updated successfully across the realm!",
      timestamp: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Malformed request payload" },
      { status: 400 }
    );
  }
}
