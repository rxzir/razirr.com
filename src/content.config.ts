import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    role: z.string(),
    year: z.number(),
    summary: z.string(),
    outcome: z.object({
      label: z.string(),
      value: z.string(),
    }),
    order: z.number(),
  }),
});

export const collections = { work };
