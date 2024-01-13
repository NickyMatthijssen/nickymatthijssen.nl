import { draftMode } from "next/headers";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(request: Request) {
  draftMode().disable();
  return new Response("Draft mode is disabled");
}
