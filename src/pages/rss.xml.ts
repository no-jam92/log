import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getSortedPosts } from '../lib/posts';
import { site } from '../config/site';
import { ko } from '../i18n/ko';
import { postHref } from '../i18n/utils';

export async function GET(context: APIContext) {
  const posts = await getSortedPosts('ko');
  return rss({
    title: ko.meta.siteName,
    description: ko.meta.siteDescription,
    site: new URL(import.meta.env.BASE_URL, context.site!).href,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.excerpt,
      link: postHref(post.id, 'ko'),
      categories: [post.data.category, ...post.data.tags],
    })),
    customData: `<language>ko</language>`,
  });
}
