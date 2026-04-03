export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'ZZH'
export const headline = '个人介绍'
export const introduction =
  "我是郑志鸿，来自广东汕头，兴趣爱好包括足球、电影与摄影。"
export const email = 'zz9331215@gmail.com'
export const githubUsername = 'derekhut'

// about page
export const aboutMeHeadline = '浪漫的思考，具体的生活'
export const aboutParagraphs = [
  "很喜欢的一句话是，这世界上只有一种真正的英雄主义，就是当你看清生活的真相之后，依然热爱它",
]

// blog
export const blogHeadLine = "我的思考与分享"
export const blogIntro =
  "分享一些个人学习笔记与心得"

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Tiktok',
    icon: 'tiktok',
    href: 'https://www.tiktok.com/@harvard?lang=en',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/1035119139',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
