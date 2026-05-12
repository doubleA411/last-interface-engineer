import { NextResponse } from "next/server";

const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

async function redis(command: string[]) {
  const res = await fetch(`${REDIS_URL}/${command.join("/")}`, {
    headers: { Authorization: `Bearer ${REDIS_TOKEN}` },
    cache: "no-store",
  });
  return res.json();
}

// GET — return current count without incrementing (for display)
export async function GET() {
  if (!REDIS_URL || !REDIS_TOKEN) {
    return NextResponse.json({ count: 0 });
  }
  const data = await redis(["get", "portfolio_visitors"]);
  return NextResponse.json({ count: Number(data.result) || 0 });
}

// POST — increment on each new visit
export async function POST() {
  if (!REDIS_URL || !REDIS_TOKEN) {
    return NextResponse.json({ count: 0 });
  }
  const data = await redis(["incr", "portfolio_visitors"]);
  return NextResponse.json({ count: Number(data.result) || 0 });
}
