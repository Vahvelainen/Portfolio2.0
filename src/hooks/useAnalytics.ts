import { useEffect } from "react";
import { useLocation } from "react-router";
import { loadAnalytics, trackPageView } from "@/platform/analytics";

const MEASUREMENT_ID = import.meta.env.VITE_GA_ID;

export function useAnalytics() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!import.meta.env.PROD || !MEASUREMENT_ID) return;
    loadAnalytics(MEASUREMENT_ID);
    trackPageView(pathname);
  }, [pathname]);
}
