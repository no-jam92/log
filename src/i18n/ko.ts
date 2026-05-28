export const ko = {
  meta: {
    siteName: '조용한 서재',
    siteDescription: '깊은 몰입을 위한 에디토리얼 블로그',
  },
  nav: {
    home: '홈',
    about: '소개',
    searchLabel: '검색 (⌘K)',
    themeLabel: '테마 전환',
  },
  postList: {
    label: 'QUIET STUDY · POSTS',
    title: '글',
    slogan: 'A collection of thoughts, studies, and notes',
    count: (n: number) => `총 ${n}편의 기록`,
    empty: '아직 작성된 글이 없습니다.',
    postsSuffix: 'POSTS',
  },
  post: {
    breadcrumbRoot: '글',
    writtenBy: 'WRITTEN BY',
    prev: '이전 글',
    next: '다음 글',
    toc: '한 글의 목차',
  },
  about: {
    pageTitle: '소개',
    label: 'ABOUT',
    skills: '기술 스택',
    contact: '연락',
  },
  langSwitch: 'EN',
} as const;
