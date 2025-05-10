import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    excerpt: z.string(),
    tags: z.array(z.string()).optional(),
  })
});

export const collections = { blog }; 