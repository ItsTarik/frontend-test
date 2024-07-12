import { promises as fs } from "fs";
import { unstable_noStore } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  unstable_noStore();

  const file = await fs.readFile(
    process.cwd() + "/src/mocks/default-user.json",
    "utf8"
  );
  const parsed = JSON.parse(file);

  return NextResponse.json(parsed);
}
