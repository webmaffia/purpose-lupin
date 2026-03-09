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

  const data = await fetchStrapi("/api/homepage?populate[hero][populate]=*&populate[threeCore][populate]=*&populate[hope][populate]=*&populate[action][populate]=*&populate[framework][populate]=*")

  console.log(data);
  return (
    <>
 

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
