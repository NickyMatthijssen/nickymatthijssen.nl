import { draftMode } from "next/headers";

export async function GET(request: Request) {
  if (process.env.NEXT_OUTPUT_MODE === "export") {
    return new Response("", { status: 404 });
  }

  draftMode().disable();
  return new Response("Draft mode is disabled");
}
