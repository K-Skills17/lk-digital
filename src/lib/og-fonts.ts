// Fetch and cache font data for @vercel/og ImageResponse
// Using Google Fonts CSS API to get the actual font file URLs

export async function loadFonts() {
  const [playfairData, interData] = await Promise.all([
    fetch(
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap"
    )
      .then((res) => res.text())
      .then((css) => {
        const match = css.match(/src: url\((.+?)\) format/);
        return match ? fetch(match[1]).then((r) => r.arrayBuffer()) : null;
      }),
    fetch(
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
    )
      .then((res) => res.text())
      .then((css) => {
        const match = css.match(/src: url\((.+?)\) format/);
        return match ? fetch(match[1]).then((r) => r.arrayBuffer()) : null;
      }),
  ]);

  type Weight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  const fonts: { name: string; data: ArrayBuffer; weight: Weight; style: "normal" }[] =
    [];

  if (playfairData) {
    fonts.push({
      name: "Playfair Display",
      data: playfairData,
      weight: 700 as Weight,
      style: "normal" as const,
    });
  }

  if (interData) {
    fonts.push({
      name: "Inter",
      data: interData,
      weight: 400 as Weight,
      style: "normal" as const,
    });
  }

  return fonts;
}
