import { fetchStrapi } from "@/app/dataFetch/strapi";
import PurposeHighlightsContent from "@/components/PurposeHighlights/PurposeHighlightsContent";

export const dynamic = "force-dynamic";

export default async function PurposeHighlightsPage() {
  const response = await fetchStrapi(
    "/api/highlight?populate[banner][populate]=*&populate[year][populate][month][populate][video][populate]=*"
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

  const rawYears = data?.year ?? [];
  const years = rawYears.map((y) => y.year).filter(Boolean);
  const yearMonths = {};
  rawYears.forEach((y) => {
    const months = (y.month ?? [])
      .map((m) => {
        const videoUrl = m.video?.video?.url ? `${baseUrl}${m.video.video.url}` : null;
        const posterUrl = m.video?.image?.url ? `${baseUrl}${m.video.image.url}` : null;
        if (!videoUrl) return null;
        return {
          month: m.month,
          videoUrl,
          posterUrl: posterUrl || videoUrl,
        };
      })
      .filter(Boolean);
    if (months.length) yearMonths[y.year] = months;
  });

  return (
    <PurposeHighlightsContent
      banner={banner}
      years={years}
      yearMonths={yearMonths}
    />
  );
}
