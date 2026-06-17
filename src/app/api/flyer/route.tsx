import { ImageResponse } from "next/og";
import { loadFonts } from "@/lib/og-fonts";

export const runtime = "edge";

const SIZES = {
  square: { width: 1080, height: 1080 },
  story: { width: 1080, height: 1920 },
} as const;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const headline = searchParams.get("headline") || "Site Premium para Seu Negócio";
  const subline =
    searchParams.get("subline") || "Pronto em dias. Você mesmo atualiza.";
  const cta = searchParams.get("cta") || "Chame no WhatsApp";
  const segment = searchParams.get("segment") || "";
  const format = searchParams.get("format") === "story" ? "story" : "square";

  const { width, height } = SIZES[format];
  const isStory = format === "story";

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
          padding: isStory ? "80px 60px" : "60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gold gradient motif - top */}
        <div
          style={{
            position: "absolute",
            top: isStory ? "-200px" : "-150px",
            left: "50%",
            transform: "translateX(-50%)",
            width: isStory ? "800px" : "600px",
            height: isStory ? "800px" : "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(196,150,58,0.12) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Gold geometric diamond motif */}
        <div
          style={{
            position: "absolute",
            top: isStory ? "15%" : "10%",
            right: isStory ? "40px" : "40px",
            width: isStory ? "100px" : "80px",
            height: isStory ? "100px" : "80px",
            border: "1px solid rgba(196,150,58,0.2)",
            transform: "rotate(45deg)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: isStory ? "25%" : "30%",
            left: "40px",
            width: isStory ? "60px" : "50px",
            height: isStory ? "60px" : "50px",
            border: "1px solid rgba(196,150,58,0.12)",
            transform: "rotate(45deg)",
            display: "flex",
          }}
        />

        {/* Logo + segment */}
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
              fontSize: isStory ? "32px" : "26px",
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
                fontSize: "13px",
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

        {/* Main content - centered */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: isStory ? "30px" : "24px",
            padding: isStory ? "0 20px" : "0",
          }}
        >
          <div
            style={{
              fontFamily: '"Playfair Display"',
              fontSize: isStory
                ? headline.length > 30
                  ? "52px"
                  : "60px"
                : headline.length > 30
                ? "42px"
                : "50px",
              fontWeight: 700,
              color: "#EDE8DF",
              lineHeight: 1.15,
              display: "flex",
              textAlign: "center",
              maxWidth: "90%",
            }}
          >
            {headline}
          </div>

          {/* Gold underline */}
          <div
            style={{
              width: "100px",
              height: "2px",
              backgroundColor: "#C4963A",
              boxShadow: "0 0 12px rgba(196,150,58,0.4)",
              display: "flex",
            }}
          />

          <div
            style={{
              fontFamily: '"Inter"',
              fontSize: isStory ? "24px" : "20px",
              color: "rgba(237,232,223,0.6)",
              lineHeight: 1.5,
              display: "flex",
              textAlign: "center",
              maxWidth: "80%",
            }}
          >
            {subline}
          </div>

          {/* CTA pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "#C4963A",
              color: "#111111",
              fontFamily: '"Inter"',
              fontSize: isStory ? "20px" : "16px",
              fontWeight: 600,
              padding: isStory ? "18px 40px" : "14px 32px",
              borderRadius: "4px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginTop: "10px",
            }}
          >
            {cta}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontFamily: '"Inter"',
              fontSize: "14px",
              color: "rgba(237,232,223,0.35)",
              display: "flex",
            }}
          >
            lkdigitalbrasil.com.br
          </div>
        </div>
      </div>
    ),
    {
      width,
      height,
      fonts,
    }
  );
}
