import { file } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const collection = defineCollection({
  loader: file('src/content/file.json'),
  schema: z.object({
    title: z.string(),
    features: z.array(z.string()),
    price: z.number(),
  }),
});

export const collections = {
  collection,
};
