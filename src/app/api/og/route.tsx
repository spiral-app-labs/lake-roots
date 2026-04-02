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
          }}
        >
          <div style={{ fontSize: 64, marginBottom: 16, display: "flex" }}>🌿</div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "#FFF8E7",
              fontFamily: "Georgia, serif",
              textAlign: "center",
              lineHeight: 1.1,
              display: "flex",
            }}
          >
            Lake Roots
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#87A878",
              marginTop: 8,
              letterSpacing: "0.15em",
              display: "flex",
            }}
          >
            Café · Market · Bar
          </div>
          <div
            style={{
              fontSize: 18,
              color: "rgba(255, 248, 231, 0.6)",
              marginTop: 20,
              display: "flex",
            }}
          >
            475 W Virginia Street, Crystal Lake, IL
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginTop: 20,
            }}
          >
            <div style={{ fontSize: 22, color: "#FFD700", display: "flex" }}>★★★★★</div>
            <div style={{ fontSize: 22, color: "#FFF8E7", fontWeight: 700, display: "flex" }}>4.8</div>
            <div style={{ fontSize: 18, color: "rgba(255, 248, 231, 0.5)", display: "flex" }}>
              · 107+ Reviews
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
