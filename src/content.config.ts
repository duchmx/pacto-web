import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      location: z.string(),
      type: z.string(),
      units: z.string(),
      year: z.string(),
      status: z.string(),
      cover: image(),
      amenities: z.array(z.string()).optional(),
    }),
});

export const collections = {
  projects: projectsCollection,
};
