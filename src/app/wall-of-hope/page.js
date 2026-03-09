import { fetchStrapi } from "@/app/dataFetch/strapi";
import WallOfHopeContent from "@/components/WallOfHope/WallOfHopeContent";

export const dynamic = "force-dynamic";

const POSITION_CLASSES = [
  "hopes__mosaic-item--bottom-left",
  "hopes__mosaic-item--top-left",
  "hopes__mosaic-item--bottom-right",
];
const BG_CLASSES = Array.from({ length: 12 }, (_, i) => `hopes__mosaic-item--bg-${i + 1}`);

export default async function WallOfHopePage() {
  const response = await fetchStrapi(
    "/api/wall-of-hope?populate[banner][populate]=*&populate[wallOfHope][populate][wallOfHopeCard][populate]=*"
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

  const rawCards = data?.wallOfHope?.wallOfHopeCard ?? [];
  const wallOfHopeCards = rawCards.map((card, i) => ({
    id: card.id,
    name: card.name,
    designation: card.designation,
    country: card.country,
    quote: card.quote?.trim() ?? "",
    profileUrl: card.profile?.url ? `${baseUrl}${card.profile.url}` : null,
    smallProfileUrl: card.smallProfile?.url ? `${baseUrl}${card.smallProfile.url}` : null,
    positionClass: POSITION_CLASSES[i % POSITION_CLASSES.length],
    bgClass: BG_CLASSES[i % BG_CLASSES.length],
  }));

  const wallOfHope = data?.wallOfHope
    ? {
        heading: data.wallOfHope.heading ?? "Wall Of Hope",
        wallOfHopeCard: wallOfHopeCards,
      }
    : null;

  return (
    <WallOfHopeContent banner={banner} wallOfHope={wallOfHope} />
  );
}
