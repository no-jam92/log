export const en = {
  meta: {
    siteName: 'Quiet Study',
    siteDescription: 'An editorial blog for deep, unhurried reading',
  },
  nav: {
    home: 'Home',
    about: 'About',
    searchLabel: 'Search (⌘K)',
    themeLabel: 'Toggle theme',
  },
  postList: {
    label: 'QUIET STUDY · POSTS',
    title: 'Writing',
    slogan: 'A collection of thoughts, studies, and notes',
    count: (n: number) => `${n} ${n === 1 ? 'piece' : 'pieces'} of record`,
    empty: 'No posts published yet.',
    postsSuffix: 'POSTS',
  },
  post: {
    breadcrumbRoot: 'Writing',
    writtenBy: 'WRITTEN BY',
    prev: 'Previous',
    next: 'Next',
    toc: 'In this piece',
    minRead: (n: number) => `${n} min read`,
  },
  notFound: {
    title: 'Page not found',
    message: 'Please check the address. Even we lose our way sometimes.',
    cta: 'Back to home',
  },
  about: {
    pageTitle: 'About',
    label: 'ABOUT',
    skills: 'Skills',
    contact: 'Connect',
  },
  langSwitch: 'KO',
} as const;
