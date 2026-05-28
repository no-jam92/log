import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['ko', 'en']),
    /** 짝이 되는 다른 lang 글의 entry id (예: 'ko/2025-react') */
    translationOf: z.string().optional(),
    category: z.enum(['개발', '에세이', '독서', '메모', '발표']),
    tags: z.array(z.string()).default([]),
    /** 목록 페이지에 2줄 발췌로 노출 */
    excerpt: z.string(),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
