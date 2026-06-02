import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#2C2C2C",
          backgroundImage: "linear-gradient(135deg, #2C2C2C 0%, #1a1a1a 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "3px solid #87A878",
            borderRadius: "24px",
            padding: "60px 80px",
            backgroundColor: "rgba(135, 168, 120, 0.08)",
            maxWidth: "920px",
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "#87A878",
              display: "flex",
            }}
          >
            Crystal Lake, Illinois
          </div>
          <div
            style={{
              fontSize: 60,
              fontWeight: 700,
              color: "#FFF8E7",
              fontFamily: "Georgia, serif",
              textAlign: "center",
              lineHeight: 1.1,
              display: "flex",
              marginTop: 20,
            }}
          >
            Lake Roots Cafe Market and Bar
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#FFF8E7",
              marginTop: 16,
              textAlign: "center",
              maxWidth: "720px",
              lineHeight: 1.25,
              display: "flex",
            }}
          >
            Your neighborhood place for everyday moments.
          </div>
          <div
            style={{
              fontSize: 20,
              color: "rgba(255, 248, 231, 0.6)",
              marginTop: 20,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            Walk-ins welcome · Breakfast and lunch · Dinner and cocktails · Market
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              marginTop: 28,
            }}
          >
            <div style={{ width: 14, height: 14, borderRadius: 999, backgroundColor: "#87A878", display: "flex" }} />
            <div style={{ fontSize: 20, color: "rgba(255, 248, 231, 0.72)", display: "flex" }}>
              475 W Virginia Street, Crystal Lake, IL
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
