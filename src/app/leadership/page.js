import { fetchStrapi } from "@/app/dataFetch/strapi";
import LeadershipContent from "@/components/Leadership/LeadershipContent";

export const dynamic = "force-dynamic";

export default async function LeadershipPage() {
  const response = await fetchStrapi(
    "/api/leadership?populate[banner][populate]=*&populate[leadershipCard][populate]=*"
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

  const leadershipCard = (data?.leadershipCard ?? []).map((card) => ({
    id: card.id,
    name: card.name,
    designation: card.designation,
    quote: card.quote,
    profileUrl: card.profile?.url ? `${baseUrl}${card.profile.url}` : null,
  }));

  return <LeadershipContent banner={banner} leadershipCard={leadershipCard} />;
}
