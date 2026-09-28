import { NextResponse } from "next/server";
import { getCAFromFirestore, saveCAToFirestore, DEFAULT_CA } from "@/app/lib/caService";

export const dynamic = "force-dynamic";

const ADMIN_PASSCODE = process.env.ADMIN_PASSCODE || "fuku2026";
let inMemoryCA = DEFAULT_CA;

export async function GET() {
  try {
    const ca = await getCAFromFirestore();
    inMemoryCA = ca;
    return NextResponse.json({
      success: true,
      ca,
      source: "firestore",
      updatedAt: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json({
      success: true,
      ca: inMemoryCA,
      source: "memory_fallback",
      updatedAt: new Date().toISOString(),
    });
  }
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
    inMemoryCA = cleanedCA;

    // Permanently write to Google Firebase Firestore!
    await saveCAToFirestore(cleanedCA);

    return NextResponse.json({
      success: true,
      ca: cleanedCA,
      message: "Fuku Shrine Contract Address permanently stored in Firestore!",
      timestamp: new Date().toISOString(),
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Malformed request";
    return NextResponse.json(
      { success: false, error: message },
      { status: 400 }
    );
  }
}
