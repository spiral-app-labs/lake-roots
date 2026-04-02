import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2c3d24 0%, #87A878 50%, #8B6914 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Overlay pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at 30% 40%, rgba(255,248,231,0.15) 0%, transparent 60%)",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          <div style={{ fontSize: "64px", marginBottom: "8px", display: "flex" }}>🌿</div>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 800,
              color: "#FFF8E7",
              marginBottom: "8px",
              display: "flex",
            }}
          >
            Lake Roots
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 600,
              color: "#FFF8E7",
              opacity: 0.9,
              letterSpacing: "6px",
              textTransform: "uppercase",
              marginBottom: "24px",
              display: "flex",
            }}
          >
            Café • Market • Bar
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#FFF8E7",
              opacity: 0.8,
              marginBottom: "24px",
              display: "flex",
            }}
          >
            475 W Virginia St, Crystal Lake, IL
          </div>

          {/* Stars */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "8px",
            }}
          >
            <div style={{ fontSize: "32px", color: "#F59E0B", display: "flex" }}>
              ★★★★★
            </div>
            <div style={{ fontSize: "36px", fontWeight: 800, color: "#FFF8E7", display: "flex" }}>
              4.8
            </div>
          </div>
          <div
            style={{
              fontSize: "20px",
              color: "#FFF8E7",
              opacity: 0.7,
              display: "flex",
            }}
          >
            107+ Reviews
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
