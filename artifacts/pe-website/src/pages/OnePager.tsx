import { useRoute } from "wouter";
import OnePagerLayout from "@/components/OnePagerLayout";
import NotFound from "@/pages/not-found";
import { ONE_PAGERS } from "@/content/onePagers";

export default function OnePager() {
  const [, params] = useRoute("/one-pager/:slug");
  const data = params?.slug ? ONE_PAGERS[params.slug] : undefined;
  if (!data) return <NotFound />;
  return <OnePagerLayout data={data} />;
}
