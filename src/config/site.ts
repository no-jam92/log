/**
 * 단일 진실 공급원: 사이트 브랜딩 + 저자 정보.
 * 사용자가 실제 운영 시 이 파일만 수정하면 헤더/푸터/about/메타가 일괄 갱신된다.
 */

export type SocialLink = {
  label: string;
  href: string;
};

export const site = {
  name: '조용한 서재',
  /** 헤더 좌측 로고 마크 (현재는 텍스트 2글자) */
  logoMark: 'ID',
  description: '깊은 몰입을 위한 에디토리얼 블로그',
  /** sitemap / rss / og 에 사용 */
  url: 'https://no-jam-log.example.com',
  /** 단일 저자 (다중 저자가 필요해지면 스키마 확장) */
  author: {
    name: '조용한 서재',
    slogan: 'Crafting quiet, resilient digital experiences',
    bio: '복잡함을 덜어내고 본질에 집중하는 디지털 경험을 만듭니다. 천천히 읽히는 글을 좋아하고, 매일 조금씩 기록합니다.',
    skills: [
      'TypeScript',
      'React',
      'Astro',
      'CSS',
      'Typography',
      'Design Systems',
    ],
    social: [
      { label: 'GitHub', href: 'https://github.com/example' },
      { label: 'RSS', href: '/rss.xml' },
    ] satisfies SocialLink[],
  },
  /** 푸터 빌드 표시 (CI에서 git sha 주입 가능) */
  build: 'dev',
} as const;

export type Site = typeof site;
