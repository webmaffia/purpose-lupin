import { fetchStrapi } from "@/app/dataFetch/strapi";
import CatalystChroniclesContent from "@/components/CatalystChronicles/CatalystChroniclesContent";

export const dynamic = "force-dynamic";

const MOTION_DUR = 25;

export default async function CatalystChroniclesPage() {
  const response = await fetchStrapi(
    "/api/catalyst-chronicle?populate[hero][populate]=*&populate[catalyst][populate][loop][populate]=*"
  );
  const data = response?.data ?? null;
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "";

  const hero = data?.hero
    ? {
        posterUrl: data.hero.poster?.url
          ? `${baseUrl}${data.hero.poster.url}`
          : null,
        videoUrl: data.hero.video?.url
          ? `${baseUrl}${data.hero.video.url}`
          : null,
      }
    : null;

  const rawLoop = data?.catalyst?.loop ?? [];
  const loop = rawLoop.map((item, i) => ({
    id: item.id,
    image: item.profile?.url ? `${baseUrl}${item.profile.url}` : null,
    video: item.video?.url ? `${baseUrl}${item.video.url}` : null,
    dataBegin: rawLoop.length ? (i / rawLoop.length) * MOTION_DUR : 0,
  })).filter((item) => item.image && item.video);

  const catalyst = data?.catalyst
    ? {
        heading: data.catalyst.heading ?? "CATALYST CHRONICLES",
        subheading: data.catalyst.subheading ?? "Watch more",
        description: data.catalyst.description ?? "",
        loop,
      }
    : null;

  return (
    <CatalystChroniclesContent hero={hero} catalyst={catalyst} />
  );
}
