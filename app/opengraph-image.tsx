import { ImageResponse } from "next/og";

export const alt = "DORA Global Research — International Market Intelligence & Language Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0B1528",
          padding: "60px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top rule line */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 80,
            right: 80,
            height: 2,
            backgroundColor: "#1D4ED8",
          }}
        />

        {/* Brand name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              backgroundColor: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0B1528",
              fontSize: 32,
              fontWeight: 800,
            }}
          >
            D
          </div>
          <span
            style={{
              fontSize: 36,
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: "0.06em",
            }}
          >
            DORA GLOBAL RESEARCH
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 22,
            color: "#94A3B8",
            textAlign: "center",
            maxWidth: 800,
            lineHeight: 1.5,
          }}
        >
          International Market Intelligence & Precision Language Solutions
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 80,
            right: 80,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ color: "#64748B", fontSize: 14, letterSpacing: "0.1em" }}>
            CROSS-BORDER RESEARCH · LANGUAGE SERVICES · FIELD OPERATIONS
          </span>
          <span style={{ color: "#1D4ED8", fontSize: 14, fontWeight: 700 }}>
            doraglobalresearch.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
