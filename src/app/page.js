import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { auth } from "@/auth";
import HeroBanner from "@/components/Homepage/HomeBanner";
import CoreCommitments from "@/components/Homepage/CoreCommitments";
import Framework from "@/components/Homepage/Framework";
import Hope from "@/components/Homepage/Hope";
import Purpose from "@/components/Homepage/Purpose";

export default async function Home() {
  const session = await auth();
  const headersList = await headers();
  const host = headersList.get("host") ?? "";
  const isLocalhost = host.startsWith("localhost") || host.startsWith("127.0.0.1");
  if (!session && !isLocalhost) {
    redirect("/login");
  }
  return (
    <>
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
