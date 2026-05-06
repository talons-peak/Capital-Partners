import { useEffect } from "react";

const SITE_URL = (import.meta.env.VITE_SITE_URL ?? "https://capital-partners-sand.vercel.app").replace(/\/$/, "");
const DEFAULT_OG_IMAGE = "/brand/social/og-image.svg";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  ogImage?: string;
};

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

export function Seo({ title, description, path, noindex, ogImage }: SeoProps) {
  useEffect(() => {
    document.title = title;
    setMeta("description", description);

    const fullPath = path.startsWith("/") ? path : `/${path}`;
    const url = `${SITE_URL}${fullPath}`;
    const image = `${SITE_URL}${ogImage ?? DEFAULT_OG_IMAGE}`;

    setLink("canonical", url);

    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", url, "property");
    setMeta("og:image", image, "property");
    setMeta("og:type", path === "/" ? "website" : "article", "property");
    setMeta("og:site_name", "L&E Partners", "property");

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);

    setMeta("robots", noindex ? "noindex, nofollow" : "index, follow");
  }, [title, description, path, noindex, ogImage]);

  return null;
}
