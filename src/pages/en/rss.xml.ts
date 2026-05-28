import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getSortedPosts } from '../../lib/posts';
import { en } from '../../i18n/en';
import { postHref } from '../../i18n/utils';

export async function GET(context: APIContext) {
  const posts = await getSortedPosts('en');
  return rss({
    title: en.meta.siteName,
    description: en.meta.siteDescription,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.excerpt,
      link: postHref(post.id, 'en'),
      categories: [post.data.category, ...post.data.tags],
    })),
    customData: `<language>en</language>`,
  });
}
