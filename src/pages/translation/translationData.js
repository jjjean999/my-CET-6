/**
 * CET-6 翻译练习数据（2020-2025年真题）
 * 每道题包含：中文原文、参考答案、提示、主题分类
 */
const translationData = [
  // ====== 中国文化 ======
  {
    category: '中国文化',
    id: 1,
    chinese: '中国的传统婚礼习俗历史悠久，从周朝开始就逐渐形成了一套完整的婚礼仪式，有些一直沿用至今。如今的中式婚礼习俗已有很大变化，但婚礼庆典仍然十分隆重。婚礼场地经过精心装饰，以象征喜庆的红色为主色调，摆放着许多祝愿新人幸福的物件。在婚礼上，新人要拜天地、拜父母和相互对拜，然后设宴招待宾客，并向宾客敬酒致谢。今天，许多年轻人依然钟情于传统的中式婚礼，体验独特而美好的中国式浪漫。',
    reference: 'The traditional Chinese wedding customs have a long history, gradually forming a complete set of wedding ceremonies since the Zhou Dynasty, some of which are still in use today. Although modern Chinese wedding customs have undergone significant changes, the wedding celebrations remain very grand. The wedding venue is meticulously decorated, predominantly in red, which symbolizes jubilance, and is adorned with many objects wishing the new couple happiness. At the wedding, the couple bows to Heaven and Earth, bows to their parents, and bows to each other. Afterwards, they host a banquet to entertain guests and toast to thank them. Today, many young people still favor traditional Chinese weddings, experiencing the unique and beautiful Chinese-style romance.',
    hint: '2024/06 · wedding ceremony 婚礼仪式 · jubilance 喜庆',
  },
  {
    category: '中国文化',
    id: 2,
    chinese: '中国盛产竹子，是最早开发利用竹资源的国家。竹子在中国分布广泛，品种丰富。竹子实用性强，用于生产和生活的许多方面，如筷子、桌椅的制作和桥梁、房屋的建造。中国人爱竹，自古以来就有无数文人以竹为主题，创作了绚丽多彩的文学和绘画作品。竹子主干笔直，象征正直的品格。竹子具有强大的生命力和适应能力，无论环境多么恶劣，都能够顽强生存，因而寓意坚韧不拔的精神。几千年来，竹子一直被视为中华民族品格的象征。',
    reference: 'China is abundant in bamboo and was the earliest country to develop and utilize bamboo resources. Bamboo is widely distributed across China and boasts a rich variety of species. It is highly practical and is used in many aspects of production and daily life, such as making chopsticks, tables, and chairs, as well as in the construction of bridges and houses. Chinese people have a deep affection for bamboo, and since ancient times, countless scholars have created colorful literary and artistic works on the theme of bamboo. The straight stem of bamboo symbolizes integrity. Bamboo possesses strong vitality and adaptability, surviving tenaciously in harsh environments, thus representing the spirit of perseverance. For thousands of years, bamboo has been regarded as a symbol of the character of the Chinese nation.',
    hint: '2024/06 · abundant 丰富的 · vitality 生命力 · perseverance 坚忍不拔',
  },
  {
    category: '中国文化',
    id: 3,
    chinese: '扇子自古以来就深受中国人喜爱，但现在已不只是消暑纳凉的工具，而更多地作为艺术品供人欣赏。许多扇子造型优美、做工精良，并绘有山水、花鸟、人物等精美图案，具有很高的艺术价值。中国许多著名画家和书法家喜欢在扇子上作诗绘画，展示其艺术品味。扇子常作为礼物赠予他人，表达美好的祝福和真挚的情感。如今，扇子的实用功能已大为减弱，但作为一种文化符号和艺术形式，扇子仍然在中国传统文化中扮演着重要角色。',
    reference: 'Fans have been cherished by Chinese people since ancient times. Nowadays, they are not just tools for cooling off from the summer heat but are more often appreciated as artworks. Many fans are elegantly designed, meticulously crafted, and adorned with exquisite patterns such as landscapes, flowers, birds, and figures, possessing high artistic value. Many renowned Chinese painters and calligraphers enjoy composing poems and paintings on fans to showcase their artistic taste. Fans are often given as gifts to convey good wishes and sincere emotions. Today, although their practical function has greatly diminished, fans still play an important role as cultural symbols and art forms in traditional Chinese culture.',
    hint: '2024/06 · cherished 深受喜爱 · calligrapher 书法家 · exquisite 精美的',
  },
  {
    category: '中国文化',
    id: 4,
    chinese: '《西游记》也许是中国文学四大经典小说中最具影响力的一部，当然也是在国外最广为人知的一部小说。这部小说描绘了著名僧侣玄奘在三个随从的陪同下穿越中国西部地区前往印度取经的艰难历程。虽然故事的主题基于佛教，但这部小说采用了大量中国民间故事和神话的素材，创造了各种栩栩如生的人物和动物形象。其中最著名的是孙悟空，他与各种各样妖魔作斗争的故事几乎为每个中国孩子所熟知。',
    reference: 'Journey to the West is perhaps the most influential novel among the four great classical novels of Chinese literature, and it is certainly the most well-known abroad. The novel depicts the arduous journey of the famous monk Xuanzang, who, accompanied by his three followers, travels across the western regions of China to India to obtain Buddhist scriptures. Although the story\'s theme is rooted in Buddhism, the novel uses a large number of elements from Chinese folklore and mythology, creating various vividly portrayed characters and animal figures. Among them, the most famous is Sun Wukong, whose battles against various demons are familiar to almost every Chinese child.',
    hint: '2020/09 · influential 有影响力的 · Buddhist scripture 佛经 · folklore 民间故事',
  },
  {
    category: '中国文化',
    id: 5,
    chinese: '《红楼梦》是18世纪曹雪芹创作的一部小说。曹雪芹基于自己痛苦的个人经历，讲述了贾宝玉和林黛玉之间的悲剧性爱情故事。书中有大约30个主要人物和400多个次要人物，每个人物都刻画得栩栩如生，具有鲜明的个性。小说详尽地描述了四个贵族世家兴衰的历程，反映了封建社会隐藏的种种危机和错综复杂的社会冲突。《红楼梦》融合了现实主义和浪漫主义，具有很强的艺术感染力。它被普遍认为是中国最伟大的小说，也是世界上最伟大的文学创作之一。',
    reference: 'Dream of the Red Chamber, written by Cao Xueqin in the 18th century, is a novel based on his own painful personal experiences. It narrates the tragic love story between Jia Baoyu and Lin Daiyu. There are approximately 30 main characters and over 400 secondary characters in this book, each vividly portrayed with distinctive personalities. The novel depicts in detail the rise and fall of four noble families, reflecting the numerous hidden crises and complex social conflicts of feudal society. Dream of the Red Chamber combines realism and romanticism, exhibiting a strong artistic appeal. It is widely regarded as the greatest novel in China and one of the greatest literary works in the world.',
    hint: '2020/09 · tragic 悲剧的 · feudal 封建的 · realism/romanticism 现实主义/浪漫主义',
  },
  {
    category: '中国文化',
    id: 6,
    chinese: '《水浒传》是中国文学四大经典小说之一。这部小说基于历史人物宋江及其伙伴反抗封建帝王的故事，数百年来一直深受中国读者的喜爱。毫不夸张地说，几乎每个中国人都熟悉小说中的一些主要人物。这部小说中的精彩故事在茶馆、戏剧舞台、广播电视、电影屏幕和无数家庭中反复讲述。事实上，这部小说的影响已经远远超出了国界。越来越多的外国读者也感到这部小说里的故事生动感人、趣味盎然。',
    reference: 'Water Margin is one of the four great classical novels of Chinese literature. This novel is based on the historical figure Song Jiang and his companions who rebelled against the feudal monarch. It has been beloved by Chinese readers for centuries. It is no exaggeration to say that almost every Chinese is familiar with some of the main characters in the novel. The fascinating stories in this book have been repeatedly told in teahouses, on drama stages, over radio and television broadcasts, on movie screens, and in countless households. In fact, the influence of this novel has far exceeded national boundaries. An increasing number of foreign readers also find the stories in this novel vivid, moving, and full of interest.',
    hint: '2020/09 · rebel 反抗 · exaggeration 夸张 · boundary 国界',
  },
  {
    category: '中国文化',
    id: 7,
    chinese: '《三国演义》是中国一部著名的历史小说，写于十四世纪。这部文学作品以三国时期的历史为背景，描写了从公元二世纪下半叶到公元三世纪下半叶的魏、蜀、吴三国之间的战争。小说中刻画了近千个人物和无数的历史事件。这些人物和事件虽然大都基于真实的历史，但都不同程度地被浪漫化和戏剧化了。《三国演义》是一部公认的文学杰作。自面世以来，这部小说不断吸引着一代又一代的读者，并且对中国文化产生了广泛而持久的影响。',
    reference: 'The Romance of the Three Kingdoms is a famous historical novel in China, written in the 14th century. This literary work is set against the backdrop of the Three Kingdoms period, depicting the wars among the Wei, Shu, and Wu kingdoms from the latter half of the second century to the latter half of the third century AD. The novel portrays nearly a thousand characters and countless historical events. Although these characters and events are largely based on actual history, they have been variously romanticized and dramatized. The Romance of the Three Kingdoms is recognized as a literary masterpiece. Since its publication, this novel has continuously attracted generation after generation of readers and has had a profound and lasting impact on Chinese culture.',
    hint: '2020/07 · backdrop 背景 · romanticized 浪漫化 · masterpiece 杰作',
  },

  // ====== 科技发展 ======
  {
    category: '科技发展',
    id: 8,
    chinese: '天宫空间站是中国首个太空实验室，拥有110多立方米使用空间，可驻留3名航天员，在距地球表面400-450公里的轨道上运行。天宫空间站已实施180多个科学研究与应用项目，涉及空间生命科学、太空医学、空间材料科学等领域。天宫空间站的研究成果在我国得到了广泛应用，产生了显著的经济效益。例如，太空育种创造的直接经济效益高达数千亿元。这不仅标志中国在航天技术上取得了巨大进步，也表明中国为全球的太空研究和应用做出了重大贡献。',
    reference: 'The Tiangong Space Station is China\'s first space laboratory, offering over 110 cubic meters of usable space and capable of accommodating three astronauts. It orbits at an altitude of 400 to 450 kilometers above the Earth\'s surface. More than 180 scientific research and application projects have been carried out on the Tiangong Space Station, covering fields such as space life science, space medicine, and space materials science. Its research findings have been widely applied in China and have generated remarkable economic benefits. For example, space breeding has brought direct economic benefits totaling hundreds of billions of yuan. This not only marks China\'s significant progress in aerospace technology but also demonstrates its substantial contribution to global space research and applications.',
    hint: '2025/06 · space laboratory 太空实验室 · orbit 轨道运行 · aerospace 航天',
  },
  {
    category: '科技发展',
    id: 9,
    chinese: '北斗卫星导航系统的成功研制是中国自改革开放以来取得的一项重大科技成就。研发人员经过不懈努力，攻克了一系列技术难题，北斗系统最终实现了全球覆盖和高精度定位，使中国成为世界上少数几个独立拥有全球卫星导航系统的国家之一。北斗系统已广泛应用于交通运输、灾害救援、天气预报、公共安全等诸多领域。北斗系统现在已经在国际上得到广泛认可，开始为越来越多的国家和地区提供优质服务。',
    reference: 'The successful development of the Beidou Satellite Navigation System is a major scientific and technological achievement China has made since the reform and opening-up. Through relentless efforts, researchers overcame a series of technical challenges, ultimately enabling the Beidou system to achieve global coverage and high-precision positioning, making China one of the few countries in the world to independently possess a global satellite navigation system. The Beidou system has been widely applied in various fields, including transportation, disaster relief, weather forecasting, and public security. It has now gained widespread international recognition and has begun providing high-quality services to an increasing number of countries and regions.',
    hint: '2024/12 · navigation 导航 · relentless 不懈的 · disaster relief 灾害救援',
  },
  {
    category: '科技发展',
    id: 10,
    chinese: '遨游太空历来是中华民族的梦想。2003年，神舟五号飞船发射成功，杨利伟成为第一个飞入太空的中国宇航员。2008年，神舟七号升空，翟志刚成为中国历史上首位进行太空行走的宇航员。近年来，中国航天进入创新发展"快车道"，太空基础设施建设稳步推进，中国空间站于2022年全面建成。中国航天事业的迅速发展在中华民族的历史上写下了辉煌一页，也为人类文明进步做出了巨大贡献。未来，中国探索太空的脚步将迈得更稳、更远。',
    reference: 'Voyaging into space has always been a dream of the Chinese nation. In 2003, the successful launch of the Shenzhou 5 spacecraft made Yang Liwei the first Chinese astronaut to fly into space. In 2008, Shenzhou 7 was launched, and Zhai Zhigang became the first astronaut in Chinese history to conduct a spacewalk. In recent years, China\'s aerospace industry has entered a "fast lane" of innovation and development, with the construction of space infrastructure progressing steadily. In 2022, the China Space Station was fully completed. The rapid development of China\'s aerospace industry has written a glorious chapter in the history of the Chinese nation and made significant contributions to the advancement of human civilization. China\'s steps in space exploration will be steadier and farther-reaching.',
    hint: '2024/12 · voyage 遨游 · spacewalk 太空行走 · fast lane 快车道',
  },
  {
    category: '科技发展',
    id: 11,
    chinese: '北京大兴国际机场位于天安门广场以南46公里处，于2019年9月30日投入使用。该巨型工程于2014年开工建设，高峰时工地上有4万多工人。航站楼设计紧凑，可以允许最大数量的飞机直接停靠在最靠近航站楼中心的位置，这给乘客提供了极大的方便。航站楼共有82个登机口，但乘客通过安检后，只需不到8分钟就能抵达任何一个登机口。机场的设计可确保每小时300架次起降。机场年客运量2040年将达到1亿人次，有望成为世界上最繁忙的机场。',
    reference: 'Beijing Daxing International Airport, located 46 kilometers south of Tiananmen Square, was put into operation on September 30, 2019. The construction of this massive project began in 2014, with over 40,000 workers at its peak. The terminal is designed to be compact, allowing the maximum number of aircraft to park directly at positions closest to the center of the terminal, providing great convenience for passengers. The terminal has a total of 82 boarding gates, and after passing through security checks, passengers can reach any gate in less than 8 minutes. The airport\'s design ensures that it can handle 300 takeoffs and landings per hour. By 2040, the airport is expected to handle an annual passenger volume of 100 million, potentially making it the busiest airport in the world.',
    hint: '2020/12 · terminal 航站楼 · boarding gate 登机口 · takeoff/landing 起降',
  },
  {
    category: '科技发展',
    id: 12,
    chinese: '青藏铁路是世界上最高最长的高原铁路，全长1,956公里，其中有960公里在海拔4,000多米之上，是连接西藏和中国其他地区的第一条铁路。由于铁路穿越世界上最脆弱的生态系统，在建设期间和建成后都采取了生态保护措施，以确保其成为一条"绿色铁路"。青藏铁路大大缩短了去往西藏的旅行时间。更重要的是，它极大地促进了西藏的经济发展，改善了当地居民的生活。铁路开通后，愈来愈多的人选择乘火车前往西藏，这样还有机会欣赏沿线的美景。',
    reference: 'The Qinghai-Tibet Railway is the highest and longest plateau railway in the world, with a total length of 1,956 kilometers, of which 960 kilometers are situated above an altitude of 4,000 meters. It is the first railway that connects Tibet with other regions of China. As the railway crosses one of the world\'s most fragile ecosystems, ecological protection measures were implemented both during its construction and after its completion to ensure it remains a "green railway." The Qinghai-Tibet Railway has significantly shortened travel time to Tibet. More importantly, it has greatly boosted the economic development of Tibet and improved the living standards of the local residents. Since the railway was opened, an increasing number of people have chosen to travel to Tibet by train, which also offers them the opportunity to enjoy the beautiful scenery along the route.',
    hint: '2020/12 · plateau railway 高原铁路 · fragile ecosystem 脆弱生态系统 · altitude 海拔',
  },
  {
    category: '科技发展',
    id: 13,
    chinese: '港珠澳大桥全长55公里，是我国一项不同寻常的工程壮举。大桥将三个城市连接起来，是世界上最长的跨海桥梁和隧道系统。大桥将三个城市之间的旅行时间从3小时缩短到30分钟。这座跨度巨大的钢筋混凝土大桥充分证明中国有能力建造创纪录的巨型建筑。它将助推区域一体化，促进经济增长。大桥是中国发展自己的大湾区总体规划的关键。中国希望将大湾区建成在技术创新和经济繁荣上能与旧金山、纽约和东京的湾区相媲美的地区。',
    reference: 'The Hong Kong-Zhuhai-Macau Bridge, spanning a total length of 55 kilometers, is an extraordinary engineering feat in China. This bridge connects three cities and stands as the world\'s longest cross-sea bridge and tunnel system. It shortens the travel time between the three cities from three hours to just 30 minutes. This reinforced concrete bridge with a huge span fully proves China\'s ability to construct record-breaking megastructures. It will boost regional integration and promote economic growth. The bridge is crucial to the overall plan to develop China\'s own Greater Bay Area. China hopes to develop the Greater Bay Area into a hub of technological innovation and economic prosperity, comparable to the bay areas of San Francisco, New York, and Tokyo.',
    hint: '2020/12 · feat 壮举 · cross-sea bridge 跨海大桥 · regional integration 区域一体化',
  },
  {
    category: '科技发展',
    id: 14,
    chinese: '自古以来，中国的水资源北缺南丰，分布极不均衡。为了有效解决北方严重缺水问题，中国政府实施了南水北调工程。这是一项跨区域配置水资源的宏大水利工程。历经数十年的规划与筹备，工程于2002年开工建设，分为东、中、西3条线路，总长4350公里，惠及人口将超过4亿。自2014年通水以来，工程向北方调水累计已超500亿立方米，为北方地区的人民提供了可靠的水资源，同时也极大地改善了这一地区的生态环境，促进了经济的可持续健康发展。',
    reference: 'Since ancient times, China has faced an uneven distribution of water resources, with scarcity in the north and abundance in the south. To effectively address the severe water shortage in the north, the Chinese government launched the South-to-North Water Diversion Project. This is a massive water conservancy project for reallocating water resources across regions. After decades of planning and preparation, construction of the project began in 2002. The project consists of three routes—eastern, central, and western—with a total length of 4,350 kilometers and is expected to benefit over 400 million people. Since it was put into operation in 2014, the project has diverted more than 50 billion cubic meters of water to the north, providing a reliable water supply to the region. It has also significantly improved the local ecological environment and promoted sustainable and healthy economic development.',
    hint: '2025/06 · water diversion 调水 · scarcity 稀缺 · water conservancy 水利',
  },

  // ====== 经济发展 ======
  {
    category: '经济发展',
    id: 15,
    chinese: '粤港澳大湾区具有得天独厚的地理位置，拥有完善的交通基础设施和丰富的产业资源。大湾区是中国开放程度最高、经济活力最强的区域之一，在国家经济发展中具有重要的战略地位。大湾区不仅将建成充满活力的世界级城市群和具有全球影响力的国际科技创新中心，还将打造成适合工作、购物、旅游的优质生活圈。随着改革开放的不断深入，大湾区的建设将进一步推动区域经济发展。到2035年，大湾区将实现成为国际一流湾区的目标。',
    reference: 'The Guangdong-Hong Kong-Macao Greater Bay Area enjoys a uniquely favorable geographical location, along with well-developed transportation infrastructure and abundant industrial resources. As one of the most open and economically vibrant regions in China, the Greater Bay Area holds a vital strategic position in the country\'s economic development. It is set to become not only a vibrant world-class city cluster and an international hub for scientific and technological innovation with global influence, but also a high-quality living circle ideal for work, shopping, and tourism. With the ongoing deepening of reform and opening-up, the development of the Greater Bay Area will further promote regional economic growth. By 2035, it is expected to achieve its goal of becoming a world-class bay area.',
    hint: '2025/06 · Greater Bay Area 大湾区 · vibrant 充满活力 · hub 中心',
  },
  {
    category: '经济发展',
    id: 16,
    chinese: '洋山港是上海航运中心的重要组成部分，是中国第一个深水港，也是世界上规模最大的深水港之一。经过近20年的发展，洋山港已实现高度自动化。数字技术和人工智能的使用大大减少了用工成本和碳排放。自主研发的码头管理系统可以在百公里之外对大型设备进行远程操控。洋山港看上去一片繁忙，现场却见不到人工操作，而且能够24小时不间断运作。洋山港将不断发展，为把上海建成一个全球航运中心做出更大贡献。',
    reference: 'Yangshan Port is an essential part of Shanghai shipping center, serving as China\'s first deep-water port and one of the largest deep-water ports in the world. After nearly two decades of development, Yangshan Port has achieved a high level of automation. The application of digital technology and artificial intelligence has significantly reduced labor costs and carbon emissions. The independently developed terminal management system enables remote operation of large-scale equipment from over a hundred kilometers away. Although Yangshan Port appears to be bustling, no manual operations can be seen on-site, and it is capable of operating nonstop 24 hours a day. Yangshan Port will continue to evolve, making greater contributions to establishing Shanghai as a global shipping center.',
    hint: '2024/12 · deep-water port 深水港 · automation 自动化 · carbon emission 碳排放',
  },
  {
    category: '经济发展',
    id: 17,
    chinese: '近年来，越来越多的中国文化产品走向全球市场，日益受到海外消费者的青睐。随着中国对外文化贸易的快速发展，中国文化产品出口额已持续多年位居世界前列，形成了一批具有国际影响力的文化企业、产品和品牌。数据显示，中国的出版物、影视作品、网络文学与动漫作品等在海外的销售量连年攀升。中国政府出台了一系列政策鼓励和支持更多具有中国元素的优秀文化产品走出国门，扩大海外市场份额，进一步提升中国文化的世界影响力。',
    reference: 'In recent years, more and more Chinese cultural products have entered the global market and are becoming increasingly popular among overseas consumers. With the rapid development of China\'s foreign cultural trade, the export volume of Chinese cultural products has consistently ranked among the top in the world for many years, forming a group of internationally influential cultural enterprises, products, and brands. Data shows that the sales of Chinese publications, film and television works, online literature, and animation works have been continuously increasing overseas. The Chinese government has introduced a series of policies to encourage and support more outstanding cultural products with Chinese elements to go abroad, expand the overseas market share, and further enhance the global influence of Chinese culture.',
    hint: '2023/06 · cultural trade 文化贸易 · export volume 出口额 · animation 动漫',
  },
  {
    category: '经济发展',
    id: 18,
    chinese: '近年来，中国城市加快发展，城市人居环境得到显著改善。许多城市努力探索中国特色的城市高质量发展之路，城市功能不断完善，治理水平明显提高。中国持续开展城市生态修复和功能修补，全面实施城镇老旧小区改造，大力推进城市园林绿化，消除污染；同时大力推进城市基础设施体系化建设，开展房屋建筑和市政设施普查以及安全隐患排查整治，努力为市民创造高品质的生活环境，让城市更美丽、更安全、更宜居。',
    reference: 'In recent years, China\'s urban development has been accelerating, and the living environment in urban areas has significantly improved. Many cities have made efforts to explore a path of high-quality urban development with Chinese characteristics, continuously improving urban functions, and significantly enhancing the level of governance. China has been carrying out ongoing urban ecological restoration and functional repairs, comprehensively implementing the renovation of old residential areas in towns and cities, and vigorously advancing urban landscaping and pollution elimination. At the same time, there is a strong push for the systematic construction of urban infrastructure, conducting surveys of housing construction and municipal facilities, as well as inspections and rectification of safety hazards, striving to create a high-quality living environment for residents, making cities more beautiful, safer, and more livable.',
    hint: '2023/06 · urban development 城市发展 · ecological restoration 生态修复 · livable 宜居',
  },
  {
    category: '经济发展',
    id: 19,
    chinese: '随着中国经济的快速发展和人们生活水平的稳步提高，城市居民对环境和生活品质的要求越来越高。中国地方政府更加注重公共设施的建设和改进，以更好地满足人们的需求。通过兴建新的广场、公园和公共绿地或对原有公共场地重新加以规划改造，许多城市为市民提供了更多休闲和社交的场所。如今，政府出资购置的健身器械和铺设的健身步道在不少城市随处可见，既明显改善了市民户外活动的条件，又使城市更加美丽。',
    reference: 'With the rapid development of China\'s economy and the steady improvement of people\'s living standards, urban residents have increasingly higher demands for the environment and quality of life. Local governments in China are paying more attention to the construction and improvement of public facilities to better meet people\'s needs. By building new squares, parks, and public green spaces, or by replanning and renovating existing public areas, many cities are providing more places for residents to relax and socialize. Today, government-funded fitness equipment and paved fitness trails can be seen everywhere in many cities, which not only significantly improve the conditions for outdoor activities for citizens but also make the cities more beautiful.',
    hint: '2023/06 · public facilities 公共设施 · living standard 生活水平 · fitness trails 健身步道',
  },

  // ====== 社会生活 ======
  {
    category: '社会生活',
    id: 20,
    chinese: '随着经济与社会的发展，中国人口结构发生了显著变化，逐渐步入老龄化社会。中国老年人口将持续增加，人口老龄化趋势将更加明显。为了应对人口老龄化带来的种种挑战，国家正积极采取措施，加大对养老的支持。通过改革社会保障制度，政府不断增加社会保障经费，逐步扩大社会保障覆盖范围，使更多老年人受益。政府还鼓励各种社会团体为老年人提供服务。在政府和社会团体的共同努力下，老年人将生活得更加幸福。',
    reference: 'With the development of the economy and society, the population structure of China has undergone significant changes, gradually transitioning into an aging society. The elderly population in China will continue to increase, and the trend toward aging will become more apparent. To address the various challenges brought about by an aging population, the government is actively implementing measures and increasing support for elderly care. By reforming the social security system, the government is continually increasing funding for social security and gradually expanding its coverage, benefiting more elderly people. Additionally, the government encourages various social organizations to provide services for the elderly. With the joint efforts of the government and social organizations, the elderly are expected to live happier lives.',
    hint: '2023/12 · aging society 老龄化社会 · social security 社会保障 · coverage 覆盖范围',
  },
  {
    category: '社会生活',
    id: 21,
    chinese: '在中国，随着老龄化社会的到来，养老受到普遍关注。人们谈论最多的是应当采取什么样的养老模式。多数人认为，养老模式需要多元化。可以通过政府引导和社会参与，建立更多更好的养老服务机构，改进社区服务中心，鼓励居家自助养老，还可以推行家庭养老与社会养老相结合的模式。随着政府和社会对养老服务事业投入的持续增加，养老设施将不断升级，服务质量逐步改进，老年人的生活将会更加方便舒适、健康快乐。',
    reference: 'In China, with the advent of an aging society, elderly care has received widespread attention. The most discussed issue is which model of elderly care should be adopted. The majority believe that elderly care models need to be diversified. Through government guidance and social participation, it is possible to establish more and better elderly care institutions, improve community service centers, encourage self-help in home-based elderly care, and implement a combined model of family and community care. As the government and society continue to increase their investments in elderly care services, facilities will be continuously upgraded, and the quality of services will progressively improve, making the lives of the elderly more convenient, comfortable, healthy, and joyful.',
    hint: '2023/12 · elderly care 养老 · diversified 多元化 · community service 社区服务',
  },
  {
    category: '社会生活',
    id: 22,
    chinese: '近年来，中国老龄人口持续增长。中国政府正采取各种措施，推进养老服务体系建设，使老年人晚年生活健康幸福。全国兴建了各类养老服务机构。为了提升养老机构的服务质量，政府颁布了一系列标准，加强对养老机构的监管。许多城市为方便老年人用餐，开设了社区食堂，为他们提供价格实惠的饭菜。行动不便的老年人还能享受上门送餐服务。同时，中国还在积极探索居家和社区养老等其他养老模式，以确保所有老年人老有所养。',
    reference: 'In recent years, the aging population in China has been continuously growing. The Chinese government is taking various measures to advance the construction of the elderly care service system, ensuring that the elderly can enjoy a healthy and happy life in their later years. A diversity of elderly care institutions have been established across the nation. To improve the quality of services provided by these institutions, the government has issued a series of standards to strengthen the supervision of elderly care institutions. To make dining more convenient for the elderly, many cities have opened community canteens to provide them with affordable meals. Furthermore, seniors who have mobility challenges can enjoy the convenience of home-delivered meal services. At the same time, China is actively exploring other elderly care models, such as home-based and community care, to ensure that all senior citizens are well taken care of in their old age.',
    hint: '2023/12 · elderly care system 养老服务体系 · supervision 监管 · community canteen 社区食堂',
  },

  // ====== 历史名胜 ======
  {
    category: '历史名胜',
    id: 23,
    chinese: '卢沟桥位于天安门广场西南15公里处，横跨永定河，是北京现存最古老的多拱石桥。卢沟桥最初建成于1192年，1698年重建，由281根柱子支撑。每根柱子上都有一头石狮。这些石狮的头、背、腹部或爪子上都藏着更多的狮子。这些石狮生动逼真、千姿百态，是卢沟桥石刻艺术的精品。桥上的石狮不计其数，因而北京地区流传着"卢沟桥上的石狮子——数不清"的说法。卢沟桥不仅以其美学特征闻名于世，还被公认为石桥建筑史上的一座丰碑。',
    reference: 'Lugou Bridge, located 15 kilometers southwest of Tiananmen Square and spanning the Yongding River, is the oldest existing multi-arch stone bridge in Beijing. Originally constructed in 1192 and rebuilt in 1698, the bridge is supported by 281 pillars, each pillar is adorned with a stone lion, which hides more lions in their heads, backs, abdomens, or claws. Vividly and diversely crafted, these stone lions are considered the finest examples of stone carving on Lugou Bridge. There are countless lions on the Lugou Bridge, leading to the popular local saying, "The stone lions of Lugou Bridge—too numerous to count." Lugou Bridge is renowned not only for its aesthetic features but also recognized as a monument in the history of stone bridge construction.',
    hint: '2022/06 · multi-arch 多拱 · stone carving 石刻 · monument 丰碑',
  },
  {
    category: '历史名胜',
    id: 24,
    chinese: '南京长江大桥是长江上首座由中国设计、采用国产材料建造的铁路、公路两用桥，上层的4车道公路桥长4589米，下层的双轨道铁路桥长6772米。铁路桥连接原来的天津—浦口和上海—南京两条铁路线，使火车过江从过去一个半小时缩短为现在的2分钟。大桥是南北交通的重要枢纽，也是南京的著名景点之一。南京长江大桥的建成标志着中国桥梁建设的一个飞跃，大大方便了长江两岸的物资交流和人员来往，对促进经济发展和改善人民生活起到了巨大作用。',
    reference: 'The Nanjing Yangtze River Bridge, the first bridge over the Yangtze River designed and built by China with domestic materials, serves both rail and road traffic. It has an upper deck that is a four-lane road bridge stretching 4,589 meters and a lower deck comprising a double-track rail bridge that extends 6,772 meters. The railway bridge connects the original Tianjin-Pukou and Shanghai-Nanjing railway lines, shortening the train crossing time from an hour and a half in the past to two minutes now. The bridge is a vital transportation hub between the north and south and is also one of Nanjing\'s famous landmarks. The completion of the Nanjing Yangtze River Bridge marks a significant leap in China\'s bridge construction, greatly facilitating the exchange of goods and people\'s movement across the two banks of the Yangtze River. It has played a tremendous role in promoting economic development and improving the quality of life for the people.',
    hint: '2022/06 · domestically designed 自主设计 · hub 枢纽 · leap 飞跃',
  },
  {
    category: '历史名胜',
    id: 25,
    chinese: '赵州桥建于隋朝，公元605年左右，长50.82米，宽9.6米，跨度37.37米。天才建筑师李春设计并监督了桥的建设。赵州桥结构新颖、造型优美。桥有一个大拱，在大拱的两端有两个小拱，帮助排泄洪水、减轻桥梁重量并节省石材。建成以来，该桥经受了多次洪水和地震，但其主体结构仍然完好无损，至今仍在使用。赵州桥是世界桥梁建筑史上的一次创举，是中国古代文明史上的一项杰出成就。类似设计的桥梁直到14世纪才在欧洲出现，比赵州桥晚了700多年。',
    reference: 'The Zhaozhou Bridge, constructed during the Sui Dynasty around 605 AD, measures 50.82 meters in length, 9.6 meters in width, and spans 37.37 meters. The talented architect Li Chun designed and supervised the construction of the bridge. The Zhaozhou Bridge has a novel structure and beautiful shape. It includes a large arch supported by two smaller arches at each end, which help discharge floodwaters, reduce the weight of the bridge, and conserve stone. Since its completion, the bridge has withstood numerous floods and earthquakes, yet its main structure remains intact and it is still in use today. The Zhaozhou Bridge is a pioneering achievement in the history of world bridge architecture and a remarkable accomplishment in the history of ancient Chinese civilization. Similar bridge designs did not appear in Europe until the 14th century, more than 700 years after the Zhaozhou Bridge.',
    hint: '2022/06 · Sui Dynasty 隋朝 · arch 拱 · withstand 经受 · intact 完好无损',
  },
  {
    category: '历史名胜',
    id: 26,
    chinese: '中国共产党第一次全国代表大会会址位于上海兴业路76号，是一栋典型的上海式住宅，建于1920年秋。1921年7月23日，中国共产党第一次全国代表大会在此召开，大会通过了中国共产党的第一个纲领和第一个决议，选举产生了中央领导机构，宣告了中国共产党的诞生。1952年9月，中共一大会址修复，建立纪念馆并对外开放。纪念馆除了介绍参加一大的代表之外，还介绍党的历史发展进程，现已成为了解党史、缅怀革命先烈的爱国主义教育基地。',
    reference: 'The site of the First National Congress of the Communist Party of China is located at No.76, Xingye Road, Shanghai, housed in a typical Shanghainese residence built in the autumn of 1920. On July 23, 1921, the First National Congress of the Communist Party of China was convened here. During this congress, the Party\'s first program and first resolution were adopted, a central leadership body was elected, and the birth of the Communist Party of China was declared. In September 1952, the site was restored and transformed into a memorial hall, which was then opened to the public. The memorial hall not only introduces the representatives attending the congress, but also presents the historical development of the Party. It has now become a patriotic education base for learning about the Party\'s history and commemorating revolutionary martyrs.',
    hint: '2021/12 · congress 代表大会 · memorial hall 纪念馆 · patriotic education 爱国主义教育',
  },
  {
    category: '历史名胜',
    id: 27,
    chinese: '延安位于陕西省北部，地处黄河中游，是中国革命的圣地。毛泽东等老一辈革命家曾在这里生活战斗了十三个春秋，领导了抗日战争和解放战争，培育了延安精神，为中国革命做出了巨大贡献。延安的革命旧址全国数量最大、分布最广、级别最高。延安是全国爱国主义、革命传统和延安精神教育基地。延安有9个革命纪念馆，珍藏着中共中央和老一辈革命家在延安时期留存下来的大量重要物品，因此享有"中国革命博物馆城"的美誉。',
    reference: 'Yan\'an is located in the northern part of Shaanxi Province, situated in the middle reaches of the Yellow River, and is regarded as a sacred place of the Chinese Revolution. Mao Zedong and the older generation of revolutionaries lived and fought here for thirteen years, leading the War of Resistance Against Japan and the War of Liberation, cultivating the Yan\'an Spirit, and making significant contributions to the Chinese Revolution. Yan\'an has the largest number, widest distribution, and highest level of revolutionary historical sites in China. It is the national base for education on patriotism, revolutionary tradition, and the Yan\'an Spirit. Yan\'an has nine revolutionary museums, which hold a vast collection of important artifacts left by the CPC Central Committee and the older generation of revolutionaries during the Yan\'an period, earning it the reputation of "China\'s Revolutionary Museum City."',
    hint: '2021/12 · sacred place 圣地 · War of Resistance 抗日战争 · artifacts 文物',
  },
  {
    category: '历史名胜',
    id: 28,
    chinese: '井冈山地处湖南、江西两省交界处，因其辉煌的革命历史被誉为"中国革命红色摇篮"。1927年10月，毛泽东、朱德等老一辈革命家率领中国工农红军来到这里，开展了艰苦卓绝的斗争，创建了第一个农村革命根据地，点燃了中国革命的星星之火，开辟了"农村包围城市，武装夺取政权"这一具有中国特色的革命道路，中国革命从这里迈向胜利。井冈山现有100多处革命旧址，成为一个"没有围墙的革命历史博物馆"，是爱国主义和革命传统教育的重要基地。',
    reference: 'Jinggangshan, located at the border between Hunan and Jiangxi provinces, is hailed as the "red cradle of the Chinese revolution" due to its glorious revolutionary history. In October 1927, Mao Zedong, Zhu De, and other old generation of revolutionaries led the Chinese Workers\' and Peasants\' Red Army to this area, where they engaged in tough and extraordinary struggles, established the first rural revolutionary base, and ignited the spark of the Chinese revolution. They pioneered a revolutionary path with Chinese characteristics by "besieging cities from the countryside and seizing power through armed force." From here, the Chinese revolution marched toward victory. Today, Jinggangshan is home to over 100 revolutionary historical sites, making it a "revolutionary history museum without walls" and a vital base for patriotic and revolutionary tradition education.',
    hint: '2021/12 · red cradle 红色摇篮 · revolutionary base 革命根据地 · besiege 包围',
  },

  // ====== 地理风光 ======
  {
    category: '地理风光',
    id: 29,
    chinese: '青藏高原位于中国西南部，面积约230万平方公里，平均海拔4000米以上，被称为"世界屋脊"。青藏高原自然资源丰富，风景秀丽，拥有多种珍稀野生动物。青藏高原气温很低，形成了大面积高山冰川。这里是亚洲许多著名河流的源头，是中国和东南亚的主要淡水供应源。青藏高原对全球生态系统至关重要。由于气候变化的影响，青藏高原的冰川正在加速融化。中国一直在努力保护青藏高原的生态系统，草地覆盖率不断增加，许多濒危物种得到更为有效的保护。',
    reference: 'The Qinghai-Tibet Plateau, located in southwestern China, covers an area of about 2.3 million square kilometers and has an average altitude of over 4,000 meters. It is known as the "Roof of the World". The Qinghai-Tibet Plateau is abundant in natural resources and has beautiful scenery, as well as a variety of rare wildlife species. The temperature on the Qinghai-Tibet Plateau is very low, resulting in a large area of mountain glaciers. It serves as the source of many renowned rivers in Asia and is the main source of freshwater supply for China and Southeast Asia. The Qinghai-Tibet Plateau plays a vital role in the global ecosystem. Due to the impact of climate change, the glaciers on the Qinghai-Tibet Plateau are melting at an accelerated pace. China has been making efforts to protect the ecosystem of the Qinghai-Tibet Plateau. The grassland coverage is continually increasing, and many endangered species are receiving more effective protection.',
    hint: '2022/12 · Roof of the World 世界屋脊 · glacier 冰川 · endangered species 濒危物种',
  },
  {
    category: '地理风光',
    id: 30,
    chinese: '黄土高原是中国第三大高原，面积约60万平方公里，平均海拔1000-2000米，绝大部分覆盖着50-80米厚的黄土，是世界上黄土分布最集中、覆盖厚度最大的区域。这是大自然创造的一个奇迹，在世界上也是绝无仅有的。黄土高原是中华民族的发祥地之一。早在5500年前，人们就已经在黄土高原上开始农耕。随着农耕业的持续发展，黄土高原人口不断增加，在秦汉时期就成为中国的政治和经济中心。如今，随着西部大开发战略的实施，黄土高原地区的经济得到了迅速发展。',
    reference: 'The Loess Plateau, China\'s third largest plateau, covers an area of about 600,000 square kilometers with an average altitude of 1,000 to 2,000 meters. Most of this region is covered with loess ranging from 50 to 80 meters in thickness, making it the area with the most concentrated distribution and the thickest coverage of loess in the world. It is a miracle created by nature and is also unique on the global stage. The Loess Plateau is one of the birthplaces of the Chinese civilization. As early as 5,500 years ago, people had already begun farming on the plateau. With the continuous development of agriculture, the population of the Loess Plateau constantly increased, and by the Qin and Han dynasties, it had become the political and economic center of China. Today, with the implementation of the Western Development Strategy, the economy of the Loess Plateau region has seen rapid advancement.',
    hint: '2022/12 · loess 黄土 · birthplace 发祥地 · Western Development 西部大开发',
  },
  {
    category: '地理风光',
    id: 31,
    chinese: '云贵高原大部分位于云南、贵州省境内，总面积约50万平方公里，平均海拔2000-4000米，是中国第四大高原。云贵高原西高东低，河流众多，形成了许多又深又陡的峡谷。峡谷中许多地方土壤肥沃，非常有利于多种农作物生长。云贵高原独特的自然环境造就了生物和文化的多样性。它是中国森林和矿产资源类型十分丰富的地区，也是古人类起源的重要地区。云贵高原是中国少数民族数量最多的地区，各民族都保留了自己丰富多彩的文化传统。',
    reference: 'Most of the Yunnan-Guizhou Plateau is located in the provinces of Yunnan and Guizhou. With a total area of about 500,000 square kilometers and an average altitude ranging from 2,000 to 4,000 meters, it is the fourth largest plateau in China. The Yunnan-Guizhou Plateau is higher in the west and lower in the east and has numerous rivers, forming many deep and steep canyons. The soil in many parts of these canyons is fertile, greatly benefiting the growth of various crops. The unique natural environment of the Yunnan-Guizhou Plateau has contributed to a diversity of both biology and culture. It is an area rich in forest and mineral resources in China and is also an important area for the origin of ancient humans. The plateau is home to the largest number of ethnic minorities in China, all of whom preserve their rich and diverse cultural traditions.',
    hint: '2022/12 · canyon 峡谷 · biodiversity 生物多样性 · ethnic minority 少数民族',
  },
  {
    category: '地理风光',
    id: 32,
    chinese: '海南是仅次于台湾的中国第二大岛，是位于中国最南端的省份。海南岛风景秀丽，气候宜人，阳光充足，生物多样，温泉密布，海水清澈，大部分海滩几乎全年都是游泳和日光浴的理想场所，因而被誉为中国的四季花园和度假胜地，每年都吸引了大批中外游客。海南1988年建省以来，旅游业、服务业、高新技术产业飞速发展，是中国唯一的省级经济特区。在中央政府和全国人民的大力支持下，海南将建成中国最大的自由贸易试验区。',
    reference: 'Hainan, the second largest island in China after Taiwan, is the southernmost province in the country. The island boasts beautiful scenery, a pleasant climate, abundant sunshine, rich biodiversity, numerous hot springs, and crystal-clear seawater. Most of its beaches are ideal places for swimming and sunbathing throughout the year. As a result, Hainan is known as China\'s four-season garden and holiday resort, attracting a large number of domestic and international tourists annually. Since its establishment as a province in 1988, Hainan has seen rapid development in tourism, service industries, and high-tech industries, making it China\'s only provincial-level special economic zone. With strong support from the central government and the people of the whole country, Hainan will be built into China\'s largest pilot free trade zone.',
    hint: '2021/06 · four-season garden 四季花园 · special economic zone 经济特区 · free trade zone 自由贸易区',
  },
  {
    category: '地理风光',
    id: 33,
    chinese: '青海是中国西北部的一个省份，平均海拔3000米以上，大部分地区为高山和高原。青海省得名于全国最大的咸水湖青海湖。青海湖被誉为"中国最美的湖泊"，是最受欢迎的旅游景点之一，也是摄影师和艺术家的天堂。青海山川壮丽，地大物博，石油和天然气储量丰富，省内许多城市的经济在石油和天然气工业带动下得到了长足发展。青海尤以水资源丰富而闻名，是中国三大河流长江、黄河和澜沧江的发源地，在中国的水生态中发挥着重要作用。',
    reference: 'Qinghai is a province in northwestern China with an average altitude of over 3,000 meters and is primarily composed of high mountains and plateaus. The province derives its name from Qinghai Lake, the largest saltwater lake in China, famed as "the most beautiful lake in China." Qinghai Lake is one of the most popular tourist attractions and a paradise for photographers and artists. Qinghai has magnificent landscapes, vast territories, and abundant resources. It is rich in oil and natural gas reserves, which have significantly propelled the economic development of many cities within the province. Qinghai is particularly renowned for its rich water resources and is the source of three major rivers in China—the Yangtze River, the Yellow River, and the Lancang River—playing a crucial role in China\'s water ecology.',
    hint: '2021/06 · saltwater lake 咸水湖 · natural gas 天然气 · water ecology 水生态',
  },
  {
    category: '地理风光',
    id: 34,
    chinese: '云南是位于中国西南的一个省份，平均海拔1500米。云南历史悠久，风景秀丽，气候宜人。云南生态环境优越，生物多种多样，被誉为野生动植物的天堂。云南还有多种矿藏和充足的水资源，为全省经济的可持续发展提供了有利条件。云南居住着25个少数民族，他们大多有自己的语言、习俗和宗教。云南独特的自然景色和丰富的民族文化使其成为中国最受欢迎的旅游目的地之一，每年都吸引着大批国内外游客前往观光旅游。',
    reference: 'Yunnan is a province located in southwest China, with an average elevation of 1,500 meters. It has a long history, beautiful scenery, and a pleasant climate. Yunnan has a superior ecological environment and rich biodiversity, earning it the reputation of a paradise for wild animals and plants. The province is also rich in various mineral resources and abundant water supplies, providing favorable conditions for its sustainable economic development. Yunnan is home to 25 ethnic minorities, most of whom have their own languages, customs, and religions. The unique natural landscapes and rich ethnic cultures make Yunnan one of China\'s most popular tourist destinations, attracting large numbers of domestic and international visitors each year for sightseeing and tourism.',
    hint: '2021/06 · biodiversity 生物多样性 · ethnic minorities 少数民族 · tourist destination 旅游目的地',
  },
]

export default translationData
