import { getCollection } from 'astro:content';
import type { Lang } from '../i18n/utils';

/**
 * lang 필터링 + draft 제외 + 날짜 내림차순 정렬된 글 목록.
 */
export async function getSortedPosts(lang: Lang) {
  const posts = await getCollection('posts', ({ data }) => data.lang === lang && !data.draft);
  posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  return posts;
}
