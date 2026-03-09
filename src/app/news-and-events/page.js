import { fetchStrapi } from "@/app/dataFetch/strapi";
import NewsAndEventsContent from "@/components/NewsAndEvents/NewsAndEventsContent";

export const dynamic = "force-dynamic";

function richTextToPlain(blocks) {
  if (!Array.isArray(blocks)) return "";
  return blocks
    .map((b) => (b.children || []).map((c) => c.text || "").join(""))
    .join(" ")
    .trim();
}

export default async function NewsAndEventsPage() {
  const response = await fetchStrapi(
    "/api/news-and-event?populate[banner][populate]=*&populate[photoBooth][populate][country][populate][photo][populate]=*&populate[paintWall][populate][country][populate][photo][populate]=*"
  );
  const data = response?.data ?? null;
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "";

  const banner = data?.banner
    ? {
        desktopImageUrl: data.banner.desktopImage?.url
          ? `${baseUrl}${data.banner.desktopImage.url}`
          : null,
        mobileImageUrl: data.banner.mobileImage?.url
          ? `${baseUrl}${data.banner.mobileImage.url}`
          : null,
      }
    : null;

  const rawPhotoBooth = data?.photoBooth;
  const photoBoothHeading = rawPhotoBooth?.heading
    ? richTextToPlain(rawPhotoBooth.heading)
    : "PURPOSE PHOTOBOOTH";
  const photoBoothCountries = (rawPhotoBooth?.country ?? []).map((c) => ({
    id: c.id,
    label: c.countryName ?? "",
    photos: (c.photo ?? [])
      .map((p) => (p.image?.url ? `${baseUrl}${p.image.url}` : null))
      .filter(Boolean),
  })).filter((c) => c.photos.length > 0);

  const rawPaintWall = data?.paintWall;
  const paintWallHeading = rawPaintWall?.heading?.replace(/\\n/g, "\n") ?? "PAINT OUR\nPURPOSE";
  const paintWallCountries = (rawPaintWall?.country ?? []).map((c) => ({
    id: c.id,
    label: c.countryName ?? "",
    photos: (c.photo ?? [])
      .map((p) => (p.image?.url ? `${baseUrl}${p.image.url}` : null))
      .filter(Boolean),
  })).filter((c) => c.photos.length > 0);

  const photoBooth = {
    heading: photoBoothHeading,
    countries: photoBoothCountries,
  };

  const paintWall = {
    heading: paintWallHeading,
    countries: paintWallCountries,
  };

  return (
    <NewsAndEventsContent
      banner={banner}
      photoBooth={photoBooth}
      paintWall={paintWall}
    />
  );
}
