import { ImageResponse } from "next/og";

export const alt = "Falcon Five Emergency Plumbing and AC Repair";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #020617 0%, #0f172a 55%, #334155 100%)",
          color: "#f8fafc",
          padding: 64,
        }}
      >
        <div
          style={{
            fontSize: 34,
            fontWeight: 900,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#fbbf24",
          }}
        >
          Falcon Five
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 88, fontWeight: 900, lineHeight: 1 }}>Emergency Plumbing</div>
          <div style={{ fontSize: 58, fontWeight: 800, lineHeight: 1 }}>AC Repair • Waco, TX</div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 30 }}>
          <div>24/7 Dispatch</div>
          <div>Waco • Hewitt • Bellmead</div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
