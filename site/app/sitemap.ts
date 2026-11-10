import type { MetadataRoute } from "next";
import { canonical } from "@/lib/seo";
import { posts } from "@/lib/posts";

type Entry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const routes: Entry[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/programmes", priority: 0.9, changeFrequency: "monthly" },
  { path: "/founder", priority: 0.7, changeFrequency: "monthly" },
  { path: "/impact", priority: 0.8, changeFrequency: "weekly" },
  { path: "/ecosystem", priority: 0.7, changeFrequency: "monthly" },
  { path: "/get-involved", priority: 0.9, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cookies", priority: 0.3, changeFrequency: "yearly" },
  { path: "/accessibility", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries = routes.flatMap((route) => {
    const en = canonical(route.path);
    const fr = canonical(`/fr${route.path === "/" ? "" : route.path}`);
    return [
      {
        url: en,
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: { languages: { en, fr } },
      },
      {
        url: fr,
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: { languages: { en, fr } },
      },
    ];
  });

  const blogEntries = posts.flatMap((post) => {
    const en = canonical(`/blog/${post.slug}`);
    const fr = canonical(`/fr/blog/${post.slug}`);
    return [
      {
        url: en,
        lastModified: new Date(post.updated ?? post.date),
        changeFrequency: "monthly" as const,
        priority: 0.6,
        alternates: { languages: { en, fr } },
      },
      {
        url: fr,
        lastModified: new Date(post.updated ?? post.date),
        changeFrequency: "monthly" as const,
        priority: 0.6,
        alternates: { languages: { en, fr } },
      },
    ];
  });

  return [...entries, ...blogEntries];
}
