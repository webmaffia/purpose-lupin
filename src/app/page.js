import { redirect } from "next/navigation";
import { auth } from "@/auth";
import HeroBanner from "@/components/Homepage/HomeBanner";
import CoreCommitments from "@/components/Homepage/CoreCommitments";
import Framework from "@/components/Homepage/Framework";
import Hope from "@/components/Homepage/Hope";
import Purpose from "@/components/Homepage/Purpose";
import DebugHomepageData from "@/components/Homepage/DebugHomepageData";

export const dynamic = "force-dynamic";

export default async function Home() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }


  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/homepage?populate[hero][populate]=*&populate[threeCore][populate]=*&populate[hope][populate]=*&populate[action][populate]=*&populate[framework][populate]=*`,
    {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
      },
    }
  );
  const data = await res.json();
  const homepageData = data?.data ?? null;

  return (
    <>
      <DebugHomepageData data={homepageData} />
      {/* Home */}
      <main className="wrapper">
        <HeroBanner />
        <CoreCommitments />
        <Hope />
        <Purpose />
        <Framework />
      </main>
    </>
  );
}
