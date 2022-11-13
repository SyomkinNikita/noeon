export type MenuNames =
  | 'research'
  | 'company'
  | 'grants'
  | 'join-our-team'
  | 'blog'
  | 'job-position'

export type MenuItem = { id: MenuNames; name: string; mobileName?: string }
