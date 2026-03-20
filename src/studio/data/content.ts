export const studioContent = {
  jp: {
    nav: {
      dashboard: "ダッシュボード",
      create: "新しく作る",
      library: "作品一覧",
      back: "Mangakoへ戻る",
      signIn: "Googleで始める",
      signOut: "ログアウト"
    },
    landing: {
      hero: "マンガを生み出し、そのままMangakoへ。",
      subhero: "Mangako Studioは、誰でも簡単にマンガを生成し、仕上げて、公開できる制作レイヤーです。公開された作品は、自動的にMangako上に掲載されます。",
      ctaStart: "Googleで始める",
      ctaView: "作品例を見る",
      features: [
        { title: "AI生成アシスタント", desc: "アイデアを入力するだけで、プロット、コマ割り、作画を素早く生成。あなたの想像力を拡張します。" },
        { title: "シームレスな編集", desc: "生成されたページを直感的なインタフェースで調整。タイトル、タグ、見開きを美しくレイアウト。" },
        { title: "ワンクリック出品", desc: "完成したマンガはボタン一つでMangako上へ。自動的にリスティング（出品）アイテムとして登録されます。" }
      ]
    },
    dashboard: {
      welcome: "お帰りなさい、",
      newManga: "「新しいマンガを作る」",
      recentProjects: "最近のプロジェクト",
      noProjects: "まだプロジェクトがありません。新しく作成してみましょう。",
      stats: {
        drafts: "下書き",
        published: "公開済み",
        views: "閲覧数"
      }
    },
    create: {
      stepper: ["ストーリー", "スタイル", "生成", "詳細設定", "公開"],
      step1: {
        title: "物語のアイデア",
        desc: "どのようなストーリーにしたいですか？",
        titleLabel: "タイトル",
        conceptLabel: "あらすじ / コンセプト",
        genresLabel: "ジャンル",
        genres: ["少年", "青年", "ファンタジー", "SF", "日常", "ドラマ"],
        toneLabel: "雰囲気",
        tones: ["シリアス", "コミカル", "ダーク", "ライト", "エモーショナル"],
        next: "スタイル設定へ"
      },
      step2: {
        title: "フォーマットとスタイル",
        desc: "マンガの視覚的な方向性を決めます。",
        formatLabel: "形式",
        formats: ["ワンショット (読切)", "ショートチャプター", "縦スクロール"],
        styleLabel: "作画スタイル",
        styles: ["シネマティック", "クラシック・インク", "ソフト青年", "ボールド・アクション", "静かな日常"],
        pageLabel: "ページ数",
        colorLabel: "カラー設定",
        colors: ["モノクロ", "カラーアクセント", "フルカラー"],
        next: "この設定で生成する"
      },
      step3: {
        title: "ページの生成中...",
        desc: "AIがあなたのアイデアからマンガを作成しています（通常30秒ほどかかります）。",
        regenerate: "再生成する",
        confirm: "このページで進める"
      },
      step4: {
        title: "詳細の編集",
        desc: "リスティングに表示される情報を入力します。",
        descLabel: "作品の説明",
        tagsLabel: "タグ (カンマ区切り)",
        visibilityLabel: "公開範囲",
        visibility: ["一般公開", "限定公開"],
        next: "公開確認画面へ"
      },
      step5: {
        title: "Mangakoへ公開する",
        desc: "公開すると、自動的にMangakoにリスティング（出品）として掲載されます。",
        publish: "Mangakoに公開する",
        confirmation: "すべての項目の入力が完了しました。公開してもよろしいですか？"
      }
    },
    published: {
      success: "公開が完了しました",
      subtext: "あなたの作品は現在、Mangako上でリスティングとして閲覧・購入・コレクション可能です。",
      viewManga: "Mangakoで見る",
      viewLibrary: "スタジオに戻る"
    }
  },
  en: {
    nav: {
      dashboard: "Dashboard",
      create: "Create New",
      library: "Library",
      back: "Back to Mangako",
      signIn: "Start with Google",
      signOut: "Sign out"
    },
    landing: {
      hero: "Create manga, then publish it straight to Mangako.",
      subhero: "Mangako Studio is the simplest way to generate, refine, and publish manga. Every published work is automatically listed on Mangako.",
      ctaStart: "Continue with Google",
      ctaView: "View Examples",
      features: [
        { title: "AI Generation Assistant", desc: "Turn simple text ideas into layout grids, screen tones, and full illustrations instantly." },
        { title: "Intuitive Composition", desc: "Adjust generated panels directly within a calm, minimalist studio workspace frame." },
        { title: "One-Click Listing", desc: "Skip secondary steps. Fully list finished works on Mangako marketplace in seconds." }
      ]
    },
    dashboard: {
      welcome: "Welcome back, ",
      newManga: "Create New Manga",
      recentProjects: "Recent Projects",
      noProjects: "No projects created yet. Start shaping your first story.",
      stats: {
        drafts: "Drafts",
        published: "Published",
        views: "Views"
      }
    },
    create: {
      stepper: ["Story", "Style", "Generate", "Details", "Publish"],
      step1: {
        title: "Story Idea",
        desc: "What is the concept or premise behind this manga?",
        titleLabel: "Title",
        conceptLabel: "One-line Concept / Synopsis",
        genresLabel: "Genres",
        genres: ["Shonen", "Seinen", "Fantasy", "SF", "Slice of Life", "Drama"],
        toneLabel: "Mood / Tone",
        tones: ["Serious", "Comical", "Dark", "Light", "Emotional"],
        next: "Configure Style"
      },
      step2: {
        title: "Format & Style",
        desc: "Decide the visual direction of your manuscript.",
        formatLabel: "Format",
        formats: ["One-shot", "Short Chapter", "Vertical Strip"],
        styleLabel: "Visual Style",
        styles: ["Cinematic", "Classic Ink", "Soft Seinen", "Bold Action", "Quiet Ambient"],
        pageLabel: "Page Count",
        colorLabel: "Color Mode",
        colors: ["Black & White", "Color Accent", "Full Color"],
        next: "Generate with this configuration"
      },
      step3: {
        title: "Generating Pages...",
        desc: "Our model is rendering your narrative (takes about 30 seconds).",
        regenerate: "Regenerate",
        confirm: "Confirm & Continue"
      },
      step4: {
        title: "Edit Details",
        desc: "Provide information that will describe your story.",
        descLabel: "Description",
        tagsLabel: "Tags (comma separated)",
        visibilityLabel: "Visibility",
        visibility: ["Public", "Unlisted"],
        next: "Go to Publish Summary"
      },
      step5: {
        title: "Publish to Mangako",
        desc: "Publishing will automatically create a listing entry on the Mangako marketplace index.",
        publish: "Publish to Mangako",
        confirmation: "All fields are ready. Do you want to publish now?"
      }
    },
    published: {
      success: "Publishing Complete",
      subtext: "Your work has been successfully listed and indexed on the Mangako marketplace node.",
      viewManga: "View on Mangako",
      viewLibrary: "Back to Workspace"
    }
  }
};
