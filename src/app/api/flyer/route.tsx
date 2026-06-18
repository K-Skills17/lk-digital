import { ImageResponse } from "next/og";
import { loadFonts } from "@/lib/og-fonts";

export const runtime = "edge";

const SIZES = {
  square: { width: 1080, height: 1080 },
  story: { width: 1080, height: 1920 },
} as const;

// Royalty-free Unsplash images per segment (dark/moody, good for text overlay)
const SEGMENT_IMAGES: Record<string, string> = {
  dentistas:
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80&fit=crop", // dental office
  advogados:
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80&fit=crop", // law books/gavel
  "e-commerce":
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80&fit=crop", // shopping/ecommerce
  negocios:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&fit=crop", // modern office
};

const DEFAULT_BG =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80&fit=crop"; // abstract tech/dark

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const headline = searchParams.get("headline") || "Site Premium para Seu Negócio";
  const subline = searchParams.get("subline") || "Pronto em dias. Você mesmo atualiza.";
  const cta = searchParams.get("cta") || "Chame no WhatsApp";
  const segment = searchParams.get("segment") || "";
  const price = searchParams.get("price") || "";
  const features = searchParams.get("features") || "";
  const format = searchParams.get("format") === "story" ? "story" : "square";
  const style = searchParams.get("style") || "photo"; // photo | minimal | split
  const customBg = searchParams.get("bg") || "";

  const { width, height } = SIZES[format];
  const isStory = format === "story";
  const fonts = await loadFonts();

  const bgImage =
    customBg ||
    SEGMENT_IMAGES[segment.toLowerCase()] ||
    DEFAULT_BG;

  const featureList = features ? features.split("|").slice(0, 4) : [];

  // Style: photo — full background image with dark overlay
  if (style === "photo") {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#111111",
          }}
        >
          {/* Background image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={bgImage}
            alt=""
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          {/* Dark overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(180deg, rgba(17,17,17,0.75) 0%, rgba(17,17,17,0.9) 60%, rgba(17,17,17,0.95) 100%)",
              display: "flex",
            }}
          />

          {/* Gold accent line at top */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "4px",
              background: "linear-gradient(90deg, transparent 0%, #C4963A 30%, #C4963A 70%, transparent 100%)",
              display: "flex",
            }}
          />

          {/* Content */}
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              padding: isStory ? "80px 60px" : "60px",
            }}
          >
            {/* Top: logo + segment badge */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div
                style={{
                  fontFamily: '"Playfair Display"',
                  fontSize: isStory ? "32px" : "28px",
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
                    fontSize: "12px",
                    color: "#C4963A",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    border: "1px solid rgba(196,150,58,0.4)",
                    padding: "6px 16px",
                    borderRadius: "2px",
                    display: "flex",
                  }}
                >
                  {segment}
                </div>
              )}
            </div>

            {/* Center: headline + subline + features + price */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: isStory ? "28px" : "20px",
              }}
            >
              <div
                style={{
                  fontFamily: '"Playfair Display"',
                  fontSize: isStory
                    ? headline.length > 35 ? "48px" : "56px"
                    : headline.length > 35 ? "40px" : "48px",
                  fontWeight: 700,
                  color: "#EDE8DF",
                  lineHeight: 1.15,
                  display: "flex",
                  maxWidth: "95%",
                }}
              >
                {headline}
              </div>

              {/* Gold underline */}
              <div
                style={{
                  width: "80px",
                  height: "3px",
                  backgroundColor: "#C4963A",
                  boxShadow: "0 0 16px rgba(196,150,58,0.5)",
                  display: "flex",
                }}
              />

              <div
                style={{
                  fontFamily: '"Inter"',
                  fontSize: isStory ? "22px" : "18px",
                  color: "rgba(237,232,223,0.65)",
                  lineHeight: 1.6,
                  display: "flex",
                  maxWidth: "85%",
                }}
              >
                {subline}
              </div>

              {/* Feature bullets */}
              {featureList.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "8px" }}>
                  {featureList.map((f, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          backgroundColor: "#C4963A",
                          flexShrink: 0,
                          display: "flex",
                        }}
                      />
                      <div
                        style={{
                          fontFamily: '"Inter"',
                          fontSize: isStory ? "18px" : "15px",
                          color: "rgba(237,232,223,0.55)",
                          display: "flex",
                        }}
                      >
                        {f.trim()}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Price badge */}
              {price && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "8px",
                    marginTop: "8px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: '"Inter"',
                      fontSize: isStory ? "14px" : "12px",
                      color: "rgba(237,232,223,0.5)",
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      display: "flex",
                    }}
                  >
                    a partir de
                  </div>
                  <div
                    style={{
                      fontFamily: '"Playfair Display"',
                      fontSize: isStory ? "44px" : "38px",
                      fontWeight: 700,
                      color: "#C4963A",
                      display: "flex",
                    }}
                  >
                    R$ {price}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom: CTA + website */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* CTA button */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  backgroundColor: "#C4963A",
                  color: "#111111",
                  fontFamily: '"Inter"',
                  fontSize: isStory ? "18px" : "15px",
                  fontWeight: 600,
                  padding: isStory ? "20px 36px" : "16px 28px",
                  borderRadius: "4px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  alignSelf: "flex-start",
                }}
              >
                {/* WhatsApp icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#111111">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {cta}
              </div>

              <div
                style={{
                  fontFamily: '"Inter"',
                  fontSize: "13px",
                  color: "rgba(237,232,223,0.3)",
                  display: "flex",
                }}
              >
                lkdigitalbrasil.com.br
              </div>
            </div>
          </div>
        </div>
      ),
      { width, height, fonts }
    );
  }

  // Style: split — image on one side, content on the other
  if (style === "split") {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: isStory ? "column" : "row",
            backgroundColor: "#111111",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Image half */}
          <div
            style={{
              width: isStory ? "100%" : "45%",
              height: isStory ? "40%" : "100%",
              position: "relative",
              display: "flex",
              overflow: "hidden",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={bgImage}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            {/* Fade edge */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: isStory
                  ? "linear-gradient(180deg, transparent 50%, #111111 100%)"
                  : "linear-gradient(90deg, transparent 40%, #111111 100%)",
                display: "flex",
              }}
            />
            {/* Gold border accent */}
            <div
              style={{
                position: "absolute",
                ...(isStory
                  ? { bottom: 0, left: "60px", right: "60px", height: "3px" }
                  : { top: "60px", bottom: "60px", right: 0, width: "3px" }),
                backgroundColor: "#C4963A",
                display: "flex",
              }}
            />
          </div>

          {/* Content half */}
          <div
            style={{
              width: isStory ? "100%" : "55%",
              height: isStory ? "60%" : "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: isStory ? "30px 60px 60px" : "60px 60px 60px 40px",
            }}
          >
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div
                style={{
                  fontFamily: '"Playfair Display"',
                  fontSize: isStory ? "28px" : "24px",
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
                    fontSize: "11px",
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

            {/* Text content */}
            <div style={{ display: "flex", flexDirection: "column", gap: isStory ? "20px" : "16px" }}>
              <div
                style={{
                  fontFamily: '"Playfair Display"',
                  fontSize: isStory
                    ? headline.length > 30 ? "38px" : "44px"
                    : headline.length > 30 ? "34px" : "40px",
                  fontWeight: 700,
                  color: "#EDE8DF",
                  lineHeight: 1.15,
                  display: "flex",
                }}
              >
                {headline}
              </div>

              <div style={{ width: "60px", height: "3px", backgroundColor: "#C4963A", display: "flex" }} />

              <div
                style={{
                  fontFamily: '"Inter"',
                  fontSize: isStory ? "18px" : "16px",
                  color: "rgba(237,232,223,0.6)",
                  lineHeight: 1.5,
                  display: "flex",
                }}
              >
                {subline}
              </div>

              {price && (
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                  <div style={{ fontFamily: '"Inter"', fontSize: "11px", color: "rgba(237,232,223,0.4)", textTransform: "uppercase", letterSpacing: "2px", display: "flex" }}>
                    a partir de
                  </div>
                  <div style={{ fontFamily: '"Playfair Display"', fontSize: isStory ? "36px" : "32px", fontWeight: 700, color: "#C4963A", display: "flex" }}>
                    R$ {price}
                  </div>
                </div>
              )}
            </div>

            {/* CTA */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "#C4963A",
                  color: "#111111",
                  fontFamily: '"Inter"',
                  fontSize: isStory ? "16px" : "14px",
                  fontWeight: 600,
                  padding: isStory ? "16px 28px" : "14px 24px",
                  borderRadius: "4px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  alignSelf: "flex-start",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#111111">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {cta}
              </div>
              <div style={{ fontFamily: '"Inter"', fontSize: "12px", color: "rgba(237,232,223,0.3)", display: "flex" }}>
                lkdigitalbrasil.com.br
              </div>
            </div>
          </div>
        </div>
      ),
      { width, height, fonts }
    );
  }

  // Style: minimal (original, improved)
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
        {/* Gold gradient motif */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(196,150,58,0.15) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Geometric diamonds */}
        <div style={{ position: "absolute", top: isStory ? "12%" : "8%", right: "50px", width: "90px", height: "90px", border: "1px solid rgba(196,150,58,0.2)", transform: "rotate(45deg)", display: "flex" }} />
        <div style={{ position: "absolute", bottom: isStory ? "20%" : "25%", left: "40px", width: "60px", height: "60px", border: "1px solid rgba(196,150,58,0.12)", transform: "rotate(45deg)", display: "flex" }} />

        {/* Gold line top */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "3px", background: "linear-gradient(90deg, #C4963A 0%, transparent 60%)", display: "flex" }} />

        {/* Logo + segment */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontFamily: '"Playfair Display"', fontSize: isStory ? "32px" : "26px", fontWeight: 700, color: "#EDE8DF", display: "flex" }}>
            LK Digital
          </div>
          {segment && (
            <div style={{ fontFamily: '"Inter"', fontSize: "12px", color: "#C4963A", letterSpacing: "3px", textTransform: "uppercase", border: "1px solid rgba(196,150,58,0.3)", padding: "6px 14px", borderRadius: "2px", display: "flex" }}>
              {segment}
            </div>
          )}
        </div>

        {/* Center content */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: isStory ? "28px" : "22px" }}>
          <div
            style={{
              fontFamily: '"Playfair Display"',
              fontSize: isStory ? (headline.length > 30 ? "50px" : "58px") : (headline.length > 30 ? "42px" : "48px"),
              fontWeight: 700, color: "#EDE8DF", lineHeight: 1.15, display: "flex", textAlign: "center", maxWidth: "90%",
            }}
          >
            {headline}
          </div>

          <div style={{ width: "80px", height: "3px", backgroundColor: "#C4963A", boxShadow: "0 0 16px rgba(196,150,58,0.5)", display: "flex" }} />

          <div style={{ fontFamily: '"Inter"', fontSize: isStory ? "22px" : "18px", color: "rgba(237,232,223,0.6)", lineHeight: 1.5, display: "flex", textAlign: "center", maxWidth: "80%" }}>
            {subline}
          </div>

          {price && (
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginTop: "4px" }}>
              <div style={{ fontFamily: '"Inter"', fontSize: "12px", color: "rgba(237,232,223,0.4)", textTransform: "uppercase", letterSpacing: "2px", display: "flex" }}>a partir de</div>
              <div style={{ fontFamily: '"Playfair Display"', fontSize: isStory ? "42px" : "36px", fontWeight: 700, color: "#C4963A", display: "flex" }}>R$ {price}</div>
            </div>
          )}

          <div
            style={{
              display: "flex", alignItems: "center", gap: "10px",
              backgroundColor: "#C4963A", color: "#111111",
              fontFamily: '"Inter"', fontSize: isStory ? "18px" : "15px", fontWeight: 600,
              padding: isStory ? "18px 36px" : "14px 30px", borderRadius: "4px",
              letterSpacing: "1.5px", textTransform: "uppercase", marginTop: "8px",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#111111">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {cta}
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ fontFamily: '"Inter"', fontSize: "13px", color: "rgba(237,232,223,0.3)", display: "flex" }}>
            lkdigitalbrasil.com.br
          </div>
        </div>
      </div>
    ),
    { width, height, fonts }
  );
}
