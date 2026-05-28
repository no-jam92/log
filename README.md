# 조용한 서재

깊은 몰입을 위한 한국어 에디토리얼 블로그. 소셜 미디어의 고속 미학을 거부하고 장문의 글이 천천히 읽히는 환경을 목표로 한다.

## Tech Stack

- **Astro 6.3.8** (static output) + **@astrojs/mdx** — 콘텐츠 컬렉션 기반 MDX 라우팅
- **TypeScript** strict, **pnpm** (Node 24, `.nvmrc`)
- **CSS Modules + CSS Variables** — 유틸리티 프레임워크 미사용. 모든 색·간격·타이포 값은 `src/styles/tokens.css` 단일 소스
- **light-dark()** CSS 함수 — 단일 `:root` 에서 양 테마 표현, `[data-theme]` 속성으로 사용자 토글
- **Pagefind** — postbuild 정적 검색 인덱스, ⌘K 모달
- **@astrojs/rss**, **@astrojs/sitemap**

## 시작하기

```sh
nvm use                # .nvmrc 기준 Node 24
pnpm install
pnpm dev               # http://localhost:4321
```

## 명령

| Command | Action |
| --- | --- |
| `pnpm dev` | 로컬 dev 서버 |
| `pnpm build` | 정적 빌드 + Pagefind 인덱스 생성 |
| `pnpm preview` | 빌드 결과 미리보기 (검색은 이 모드에서만 동작) |
| `pnpm astro check` | 타입·컬렉션 스키마 검사 |

## 프로젝트 구조

```
src/
  config/site.ts             단일 author + 브랜딩 단일 소스
  content.config.ts          posts 컬렉션 zod 스키마
  content/posts/{ko,en}/     글 (MDX)
  i18n/{ko,en,utils}.ts      UI 문자열 사전 + t()/getLang() 헬퍼
  lib/posts.ts               getSortedPosts / getReadingMinutes
  styles/
    tokens.css               디자인 토큰 (light-dark)
    global.css               reset + 0px sharp + 폰트
    prose.css                MDX 본문 타이포 리듬
  layouts/
    BaseLayout.astro         HTML 셸 + OG/canonical/hreflang/RSS link + 폰트 + 헤더/푸터/검색
    ProseLayout.astro        .prose 래퍼
  components/                15개 컴포넌트 (각각 .astro + .module.css)
  pages/
    index.astro              ko 글 목록 (= /)
    about.astro              ko 소개 (= /about)
    posts/[...slug].astro    ko 글 상세
    rss.xml.ts               ko RSS
    404.astro                ko 404
    en/                      영문 미러 라우트
Design/                      DESIGN.md + 12 화면 시안 (시각 레퍼런스)
```

## 디자인 시스템

- 출처: `Design/DESIGN.md` frontmatter (M3 스타일 토큰 + 타이포 + 간격)
- 다크 값: `Design/_5/code.html` 의 Tailwind override 11개 + 합리적 보강 (`tokens.css`)
- 모서리: **0px sharp** (`global.css` 의 `*` 셀렉터로 안전망)
- 본문 컬럼: 760px / 글 본문: 680px / 사이드 레일: viewport ≥ 1100px
- 그림자 금지. 깊이는 1px 헤어라인 + 미세 배경 차이로만 표현. 호버는 `translateY(-2px)`
- 포커스 링: 1.5px primary, 6px offset
- 폰트: Pretendard (본문) / Newsreader italic (영문 슬로건) / JetBrains Mono (메타·코드) — Google Fonts CDN

## 콘텐츠 추가

```mdx
---
title: 새 글 제목
date: 2026-05-30
lang: ko
category: 개발          # 개발 | 에세이 | 독서 | 메모 | 발표
tags: [태그1, 태그2]
excerpt: 목록에 2줄로 노출되는 발췌
# translationOf: en/2026-04-...   # 짝 글이 있다면
# draft: true                      # 빌드 제외
---

본문 MDX. h2/blockquote/code/img 모두 `prose.css` 가 자동 스타일링.
```

파일 경로:
- 한국어 글: `src/content/posts/ko/<slug>.mdx`
- 영문 글: `src/content/posts/en/<slug>.mdx`

URL: ko 는 `/posts/<slug>`, en 은 `/en/posts/<slug>`. slug 는 파일명에서 확장자 제거.

## i18n

| Lang | URL prefix | 라우트 파일 |
| --- | --- | --- |
| ko (default) | 없음 (`/`) | `src/pages/*` |
| en | `/en/*` | `src/pages/en/*` |

- UI 문자열은 `src/i18n/{ko,en}.ts` 사전에서 관리
- 컴포넌트는 `getLang(Astro.url) + t(lang)` 패턴 (prop drilling 없음)
- 언어 스위처는 헤더 우상단. 현재 경로의 다른 lang 버전으로 이동

## 검색

⌘K (Mac) / Ctrl+K — 글로벌 단축키 또는 헤더 ⌘K 버튼.

검색 인덱스는 `pnpm build` 시 Pagefind 가 `dist/pagefind/` 에 생성하므로 **`pnpm preview`** 에서만 동작한다. dev 모드에서는 fallback 메시지가 노출된다.

## 결정 사항 요약

1. 단일 저자 (`src/config/site.ts` 의 `author`)
2. `/` = 글 목록 (별도 `/posts` 라우트 없음), `/about` 분리
3. 페이지네이션: "더 불러오기" 방식 (현재는 글 수가 적어 미구현)
4. 연도 그룹: 최근 연도만 펼침, `<details>` 기반
5. 다크 모드: `prefers-color-scheme` + 사용자 토글 (`localStorage`)
6. 뉴스레터 / 댓글: 제외
7. i18n: ko/en 이중어, 글 단위 번역 optional (`translationOf` 필드)

전체 배경 지식과 페이즈별 진행은 `~/.claude/plans/design-whimsical-moler.md` 에 정리.

## 참조 경로

- 디자인 시안 (시각 비교용): `Design/_1` ~ `_12` (각 폴더에 `code.html` + `screen.png`)
- 디자인 시스템 명세: `Design/DESIGN.md`
- 빌드 출력: `dist/`
