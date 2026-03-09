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
