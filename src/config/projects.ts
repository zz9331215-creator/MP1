// 类型定义
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// 奖项荣誉
export const awardsHeadLine = "奖项 & 荣誉"
export const awardsIntro = "学业与专业成果获得的认可"

export const awards: Array<ActivityItemType> = [
  {
    name: '机器人大赛三等奖',
    description: '',
    date: '2025',
    location: '深圳',
  },
  {
    name: '世界人形大赛最佳人气奖',
    description: '',
    date: '2025',
    location: '北京',
  },
]

// 研究与项目
export const projectHeadLine = "研究与项目"
export const projectIntro = "我参与过的学术研究与技术项目"

export const projects: Array<ProjectItemType> = [
  {
    name: '学生期末项目作品集',
    description: '静态网站作品集',
    link: { href: 'scls-cs.com', label: 'GitHub 卡片' },
    tags: ['网站', 'Next.js', 'TailwindCSS', 'DaisyUI', '作品集']
  },
  {
    name: '基因序列探索',
    description: '2022 SCLS 黑客松',
    link: { href: 'https://scls-cs.gitbook.io/scls-apcs-lab/lab5-dna', label: '黑客松' },
    tags: ['黑客松', 'Java']
  },
  {
    name: '德州扑克裁判系统',
    description: '2024 SCLS 黑客松',
    link: { href: 'https://onecompiler.com/challenges/42yf4n5yn/scls-hackathon', label: '黑客松' },
    tags: ['黑客松']
  },
  {
    name: 'AI Camp 课程开发',
    description: '为高中生开发完整的人工智能课程，包含真实项目与创业理念',
    link: { href: 'https://scls-cs.gitbook.io/ai-camp', label: '查看课程' },
    tags: ['教育', '人工智能']
  },
]

// 爱好与志愿活动
export const activitiesHeadLine = "爱好与志愿活动"
export const activitiesIntro = "个人兴趣与社区贡献"

export const activities: Array<ActivityItemType> = [
  {
    name: 'Python 工作坊',
    description: '为初学者讲解 Python 基础编程知识，包括变量、流程控制与函数',
    date: '2024-02-24',
    location: '上海',
    link: 'https://example.com/python-workshop',
  },
  {
    name: '人工智能伦理讨论',
    description: '小组讨论 AI 发展的伦理问题及其对社会的影响',
    date: '2024-03-01',
    location: '上海',
    link: 'https://example.com/ai-ethics',
  },
  {
    name: '代码评审分享会',
    description: '通过同伴代码评审与最佳实践分享，帮助学生提升编程能力',
    date: '2024-03-15',
    location: '上海',
  },
]
