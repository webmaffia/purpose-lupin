import { redirect } from "next/navigation";
import { auth } from "@/auth";
import HeroBanner from "@/components/Homepage/HomeBanner";
import CoreCommitments from "@/components/Homepage/CoreCommitments";
import Framework from "@/components/Homepage/Framework";
import Hope from "@/components/Homepage/Hope";
import Purpose from "@/components/Homepage/Purpose";
import { fetchStrapi } from "@/app/dataFetch/strapi";


export const dynamic = "force-dynamic";

export default async function Home() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  const response = await fetchStrapi("/api/homepage?populate[hero][populate]=*&populate[threeCore][populate][threeCoreCard][populate]=*&populate[hope][populate]=*&populate[action][populate][actionCard][populate]=*&populate[framework][populate][frameworkCard][populate]=*");
  const homepage = response?.data ?? null;
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "";

  const hero = homepage?.hero
    ? {
        posterUrl: homepage.hero.poster?.url ? `${baseUrl}${homepage.hero.poster.url}` : null,
        videoUrl: homepage.hero.video?.url ? `${baseUrl}${homepage.hero.video.url}` : null,
      }
    : null;

  const hope = homepage?.hope
    ? {
        ...homepage.hope,
        imageUrl: homepage.hope.image?.url ? `${baseUrl}${homepage.hope.image.url}` : null,
      }
    : null;

  const framework = homepage?.framework
    ? {
        ...homepage.framework,
        backgroundUrl: homepage.framework.background?.url ? `${baseUrl}${homepage.framework.background.url}` : null,
      }
    : null;

  const threeCore = homepage?.threeCore
    ? {
        ...homepage.threeCore,
        threeCoreCard: (homepage.threeCore.threeCoreCard ?? []).map((card) => ({
          ...card,
          iconUrl: card.icon?.url ? `${baseUrl}${card.icon.url}` : null,
          imageUrl: card.image?.url ? `${baseUrl}${card.image.url}` : null,
        })),
      }
    : null;

  const action = homepage?.action
    ? {
        ...homepage.action,
        actionCard: (homepage.action.actionCard ?? []).map((card) => ({
          ...card,
          iconUrl: card.icon?.url ? `${baseUrl}${card.icon.url}` : null,
        })),
      }
    : null;

  return (
    <>
      <main className="wrapper">
        <HeroBanner hero={hero} />
        <CoreCommitments threeCore={threeCore} />
        <Hope hope={hope} />
        <Purpose action={action} />
        <Framework framework={framework} />
      </main>
    </>
  );
}
