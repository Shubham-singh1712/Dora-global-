import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0B1528",
          color: "#FFFFFF",
          fontSize: 96,
          fontWeight: 800,
          fontFamily: "sans-serif",
          letterSpacing: "-0.02em",
        }}
      >
        D
      </div>
    ),
    { ...size }
  );
}
