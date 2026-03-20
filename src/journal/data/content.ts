export const journalContent = {
  jp: {
    nav: {
      latest: "最新",
      edition: "版研究",
      notes: "蒐集ノート",
      artist: "作家考",
      archive: "アーカイブ論",
      subscribe: "購読",
      back: "Mangakoへ戻る"
    },
    hero: {
      label: "特集",
      read: "「記事を読む」"
    },
    categories: {
      "edition-studies": "版研究",
      "collector-notes": "蒐集ノート",
      "artist-studies": "作家考",
      "archive-theory": "アーカイブ論",
      "preservation": "保存",
      "market-culture": "市場文化",
      "visual-essays": "ビジュアル・エッセイ"
    },
    manifesto: {
      text: "「読むだけではない。保有し、受け継ぎ、見つめ直すためのマンガへ。」",
      subtext: "Mangako Journal — Sequence as Fine Art"
    },
    subscribe: {
      title: "新しい版研究、蒐集ノート、アーカイブ論を受け取る。",
      desc: "限定的なエッセイ、エディションの考察、保存技術のアップデートをあなたのインボックスへ届けます。",
      button: "「購読する」",
      privacy: "※スパムは送信しません。いつでも解除可能です。"
    },
    about: {
      title: "Mangako Journalについて",
      p1: "Mangako Journalは、マンガを作品・印刷物・文化資産として見つめるためのエディトリアルです。",
      p2: "私たちは、作家が描いた一線、編集者がこだわった余白、そして時代を超えて残る紙の質感に、美術品と同等の価値があると考えています。",
      p3: "本誌は、単なるトレンドの消費ではなく、マンガを「蒐集」「保存」し、次世代へ「継承」するための知性を共有する場です。"
    }
  },
  en: {
    nav: {
      latest: "Latest",
      edition: "Edition Studies",
      notes: "Collector Notes",
      artist: "Artist Studies",
      archive: "Archive Theory",
      subscribe: "Subscribe",
      back: "Back to Mangako"
    },
    hero: {
      label: "Featured",
      read: "Read Article"
    },
    categories: {
      "edition-studies": "Edition Studies",
      "collector-notes": "Collector Notes",
      "artist-studies": "Artist Studies",
      "archive-theory": "Archive Theory",
      "preservation": "Preservation",
      "market-culture": "Market Culture",
      "visual-essays": "Visual Essays"
    },
    manifesto: {
      text: "“Manga not only to read, but to own, preserve, and reconsider.”",
      subtext: "Mangako Journal — Sequence as Fine Art"
    },
    subscribe: {
      title: "Receive new edition studies, collector notes, and archive essays.",
      desc: "Get elegant updates on rare editions, historical context, and preservation disciplines directly in your inbox.",
      button: "Subscribe",
      privacy: "We respect your privacy. Unsubscribe anytime."
    },
    about: {
      title: "About Mangako Journal",
      p1: "Mangako Journal is an editorial publication devoted to viewing manga as work, print object, and cultural asset.",
      p2: "We believe there is irreplaceable value in the lines drawn by the artist, the negative space curated by the editor, and the texture of paper that survives through time.",
      p3: "This journal is not about trend consumption, but about building the culture of preservation, study, and fine art appreciation."
    }
  }
};

export const mockArticles = [
  {
    slug: "when-first-editions-change-reading-experience",
    category: "edition-studies",
    author: "K. Yamamoto",
    date: "2026.03.15",
    readingTime: "12 min",
    featured: true,
    title: {
      jp: "初版が読後感を変えるとき",
      en: "When First Editions Change the Reading Experience"
    },
    excerpt: {
      jp: "紙の厚み、インクの乗り、印刷の熱。初版のページをめくるとき、私たちは作家の息遣いを最も近くで感じる。それは単なる物理的な本ではなく、時間のカプセルである。",
      en: "The weight of the paper, the absorption of the ink, the residual heat of the print cycle. In turning the pages of a primary first edition, we stand closer to the artist's breath."
    },
    body: {
      jp: "私たちは、デジタル化された綺麗な画像をスマホでスクロールすることに慣れてしまった。しかし、90年代の初版マンガを開いたとき、指先に伝わるのは全く異なる質感だ。インクの匂い、わずかな紙の繊維、そして当時の印刷技術特有の「線の太さ」。これらは、物語そのものの重厚さを増幅させる役割を果たしていたのではないか...",
      en: "We have grown accustomed to scrolling through sanitized digital frames on glass screens. Yet, opening a 1990s primary first edition offers a completely distinct sensory alignment. The aroma of aged pulp, the micro-fibers of paper, the organic weight of ink saturation..."
    },
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=2000&auto=format&fit=crop"
  },
  {
    slug: "aesthetics-of-the-complete-set",
    category: "collector-notes",
    author: "M. Sato",
    date: "2026.03.10",
    readingTime: "8 min",
    title: {
      jp: "完結セットという美学",
      en: "The Aesthetics of the Complete Set"
    },
    excerpt: {
      jp: "背表紙が並んだときのグラデーション、完結した物語が物理的なブロックとなって空間に鎮座する美しさについて。",
      en: "The gradient of spine designs, and the silent authority of a completed narrative sitting as a heavy physical block on a collector's shelf."
    },
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=2000&auto=format&fit=crop"
  },
  {
    slug: "paper-ink-time",
    category: "preservation",
    author: "Hiroshi Tanaka",
    date: "2026.03.05",
    readingTime: "15 min",
    title: {
      jp: "紙、インク、時間",
      en: "Paper, Ink, Time"
    },
    excerpt: {
      jp: "経年変化を敵とみなすか、来歴の証明とみなすか。保存哲学における酸性紙と時間の関係性。",
      en: "Do we treat aging as a defect, or as authentication of provenance? The philosophical dialogue between acidic paper and the friction of time."
    },
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2000&auto=format&fit=crop"
  },
  {
    slug: "why-provenance-protects-value",
    category: "market-culture",
    author: "Eleni Vance",
    date: "2026.02.28",
    readingTime: "10 min",
    title: {
      jp: "来歴はなぜ価値を守るのか",
      en: "Why Provenance Protects Value"
    },
    excerpt: {
      jp: "誰の手を経てここに辿り着いたのか。本が持つ「履歴」が、コレクターズルにおける真正性と美をどのように形成するか。",
      en: "Through whose hands did this object travel? How a book's ownership history constructs authenticity and institutional beauty in collecting."
    },
    image: "https://images.unsplash.com/photo-1532152200305-0c0994080963?q=80&w=2000&auto=format&fit=crop"
  },
  {
    slug: "why-inoue-panels-feel-architectural",
    category: "artist-studies",
    author: "T. Nakamura",
    date: "2026.02.20",
    readingTime: "14 min",
    title: {
      jp: "井上雄彦のコマはなぜ建築的なのか",
      en: "Why Inoue’s Panels Feel Architectural"
    },
    excerpt: {
      jp: "人物のパースペクティブだけでなく、背景の余白、コマ割りのスリット、ページ全体の重心。その空間支配力を分解する。",
      en: "Deconstructing spatial dominance: looking beyond perspective to analyze frame slitting, negative space gravity, and structural balance."
    },
    image: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=2000&auto=format&fit=crop"
  },
  {
    slug: "collector-note-between-shelf-wear-and-preservation",
    category: "collector-notes",
    author: "Y. Kono",
    date: "2026.02.15",
    readingTime: "6 min",
    title: {
      jp: "蒐集ノート：棚焼けと保存のあいだ",
      en: "Collector’s Note: Between Shelf Wear and Preservation"
    },
    excerpt: {
      jp: "完璧な暗室での保管か、生活の光が当たる本棚か。コレクターを悩ませる「美しい劣化」の境界線。",
      en: "A dark climate-controlled vault or a library shelf warmed by daily light? The fine boundary of 'beautiful decay' that occupies the modern collector."
    },
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=2000&auto=format&fit=crop"
  },
  {
    slug: "evolution-of-cover-design-after-1980s",
    category: "edition-studies",
    author: "S. Fujimoto",
    date: "2026.02.01",
    readingTime: "18 min",
    title: {
      jp: "1980年代以後の装幀変遷",
      en: "The Evolution of Cover Design After the 1980s"
    },
    excerpt: {
      jp: "週刊誌の副産物から、独立したアートブックへ。マンガ単行本の装幀（ブックデザイン）が果たした役割。",
      en: "From magazine byproduct to standalone art book. Tracing the weight of graphic design on contemporary manga volumes."
    },
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2000&auto=format&fit=crop"
  },
  {
    slug: "ownership-beyond-reading",
    category: "archive-theory",
    author: "R. Saito",
    date: "2026.01.25",
    readingTime: "9 min",
    title: {
      jp: "読むためだけではない所有",
      en: "Ownership Beyond Reading"
    },
    excerpt: {
      jp: "テキストを消化した後、本に残る価値。物質としてのマンガを保有することの哲学的考察。",
      en: "The structure of residual value remaining after the text is consumed. A philosophical look at manga as physical object."
    },
    image: "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?q=80&w=2000&auto=format&fit=crop"
  },
  {
    slug: "quiet-discipline-of-preservation",
    category: "preservation",
    author: "Dr. Kenji Ito",
    date: "2026.01.15",
    readingTime: "11 min",
    title: {
      jp: "保存という行為の静けさ",
      en: "The Quiet Discipline of Preservation"
    },
    excerpt: {
      jp: "修復ではなく、現状維持。アーカイブの現場における、物理的干渉を最小限に留める倫理観。",
      en: "Not restoration, but maintaining state. The ethical boundaries of minimal physical intervention in modern archival science."
    },
    image: "https://images.unsplash.com/photo-1463171359979-330b66039399?q=80&w=2000&auto=format&fit=crop"
  },
  {
    slug: "strength-of-line-breath-of-negative-space",
    category: "artist-studies",
    author: "A. Yoshida",
    date: "2026.01.05",
    readingTime: "13 min",
    title: {
      jp: "線の強度、余白の呼吸",
      en: "The Strength of Line, the Breath of Negative Space"
    },
    excerpt: {
      jp: "描かない部分が物語るもの。大友克洋や谷口ジローの画面に見る、日本特有の引き算の美学。",
      en: "What goes undrawn. The architecture of subtraction seen on the frames of Otomo and Taniguchi."
    },
    image: "https://images.unsplash.com/photo-1550100136-e092101726f4?q=80&w=2000&auto=format&fit=crop"
  },
  {
    slug: "what-the-market-recognizes-as-value",
    category: "market-culture",
    author: "Thomas Wright",
    date: "2025.12.20",
    readingTime: "16 min",
    title: {
      jp: "市場はなにを価値とみなすのか",
      en: "What the Market Recognizes as Value"
    },
    excerpt: {
      jp: "希少性、サイン、帯の有無。マンガ市場において、二次的な要素が本質的価値を形成するメカニズム。",
      en: "Scarcity, signatures, the presence of an obi wrapper. How secondary variables construct essential asset value in the marketplace."
    },
    image: "https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?q=80&w=2000&auto=format&fit=crop"
  },
  {
    slug: "manga-as-a-culture-of-collecting",
    category: "archive-theory",
    author: "Y. Takahashi",
    date: "2025.12.10",
    readingTime: "10 min",
    title: {
      jp: "蒐集文化としてのマンガ",
      en: "Manga as a Culture of Collecting"
    },
    excerpt: {
      jp: "おもちゃの付録から、コレクターズ・ギルドへ。マンガがホビーを超えて、アートの領域に達した日。",
      en: "From cheap pulp to safe vaults. Tracing the exact moment manga crossed from high hobby to institutional arts."
    },
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2000&auto=format&fit=crop"
  },
  {
    slug: "where-edition-differences-truly-reside",
    category: "edition-studies",
    author: "N. Inoue",
    date: "2025.12.01",
    readingTime: "14 min",
    title: {
      jp: "版の差異はどこに宿るか",
      en: "Where Edition Differences Truly Reside"
    },
    excerpt: {
      jp: "奥付の文字だけではない。印刷機械、紙の供給元、あるいはインクの調色によって生まれる、微細な版のテロワール。",
      en: "Looking past the colophon. Edition 'terroir' residing in ink batch variation, paper supply, and press machine behaviors."
    },
    image: "https://images.unsplash.com/photo-1507842221017-89999d95d2be?q=80&w=2000&auto=format&fit=crop"
  },
  {
    slug: "visual-essay-city-and-page",
    category: "visual-essays",
    author: "Ken Murayama",
    date: "2025.11.20",
    readingTime: "7 min",
    title: {
      jp: "ビジュアル・エッセイ：都市とページ",
      en: "Visual Essay: City and Page"
    },
    excerpt: {
      jp: "コンクリート、ネオン、高層ビルの群れ。マンガの背景美術が捉えた、もう一つの東京、もう一つの都市論。",
      en: "Concrete, neon, and high-dense architecture. The urban theory nested quietly within the grid of manga background art."
    },
    image: "https://images.unsplash.com/photo-1540959733332-e94e270b2d42?q=80&w=2000&auto=format&fit=crop"
  }
];

export const authors = [
  {
    slug: "k-yamamoto",
    name: { jp: "K. Yamamoto", en: "K. Yamamoto" },
    role: { jp: "エディトリアルライター", en: "Editorial Writer" },
    bio: {
      jp: "90年代マンガの版研究を専門とするライター。稀少本の真贋確認や、印刷技術の歴史に深い造詣を持つ。",
      en: "Writer specializing in the edition taxonomy of 1990s manga. Deep background in printed press history."
    },
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
  },
  {
    slug: "m-sato",
    name: { jp: "M. Sato", en: "M. Sato" },
    role: { jp: "コレクター / エッセイスト", en: "Collector / Essayist" },
    bio: {
      jp: "国内外の初版・限定版を蒐集するコレクター。本を「所有する」ことの空間的・精神的価値を考察する。",
      en: "Collector of rare primary and primary-secondary editions. Writes on the philosophy of owning space and text."
    },
    image: "https://images.unsplash.com/photo-1507003200747-59762132441e?q=80&w=400&auto=format&fit=crop"
  }
];
