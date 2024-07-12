import { NEWSLETTER_ITEMS } from "@/mocks/newsletters";

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(NEWSLETTER_ITEMS);
}
