import { ImageResponse } from "next/og";
import { loadFonts } from "@/lib/og-fonts";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "LK Digital";
  const subtitle = searchParams.get("subtitle") || "Sites Premium para Pequenos Negócios";
  const segment = searchParams.get("segment") || "";

  const fonts = await loadFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#111111",
          padding: "60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gold gradient motif - top right */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(196,150,58,0.15) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Gold geometric lines */}
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            right: "60px",
            width: "200px",
            height: "200px",
            border: "1px solid rgba(196,150,58,0.2)",
            borderRadius: "2px",
            transform: "rotate(15deg)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "100px",
            right: "80px",
            width: "160px",
            height: "160px",
            border: "1px solid rgba(196,150,58,0.12)",
            borderRadius: "2px",
            transform: "rotate(30deg)",
            display: "flex",
          }}
        />

        {/* Top bar: logo + segment badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontFamily: '"Playfair Display"',
              fontSize: "28px",
              fontWeight: 700,
              color: "#EDE8DF",
              display: "flex",
            }}
          >
            LK Digital
          </div>
          {segment && (
            <div
              style={{
                fontFamily: '"Inter"',
                fontSize: "14px",
                color: "#C4963A",
                letterSpacing: "2px",
                textTransform: "uppercase",
                display: "flex",
              }}
            >
              {segment}
            </div>
          )}
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "900px" }}>
          <div
            style={{
              fontFamily: '"Playfair Display"',
              fontSize: title.length > 40 ? "42px" : "52px",
              fontWeight: 700,
              color: "#EDE8DF",
              lineHeight: 1.15,
              display: "flex",
            }}
          >
            {title}
          </div>

          {/* Gold underline accent */}
          <div
            style={{
              width: "120px",
              height: "2px",
              backgroundColor: "#C4963A",
              boxShadow: "0 0 12px rgba(196,150,58,0.4)",
              display: "flex",
            }}
          />

          <div
            style={{
              fontFamily: '"Inter"',
              fontSize: "22px",
              color: "rgba(237,232,223,0.6)",
              lineHeight: 1.5,
              display: "flex",
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontFamily: '"Inter"',
              fontSize: "14px",
              color: "rgba(237,232,223,0.4)",
              display: "flex",
            }}
          >
            lkdigitalbrasil.com.br
          </div>
          <div
            style={{
              fontFamily: '"Inter"',
              fontSize: "14px",
              color: "#C4963A",
              display: "flex",
            }}
          >
            Sites Premium &middot; Marketing Digital
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts,
    }
  );
}
