import { ko } from './ko';
import { en } from './en';

export type Lang = 'ko' | 'en';

const dict = { ko, en };

const BASE: string = import.meta.env.BASE_URL;
const BASE_NO_SLASH: string = BASE.replace(/\/$/, '');

/**
 * `import.meta.env.BASE_URL` 을 logical path 앞에 붙여 실제 href 로 만든다.
 * logical path 는 "/", "/about", "/posts/x" 처럼 base 없는 절대경로.
 */
export function withBase(path: string): string {
  if (!BASE_NO_SLASH) return path;
  if (path === '/') return BASE;
  return BASE_NO_SLASH + path;
}

/**
 * Astro.url.pathname 처럼 base prefix 가 붙은 path 에서 base 를 제거.
 */
function stripBase(pathname: string): string {
  if (!BASE_NO_SLASH) return pathname;
  if (pathname.startsWith(BASE_NO_SLASH)) {
    return pathname.slice(BASE_NO_SLASH.length) || '/';
  }
  return pathname;
}

/**
 * URL 경로에서 현재 lang 추출. /en/* 은 en, 그 외는 ko (기본).
 */
export function getLang(url: URL | string): Lang {
  const raw = typeof url === 'string' ? url : url.pathname;
  const pathname = stripBase(raw);
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
 * 반환값은 base prefix 가 포함된 실제 href.
 */
export function toLocalizedPath(pathname: string, targetLang: Lang): string {
  const clean = stripBase(pathname);
  const noLang = clean.replace(/^\/en(?=\/|$)/, '');
  const logical = noLang || '/';
  const localized =
    targetLang === 'ko'
      ? logical
      : logical === '/'
        ? '/en/'
        : `/en${logical}`;
  return withBase(localized);
}

/**
 * 글 entry 의 URL 빌드. lang prefix + base prefix 자동 처리.
 */
export function postHref(id: string, lang: Lang): string {
  const slug = id.replace(/^(ko|en)\//, '');
  const path = lang === 'ko' ? `/posts/${slug}` : `/en/posts/${slug}`;
  return withBase(path);
}
