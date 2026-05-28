import { ko } from './ko';
import { en } from './en';

export type Lang = 'ko' | 'en';

const dict = { ko, en };

/**
 * URL 경로에서 현재 lang 추출. /en/* 은 en, 그 외는 ko (기본).
 */
export function getLang(url: URL | string): Lang {
  const pathname = typeof url === 'string' ? url : url.pathname;
  return pathname.startsWith('/en') ? 'en' : 'ko';
}

/**
 * 현재 lang 의 UI 문자열 사전 반환.
 */
export function t(lang: Lang): typeof ko {
  return dict[lang];
}

/**
 * 현재 경로를 다른 lang 의 동일 경로로 변환. 페이지 미러 가정.
 */
export function toLocalizedPath(pathname: string, targetLang: Lang): string {
  const cleaned = pathname.replace(/^\/en(?=\/|$)/, '');
  const base = cleaned || '/';
  if (targetLang === 'ko') return base;
  return base === '/' ? '/en/' : `/en${base}`;
}

/**
 * 글 entry 의 URL 빌드. lang prefix 자동 처리.
 */
export function postHref(id: string, lang: Lang): string {
  const slug = id.replace(/^(ko|en)\//, '');
  return lang === 'ko' ? `/posts/${slug}` : `/en/posts/${slug}`;
}
