/**
 * CET-6 真题模考数据
 * 每种题型独立数据集
 * 目前为示例数据，可替换为真实真题
 */

// ====== 写作题目 ======
export const writingQuestions = [
  {
    id: 1,
    year: '2024年6月',
    title: 'On the Importance of Lifelong Learning',
    directions: 'For this part, you are allowed 30 minutes to write an essay on the importance of lifelong learning. You should write at least 150 words but no more than 200 words.',
    reference: 'In today\'s rapidly changing world, lifelong learning has become more important than ever. First, with technology advancing at an unprecedented pace, skills can quickly become outdated. Continuous learning ensures we remain competitive in the job market. Second, lifelong learning enriches our personal lives by broadening our horizons and deepening our understanding of the world. Moreover, it helps us adapt to new challenges and seize emerging opportunities. In conclusion, embracing lifelong learning is not just an option but a necessity for personal and professional growth.',
  },
  {
    id: 2,
    year: '2023年12月',
    title: 'On Teamwork',
    directions: 'For this part, you are allowed 30 minutes to write an essay on the importance of teamwork. You should write at least 150 words but no more than 200 words.',
    reference: 'Teamwork plays a vital role in both academic and professional settings. First and foremost, working in a team allows members to combine their diverse skills and knowledge, leading to more innovative solutions. Additionally, teamwork fosters communication skills and mutual understanding among members. When facing difficulties, team members can support and encourage each other, making challenges easier to overcome. However, effective teamwork requires clear communication, mutual respect, and shared goals. In conclusion, teamwork is an essential skill that everyone should cultivate.',
  },
]

// ====== 阅读理解 ======
export const readingQuestions = [
  {
    id: 1,
    year: '2024年6月',
    passage: `Artificial intelligence (AI) is transforming industries and reshaping the way we live and work. From self-driving cars to personalized recommendations on streaming platforms, AI applications are becoming increasingly prevalent. However, the rapid advancement of AI also raises important ethical concerns.

One major concern is job displacement. As AI systems become more capable, many routine jobs may be automated, potentially leading to unemployment for millions of workers. A study by the World Economic Forum estimates that by 2025, AI could displace 85 million jobs while creating 97 million new ones. The key challenge is ensuring that workers have the skills needed for these new roles.

Another concern is data privacy. AI systems rely on vast amounts of data to function effectively. This raises questions about how personal data is collected, stored, and used. Without proper regulations, there is a risk that personal information could be misused.

Despite these concerns, AI also offers tremendous opportunities. In healthcare, AI can help diagnose diseases more accurately and quickly. In education, AI-powered tools can provide personalized learning experiences. The challenge is to maximize these benefits while minimizing the risks.`,
    questions: [
      {
        q: 'What is one major concern about AI mentioned in the passage?',
        options: ['A. It is too expensive', 'B. Job displacement', 'C. It is too slow', 'D. Lack of interest'],
        answer: 1,
      },
      {
        q: 'According to the World Economic Forum, how many jobs could AI create by 2025?',
        options: ['A. 85 million', 'B. 75 million', 'C. 97 million', 'D. 50 million'],
        answer: 2,
      },
      {
        q: 'What does the passage say about AI in healthcare?',
        options: [
          'A. It replaces doctors entirely',
          'B. It can help diagnose diseases more accurately',
          'C. It is not yet used in healthcare',
          'D. It increases healthcare costs',
        ],
        answer: 1,
      },
    ],
  },
  {
    id: 2,
    year: '2023年12月',
    passage: `Climate change is one of the most pressing issues of our time. Rising global temperatures are causing more frequent extreme weather events, rising sea levels, and disruptions to ecosystems worldwide. Scientists agree that human activities, particularly the burning of fossil fuels, are the primary cause of this warming trend.

The effects of climate change are already being felt across the globe. Coastal communities face increased flooding risks, farmers struggle with unpredictable weather patterns, and biodiversity is declining at an alarming rate. If current trends continue, the consequences could be catastrophic.

However, there is still hope. Many countries are transitioning to renewable energy sources such as solar and wind power. Technological innovations are making clean energy more affordable and accessible. Individual actions, such as reducing energy consumption and choosing sustainable products, can also make a difference.

Addressing climate change requires collective action on a global scale. International agreements like the Paris Agreement represent important steps forward, but much more needs to be done. The choices we make today will determine the world we leave for future generations.`,
    questions: [
      {
        q: 'What is identified as the primary cause of global warming?',
        options: [
          'A. Natural climate cycles',
          'B. Human activities, especially burning fossil fuels',
          'C. Solar radiation changes',
          'D. Volcanic eruptions',
        ],
        answer: 1,
      },
      {
        q: 'Which of the following is NOT mentioned as an effect of climate change?',
        options: [
          'A. Rising sea levels',
          'B. Extreme weather events',
          'C. Increased agricultural yields',
          'D. Biodiversity decline',
        ],
        answer: 2,
      },
      {
        q: 'What does the passage suggest about addressing climate change?',
        options: [
          'A. Only governments need to act',
          'B. It requires collective global action',
          'C. It is already too late',
          'D. Technology alone will solve it',
        ],
        answer: 1,
      },
    ],
  },
]

// ====== 听力理解 ======
export const listeningQuestions = [
  {
    id: 1,
    year: '2024年6月',
    type: 'Short Conversation',
    script: `M: I heard you're planning to study abroad next semester. Have you decided which country to go to?
W: I'm considering the UK or Australia. Both have excellent programs in my field of study.
M: That sounds exciting! Have you looked into the application requirements yet?
W: Yes, I need to take the CET-6 and prepare a personal statement. It's a lot of work but I think it will be worth it.
Q: What does the woman need to prepare for her application?`,
    options: [
      'A. A resume and cover letter',
      'B. CET-6 and a personal statement',
      'C. A recommendation letter only',
      'D. A research proposal',
    ],
    answer: 1,
  },
  {
    id: 2,
    year: '2023年12月',
    type: 'Short Conversation',
    script: `W: The library will be closed for renovation next month. How are you going to find a place to study?
M: I think I'll use the study room in my dormitory. It's usually quiet there.
W: That's a good idea. Maybe I'll join you sometime.
M: Sure, the more the merrier. Just remember to bring your student ID to get in.
Q: Where will the man study while the library is closed?`,
    options: [
      'A. At a coffee shop',
      'B. In his dormitory study room',
      'C. At home',
      'D. In a classroom',
    ],
    answer: 1,
  },
]

// ====== 选词填空 ======
export const clozeQuestions = [
  {
    id: 1,
    year: '2024年6月',
    passage: `The Internet has fundamentally changed the way we (1)______ information. In the past, people had to visit libraries or consult experts to find answers to their questions. Today, with just a few clicks, we can access vast amounts of (2)______ on almost any topic. However, this convenience comes with a (3)______: not all information online is reliable. It is important to (4)______ the credibility of sources before accepting information as fact.`,
    options: ['access', 'data', 'drawback', 'evaluate', 'share', 'create', 'advantage', 'ignore'],
    answers: ['access', 'data', 'drawback', 'evaluate'],
  },
]

// ====== 翻译题 ======
export const translationQuestions = [
  {
    id: 1,
    year: '2024年6月',
    chinese: '近年来，中国在科技创新方面取得了显著成就。高铁网络的扩展使得城市间的距离大大缩短，移动支付的普及改变了人们的消费习惯。这些进步不仅提高了人民的生活质量，也为经济发展注入了新的活力。',
    reference: 'In recent years, China has made remarkable achievements in technological innovation. The expansion of the high-speed rail network has greatly shortened the distance between cities, and the popularity of mobile payment has changed people\'s consumption habits. These advances have not only improved people\'s quality of life but also injected new vitality into economic development.',
  },
  {
    id: 2,
    year: '2023年12月',
    chinese: '中国有着悠久的历史和灿烂的文化。作为世界上最古老的文明之一，中国在哲学、文学、艺术和科学等领域都为人类做出了重要贡献。如今，越来越多的外国人对中国文化产生了浓厚的兴趣。',
    reference: 'China has a long history and a splendid culture. As one of the oldest civilizations in the world, China has made important contributions to humanity in fields such as philosophy, literature, art, and science. Today, more and more foreigners have developed a strong interest in Chinese culture.',
  },
]
