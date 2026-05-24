import { getLakeRootsConciergeReply } from "@/lib/concierge";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as { message?: string } | null;
  const message = body?.message?.trim();

  if (!message) {
    return Response.json({ error: "message required" }, { status: 400 });
  }

  return Response.json({
    reply: getLakeRootsConciergeReply(message),
    limits:
      "Uses verified Lake Roots site facts only; does not make reservations, quote live waits, guarantee availability, or answer kitchen-safety questions without a phone handoff.",
  });
}
