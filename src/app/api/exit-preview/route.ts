import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  if (process.env.NEXT_OUTPUT_MODE === "export") {
    return new Response("", { status: 404 });
  }

  const { searchParams } = new URL(request.url);
  let slug = searchParams.get("slug");

  draftMode().disable();

  if (!slug) {
    return redirect("/");
  }

  if (!slug.startsWith("/")) {
    slug = `/${slug}`;
  }

  return redirect(slug);
}
