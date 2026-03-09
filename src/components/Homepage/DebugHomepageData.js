"use client";

import { useEffect } from "react";

export default function DebugHomepageData({ data }) {
  useEffect(() => {
    console.log("homepageData:", data);
  }, [data]);
  return null;
}
