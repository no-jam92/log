import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/utils';

/**
 * lang 필터링 + draft 제외 + 날짜 내림차순 정렬된 글 목록.
 */
export async function getSortedPosts(lang: Lang) {
  const posts = await getCollection('posts', ({ data }) => data.lang === lang && !data.draft);
  posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  return posts;
}

/**
 * MDX body 로부터 읽기 시간(분) 추정.
 * - ko: 500자/분 기준
 * - en: 250단어/분 기준
 * 최소 1분.
 */
export function getReadingMinutes(post: CollectionEntry<'posts'>): number {
  const body = post.body ?? '';
  if (post.data.lang === 'ko') {
    return Math.max(1, Math.ceil(body.length / 500));
  }
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 250));
}
