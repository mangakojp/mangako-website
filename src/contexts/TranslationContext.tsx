import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'jp' | 'en';

interface TranslationContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => any;
}

const translations = {
    jp: {
        nav: {
            world: "世界観",
            collection: "コレクション",
            marketplace: "マーケット",
            archive: "アーカイブ",
            journal: "ジャーナル",
            community: "コミュニティ",
            artists: "作家",
            invite: "先行案内",
            cta: "「先行登録」",
            subtitle: "プレミアム・マンガ・マーケットプレイス"
        },
        hero: {
            tags: ["真贋確認済み", "来歴管理"],
            titleLine1: "物語の原典を、",
            titleLine2: "その手に。",
            subtitle: "「シークエンスの魂。」",
            desc: "Mangakoは、希少な紙版マンガ、限定アート、完結セットを蒐集・閲覧・売買できる、コレクターのためのプレミアム・マーケットプレイスです。マンガを単なる消費物ではなく、価値ある作品として扱います。",
            ctaPrimary: "「ギャラリーを見る」",
            ctaSecondary: "「先行案内に参加」",
            imageTag: "真贋確認済\n第一巻・完結セット",
        },
        philosophy: {
            words: ["「蒐集」", "「閲覧」", "「売買」", "「継承」"],
            vertical1: "所有する悦び",
            vertical2: "価値の継承",
            title: "Mangakoは、マンガを読むためだけの場所ではありません。",
            desc: "作品を所有し、受け継ぎ、価値を見出すための新しいアーカイブです。線、余白、紙、構図。そのすべてを“作品”として捉えるために、コレクターが本当に必要とする情報と体験を、美しく一つに束ねます。"
        },
        gallery: {
            titleLine1: "所有する悦びを、",
            titleLine2: "再定義する。",
            desc: "紙の存在感、印刷の熱、線の強度まで。ギャラリーに並ぶのは、単なる「本」ではなく、来歴と真贋が証明された美術品としてのマンガです。",
            button: "「すべて見る」",
            items: [
                { title: "初版候補", subtitle: "注目の出品" },
                { title: "限定アート", subtitle: "稀少" },
                { title: "アーカイブ", subtitle: "収蔵候補" },
                { title: "限定出品", subtitle: "新着" }
            ]
        },
        pillars: {
            title: "Mangakoを構成する、3つの体験",
            items: [
                { title: "蒐集", desc: "「初版、限定版、完結セット、証明付きアートを厳選して出会える。」", label: "限定" },
                { title: "閲覧", desc: "「作品の空気感を損なわない、静かで没入感のある鑑賞体験。」", label: "注目" },
                { title: "売買", desc: "「真贋確認と来歴情報を伴う、信頼性の高い流通体験。」", label: "新着" }
            ],
            phasePrefix: "Phase"
        },
        provenance: {
            label: "Authentication Engine",
            titleLine1: "価値は、情報によって",
            titleLine2: "守られる。",
            desc: "真正性、来歴、保存性、市場流動性。Mangakoは、コレクターが本当に必要とする情報と体験を、美しく一つに束ねます。",
            blocks: [
                { title: "真贋確認", info: "Verified Authentic", icon: "01" },
                { title: "来歴記録", info: "Provenance Data", icon: "02" },
                { title: "保存価値", info: "Archival Grade", icon: "03" },
                { title: "流動性", info: "Market Liquidity", icon: "04" }
            ]
        },
        immersive: {
            title: "読むためだけではない。\n感じるための\n体験へ。",
            desc: "線、余白、紙、構図。そのすべてを“作品”として捉えるために、Mangakoはギャラリーのような閲覧体験を設計します。",
            label: "Cinematic Viewing"
        },
        archive: {
            title: "Selected Archive",
            items: [
                { title: "注目のアーカイブ", desc: "第一部 完結セット 初版", date: "2024.10", ref: "ARCH-001" },
                { title: "今週の厳選出品", desc: "作者直筆 サイン入り", date: "2024.11", ref: "ARCH-024" },
                { title: "収蔵候補", desc: "限定装丁版 全巻綴じ", date: "2024.12", ref: "ARCH-089" }
            ],
            viewDetails: "View Details"
        },
        ctaSection: {
            title: "「次の名作との出会いを、いち早く。」",
            desc: "限定ドロップ、先行出品、招待制コミュニティ、アーカイブ公開の案内を受け取る。",
            button: "先行登録する",
            footer: "招待制コレクター・コミュニティ"
        },
        footer: {
            desc: "物語の原典を、その手に。",
            subtitle: "プレミアム・マンガ・マーケットプレイス",
            terms: "利用規約",
            legal: "Curated Collectibles Archive."
        },
        about: {
            heroTitle: "Archive & Ethos",
            heroSubtitle: "継承される意志。",
            heroDesc: "Mangakoは、紙版マンガを単なる消費物ではなく、価値ある美術品として扱い、次世代へ受け継ぐためのプラットフォームです。",
            philosophyTitle: "Brand Philosophy",
            philosophySubtitle: "物語の原典を守る。",
            philosophyTexts: [
                "私たちは、作家が描いた一線、編集者がこだわった余白、そして時代を超えて残る紙の質感に、変えがたい価値があると考えています。",
                "デジタル化が進む現代において、物理的な「原典」を持つことの悦びを、最新の技術と美学で再定義します。"
            ],
            philosophyWords: ["「真実」", "「保存」", "「悦び」", "「継承」"],
            valueTitle: "Value Protection",
            valueSubtitle: "価値を守るための、四つの柱。",
            valueDesc: "Mangakoでは、すべての出品物に対して厳格な基準を設け、コレクターの資産価値を保護します。",
            pillars: [
                { title: "真正性", desc: "専門の鑑定士による真贋確認を行い、証明書を発行します。" },
                { title: "来歴", desc: "ブロックチェーン技術を用いた透明性の高い取引履歴を記録します。" },
                { title: "保存", desc: "最適な保管環境と梱包技術を、パートナーと共に提供します。" },
                { title: "流動性", desc: "真の価値を理解するコレクターが集まる、健全な市場を形成します。" }
            ],
            quote: "マンガは、私たちが共有した記憶の断片であり、未来に託されるべき遺産である。",
            quoteAuthor: "Mangako Editorial"
        },
        collection: {
            heroTitle: "The Archive",
            heroSubtitle: "収蔵品の閲覧。",
            heroDesc: "Mangakoが厳選した、歴史的・芸術的価値の高いマンガ・コレクションをご覧ください。",
            categories: [
                { id: "gold", name: "Gold Edition" },
                { id: "first", name: "初版セット" },
                { id: "rare", name: "稀少本" },
                { id: "art", name: "限定アート" }
            ],
            items: [
                { id: "001", title: "龍の遺産 第1巻", category: "gold", series: "Dragon Heritage", ref: "ARCH-001", era: "1980s", price: "¥580,000", type: "Single Issue", condition: "S-Grade", provenance: "Private Collection", image: "/images/collection/dragon_heritage.png" },
                { id: "002", title: "鋼の王国 完結セット", category: "first", series: "Steel Kingdom", ref: "ARCH-002", era: "1990s", price: "¥1,200,000", type: "Complete Set", condition: "A+", provenance: "Archive Node", image: "/images/collection/steel_kingdom.png" },
                { id: "003", title: "静寂の森 限定原画", category: "art", series: "Silent Forest", ref: "ARCH-003", era: "2010s", price: "¥3,400,000", type: "Original Art", condition: "Museum Grade", provenance: "Artist Direct", image: "/images/collection/silent_forest.png" }
            ],
            resultsCount: "件の収蔵品"
        },
        collectionDetail: {
            title: "龍の遺産 第1巻",
            series: "Dragon Heritage",
            badges: ["Gold Edition", "Verified"],
            descTexts: [
                "1984年に刊行された、ファンタジーマンガの金字塔「龍の遺産」の初版第1巻です。",
                "保存状態は極めて良好で、当時の印刷の色鮮やかさを今に伝えています。"
            ],
            metadata: [
                { label: "Edition", value: "Primary Edition" },
                { label: "Released", value: "1984.05.21" },
                { label: "Condition", value: "S-Grade Archive" },
                { label: "Provenance", value: "Private Collection B" }
            ],
            provenanceTitle: "Trust & Origin",
            provenanceSubtitle: "来歴の証明。",
            provenanceSteps: [
                { date: "1984.05", title: "刊行", desc: "出版社より初版発行" },
                { date: "2012.08", title: "移転", desc: "著名コレクターAよりBへ" },
                { date: "2024.01", title: "検証", desc: "Mangakoによる真贋確認完了" }
            ],
            ctaInquire: "この作品について問い合わせる",
            relatedTitle: "Related Works",
            relatedSubtitle: "関連する収蔵品。",
            relatedItems: [],
            image: "/images/collection/dragon_heritage.png"
        },
        marketplace: {
            heroTitle: "The Exchange",
            heroSubtitle: "価値の交換。",
            heroDesc: "厳選されたコレクターによる、信頼性の高い出品アイテムを閲覧・購入できます。",
            featuredTitle: "Featured Drop",
            featuredSubtitle: "注目の出品作品。",
            featuredItemTitle: "伝説の鼓動 第1巻 (サイン入)",
            featuredItemDesc: "作者直筆サイン入りの稀少な初版です。来歴証明書付き。",
            featuredItemPrice: "¥8,900,000",
            featuredItemImage: "/images/marketplace/pulse_of_legend.png",
            featuredItemSlug: "featured-item",
            listingTitle: "Current Listings",
            listingSubtitle: "現在取引可能な作品。",
            filterPills: ["新着", "価格順", "限定版"],
            listings: [
                { title: "星の旅人 1-10巻", price: "¥120,000", condition: "A+", seller: "Collector 032" },
                { title: "紅の騎士 全巻セット", price: "¥450,000", condition: "S", seller: "Archive Node" }
            ]
        },
        marketDetail: {
            title: "伝説の鼓動 第1巻 (サイン入)",
            ref: "LIST-992",
            price: "¥8,900,000",
            image: "/images/marketplace/pulse_of_legend.png",
            descTexts: [
                "この作品は、1992年の連載開始時に数部のみ作成された、作者サイン入りの記念本です。",
                "保存状態は完璧で、専用の防湿ケースで管理されています。"
            ],
            summary: [
                { label: "Estimated Value", value: "¥8.5M - ¥9.2M" },
                { label: "Authenticity", value: "Verified S-Class" }
            ],
            verificationTitle: "Authenticity Protocol",
            verificationDesc: "Mangakoの専門チームが物理鑑定と来歴調査を完了しています。",
            trustTags: ["鑑定済み", "保険付帯", "匿名配送"],
            ctaInquire: "購入の意思を伝える",
            ctaReserve: "優先交渉権を予約"
        },
        artists: {
            heroTitle: "The Creators",
            heroSubtitle: "筆致の源流。",
            heroDesc: "マンガの歴史を築き、現在進行体で更新し続ける偉大な作家たちを紹介します。",
            featuredArtist: "K. MURAYAMA",
            featuredSubtitle: "作家スポットライト。",
            featuredTexts: [
                "細密な線と圧倒的な構図で、90年代のSFファンタジーに革命をもたらした巨匠。",
                "その原画や初版セットは、現在マーケットで最も需要の高いコレクションの一つです。"
            ],
            featuredImage: "/images/artists/k_murayama.png",
            featuredArtistSlug: "k-murayama",
            viewProfile: "作家の詳細を見る",
            indexTitle: "Artist Collective",
            indexSubtitle: "アーカイブに登録された作家。",
            list: [
                { name: "S. KAWAGUCHI", style: "Cyberpunk", count: "12 ARCHIVES" },
                { name: "REI OKAMOTO", style: "Drama", count: "8 ARCHIVES" }
            ]
        },
        artistDetail: {
            name: "K. MURAYAMA",
            subtitle: "線と空間の支配者。",
            image: "/images/artists/k_murayama.png",
            studioImage: "/images/artists/studio_workspace.png",
            bioTexts: [
                "1972年生まれ。緻密な背景描写とダイナミックなアクションシーンの対比で知られる。",
                "彼の作品「龍の遺産」は、世界中で1億部以上のセールスを記録している。"
            ],
            milestones: [
                { year: "1991", title: "デビュー", desc: "新人賞受賞" },
                { year: "2005", title: "文化庁メディア芸術祭", desc: "大賞受賞" }
            ],
            keyQuote: "描き続けることでしか、見えない景色がある。"
        },
        sell: {
            heroTitle: "Consignment",
            heroSubtitle: "価値を託す。",
            heroDesc: "あなたの貴重なコレクションを、真の価値を理解する次のオーナーへ繋ぐお手伝いをします。",
            reasons: [
                { title: "適正な評価", desc: "市場データに基づき、あなたのコレクションの真の価値を算出します。" },
                { title: "万全のサポート", desc: "配送から撮影、鑑定まで、すべてのプロセスを代行します。" },
                { title: "グローバルの繋がり", desc: "世界中の情熱的なコレクターへリーチできます。" }
            ],
            processTitle: "The Process",
            processSubtitle: "委託販売の流れ。",
            steps: [
                { title: "簡易査定", desc: "フォームからアイテム情報を送信してください。" },
                { title: "配送・鑑定", desc: "専門スタッフによる詳細な鑑定を行います。" },
                { title: "出品公開", desc: "Mangako上であなたのコレクションが世界へ公開されます。" }
            ],
            formTitle: "Inquiry Form",
            formDesc: "委託販売をご希望の方は、下記フォームよりお気軽にご相談ください。",
            fields: { name: "氏名", email: "メールアドレス", itemTitle: "アイテム名", notes: "詳細/備考" },
            submitButton: "査定を申し込む"
        },
        trade: {
            heroTitle: "Trade & Exchange",
            heroSubtitle: "等価の交換。",
            heroDesc: "コレクター同士による、資産価値に基づいた等価交換のリクエストを募集・仲介します。",
            howItWorksTitle: "How It Works",
            howItWorksSubtitle: "交換の仕組み。",
            steps: [
                { title: "リクエスト", desc: "あなたの所有物と、希望する作品を登録します。" },
                { title: "マッチング", desc: "条件が合致するコレクターが見つかった場合、通知します。" },
                { title: "仲介検証", desc: "双方のアイテムをMangakoが預かり、鑑定を行います。" }
            ],
            scenariosTitle: "Trade Scenarios",
            scenariosSubtitle: "成立した交換事例。",
            scenarios: [
                { title: "1980s 初版セット ↔ 2000s 限定アート", desc: "時代を超えた価値の再編が行われました。" }
            ]
        },
        provenancePage: {
            heroTitle: "The Authority",
            heroSubtitle: "来歴の証明。",
            heroDesc: "Mangakoが提供する、真正性と来歴を保証するための技術とプロセスの詳細です。",
            processTitle: "Verification Layers",
            processSubtitle: "多層的な検証プロセス。",
            layers: [
                { title: "物理鑑定", desc: "紙質、インク、印刷形式などを専門家が詳細に分析します。" },
                { title: "デジタル記録", desc: "鑑定結果を不変のデジタルレコードとしてブロックチェーンに記録します。" }
            ],
            standards: [
                { title: "S-Class", desc: "完璧な保存状態と、全行程の来歴が証明されています。" },
                { title: "Archive Grade", desc: "市場流動性が極めて高く、投資価値が安定しています。" }
            ]
        },
        archivePage: {
            heroTitle: "Archive Index",
            heroSubtitle: "歴史の目録。",
            heroDesc: "過去から現在に至るまで、Mangakoが検証・公開した全アーカイブのデータベースです。",
            entries: [
                { ref: "ARCH-001", era: "1980s", title: "龍の遺産", desc: "ファンタジーの夜明けを告げた名作。" },
                { ref: "ARCH-024", era: "1990s", title: "鋼の王国", desc: "緻密な設定と心理描写が光る傑作。" }
            ],
            exploreLink: "アーカイブを探索する",
            archivalNote: "記録は、沈黙を守りながら真実を語り続ける。"
        },
        journalPage: {
            heroTitle: "The Journal",
            heroSubtitle: "視点と考察。",
            heroDesc: "マンガの芸術性、市場動向、保存技術に関する専門的な考察を公開します。",
            featuredTitle: "線の考古学",
            featuredSubtitle: "巻頭コラム。",
            featuredExcerpt: "私たちが一つのコマに見るものは、単なる絵ではなく、その時代の空気そのものである。",
            readArticle: "記事を読む",
            latestTitle: "Latest Essays",
            latestSubtitle: "最新の記事。",
            posts: [
                { tag: "Analysis", title: "90年代SFマンガの再評価", date: "2024.12.01", excerpt: "なぜ今、かつてのサイバーパンクが再び注目されているのか。" }
            ]
        },
        journalDetail: {
            title: "線の考古学",
            subtitle: "一コマに宿る時代の記憶について。",
            introTexts: ["私たちは、マンガを読み飛ばすことに慣れすぎてしまった。しかし、その一線には..."],
            author: "Editorial Team",
            date: "2024.12.01",
            bodySections: [
                { heading: "紙という器", content: "デジタルでは再現できない、インクの滲みと重なり。" }
            ],
            pullQuote: "物理的なマンガは、時の流れに対する抵抗である。"
        },
        communityPage: {
            heroTitle: "The Community",
            heroSubtitle: "私的な円環。",
            heroDesc: "真の価値を共有する、選ばれたコレクターのための限定的なコミュニティです。",
            accessTitle: "Private Access",
            accessSubtitle: "会員限定の特典。",
            membershipQuote: "価値を語る場があって初めて、所有は悦びへと昇華される。",
            benefits: [
                { title: "優先通知", desc: "希少なドロップを一般公開前に確保できます。" },
                { title: "限定イベント", desc: "作家や鑑定士を招いた、非公開の座談会に参加できます。" }
            ],
            joinTitle: "Request Access",
            joinSubtitle: "入会申請。",
            joinDesc: "現在、新規会員の募集は招待制となっております。申請をいただいた方から順に審査を行います。",
            requestAccess: "入会を申請する"
        },
        faqPage: {
            heroTitle: "FAQ",
            heroSubtitle: "よくある質問。",
            heroDesc: "ご利用に関する疑問点をご確認ください。",
            categories: [
                {
                    title: "General",
                    subtitle: "プラットフォームについて。",
                    questions: [
                        { question: "Mangakoとはどのようなサービスですか？", answer: "プレミアムなマンガの蒐集・売買のための専門プラットフォームです。" }
                    ]
                }
            ],
            supportTitle: "Still have questions?",
            supportDesc: "解決しない場合は、サポートチームまでお問い合わせください。",
            contactSupport: "サポートに連絡"
        },
        contactPage: {
            heroTitle: "Contact Us",
            heroSubtitle: "お問い合わせ。",
            heroDesc: "真贋の相談、委託販売、入会申請など、こちらよりご連絡ください。",
            formTitle: "Send Inquiry",
            formSubtitle: "メッセージを送信。",
            fields: { name: "氏名", email: "メールアドレス", type: "種別", message: "本文", typeOptions: ["真贋鑑定の相談", "委託販売について", "入会のご相談"] },
            submitButton: "送信する",
            infoTitle: "Other Ways",
            infoSubtitle: "その他の連絡方法。",
            infoBlocks: [{ title: "Email", desc: "support@mangako.jp" }]
        },
        earlyAccessPage: {
            heroTitle: "Early Access",
            heroSubtitle: "夜明けを待つ。",
            heroDesc: "Mangakoの正式リリースに先駆け、限定的なアクセス権を確保してください。",
            perksTitle: "Priority Membership",
            perksSubtitle: "先行登録者の特典。",
            perks: [
                { title: "限定ドロップ", desc: "リリース記念の超希少アーカイブの購入権。" }
            ],
            formTitle: "Join the Queue",
            formDesc: "メールアドレスを登録して、最新情報とアクセス権を受け取る。",
            joinButton: "先行登録リストに参加"
        }
    },
    en: {
        nav: {
            world: "World",
            collection: "Collection",
            marketplace: "Market",
            archive: "Archive",
            journal: "Journal",
            community: "Community",
            artists: "Artists",
            invite: "Early Access",
            cta: "Join",
            subtitle: "Premium Manga Marketplace"
        },
        hero: {
            tags: ["Verified Authenticity", "Provenance Tracked"],
            titleLine1: "Hold the original source",
            titleLine2: "of the story.",
            subtitle: "The soul of the sequence.",
            desc: "Mangako is a premium marketplace for collectors to acquire, experience, and trade rare physical manga editions, complete sets, and limited artwork. We treat manga not merely as a consumable, but as valuable works of art.",
            ctaPrimary: "Explore the Gallery",
            ctaSecondary: "Join Early Access",
            imageTag: "Verified Authentic\nVol.1 Complete Set",
        },
        philosophy: {
            words: ["Collect", "Read", "Trade", "Preserve"],
            vertical1: "The Joy of Ownership",
            vertical2: "Inheriting Value",
            title: "Manga not only to read, but to own.",
            desc: "A new archive to own, inherit, and discover the true value of manga. Lines, negative space, paper, composition. To treat all of this as a 'work of art', Mangako beautifully bundles the information and experience that collectors truly need."
        },
        gallery: {
            titleLine1: "Redefining the joy",
            titleLine2: "of ownership.",
            desc: "The physical presence of paper, the heat of the print, the strength of the strokes. What lines our gallery are not simply 'books', but manga as authenticated artworks with proven provenance.",
            button: "View All",
            items: [
                { title: "First Edition", subtitle: "Featured" },
                { title: "Limited Art", subtitle: "Rare" },
                { title: "Archive", subtitle: "Candidate" },
                { title: "Limited Run", subtitle: "New Arrival" }
            ]
        },
        pillars: {
            title: "The Three Pillars of Mangako",
            items: [
                { title: "Collect", desc: "Discover first editions, complete sets, limited releases, and authenticated artwork.", label: "Limited" },
                { title: "Read", desc: "Experience manga through a quiet, immersive, gallery-like interface.", label: "Featured" },
                { title: "Trade", desc: "Exchange collectible works with provenance, trust, and market clarity.", label: "New" }
            ],
            phasePrefix: "Pillar"
        },
        provenance: {
            label: "Authentication Engine",
            titleLine1: "Value is protected",
            titleLine2: "by information.",
            desc: "Authenticity, provenance, preservation, and market liquidity. Mangako elegantly unifies the information and experiences that true collectors require.",
            blocks: [
                { title: "Verification", info: "Verified Authentic", icon: "01" },
                { title: "Provenance", info: "Provenance Data", icon: "02" },
                { title: "Preservation", info: "Archival Grade", icon: "03" },
                { title: "Liquidity", info: "Market Liquidity", icon: "04" }
            ]
        },
        immersive: {
            title: "Built not just for reading,\nbut for feeling.",
            desc: "Lines, negative space, paper, composition. To capture it all as an artwork, Mangako designs an immersive, gallery-like viewing experience.",
            label: "Cinematic Viewing"
        },
        archive: {
            title: "Selected Archive",
            items: [
                { title: "Featured Archive", desc: "Part 1 Complete Set, First Edition", date: "Oct 2024", ref: "ARCH-001" },
                { title: "Weekly Selection", desc: "Autographed by the Author", date: "Nov 2024", ref: "ARCH-024" },
                { title: "Archive Candidate", desc: "Limited Bound Edition, Full Set", date: "Dec 2024", ref: "ARCH-089" }
            ],
            viewDetails: "View Details"
        },
        ctaSection: {
            title: "Be first to discover the next masterpiece.",
            desc: "Get updates on limited drops, early listings, invite-only community access, and archive releases.",
            button: "Join Early Access",
            footer: "Invite-only Collector Community"
        },
        footer: {
            desc: "Hold the original source of the story.",
            subtitle: "Premium Manga Marketplace",
            terms: "Terms of Service",
            legal: "Curated Collectibles Archive."
        },
        about: {
            heroTitle: "Archive & Ethos",
            heroSubtitle: "A shared legacy.",
            heroDesc: "Mangako is a platform where paper manga is treated not just as a commodity, but as a fine art asset to be preserved for the next generation.",
            philosophyTitle: "Brand Philosophy",
            philosophySubtitle: "Protecting the Source.",
            philosophyTexts: [
                "We believe there is irreplaceable value in the lines drawn by the artist, the negative space curated by the editor, and the texture of paper that survives through time.",
                "In an increasingly digital world, we redefine the joy of owning the physical 'source' through modern technology and aesthetics."
            ],
            philosophyWords: ["Truth", "Preserve", "Joy", "Inherit"],
            valueTitle: "Value Protection",
            valueSubtitle: "Four pillars of preservation.",
            valueDesc: "At Mangako, we establish rigorous standards for every listing to protect the asset value for collectors.",
            pillars: [
                { title: "Authenticity", desc: "Verified by expert appraisers with formal certification issued." },
                { title: "Provenance", desc: "Transparent transaction history recorded via blockchain technology." },
                { title: "Preservation", desc: "Optimal storage and packaging solutions provided with our partners." },
                { title: "Liquidity", desc: "A healthy marketplace where collectors who understand true value gather." }
            ],
            quote: "Manga is a fragment of our shared memory, a legacy meant to be entrusted to the future.",
            quoteAuthor: "Mangako Editorial"
        },
        collection: {
            heroTitle: "The Archive",
            heroSubtitle: "Browse the Vault.",
            heroDesc: "Explore Mangako's curated collection of historical and artistically significant manga assets.",
            categories: [
                { id: "gold", name: "Gold Edition" },
                { id: "first", name: "First Edition Sets" },
                { id: "rare", name: "Rare Volumes" },
                { id: "art", name: "Limited Art" }
            ],
            items: [
                { id: "001", title: "Dragon Heritage Vol. 1", category: "gold", series: "Dragon Heritage", ref: "ARCH-001", era: "1980s", price: "¥580,000", type: "Single Issue", condition: "S-Grade", provenance: "Private Collection", image: "/images/collection/dragon_heritage.png" },
                { id: "002", title: "Steel Kingdom Complete Set", category: "first", series: "Steel Kingdom", ref: "ARCH-002", era: "1990s", price: "¥1,200,000", type: "Complete Set", condition: "A+", provenance: "Archive Node", image: "/images/collection/steel_kingdom.png" },
                { id: "003", title: "Silent Forest Limited Art", category: "art", series: "Silent Forest", ref: "ARCH-003", era: "2010s", price: "¥3,400,000", type: "Original Art", condition: "Museum Grade", provenance: "Artist Direct", image: "/images/collection/silent_forest.png" }
            ],
            resultsCount: "archived items"
        },
        collectionDetail: {
            title: "Dragon Heritage Vol.1",
            series: "Dragon Heritage",
            badges: ["Gold Edition", "Verified"],
            descTexts: [
                "The primary first edition of the fantasy masterpiece 'Dragon Heritage', published in 1984.",
                "The condition is exceptional, preserving the vividness of the original print."
            ],
            metadata: [
                { label: "Edition", value: "Primary Edition" },
                { label: "Released", value: "May 21, 1984" },
                { label: "Condition", value: "S-Grade Archive" },
                { label: "Provenance", value: "Private Collection B" }
            ],
            provenanceTitle: "Trust & Origin",
            provenanceSubtitle: "Proof of History.",
            provenanceSteps: [
                { date: "May 1984", title: "Published", desc: "First edition released by publisher" },
                { date: "Aug 2012", title: "Transfer", desc: "Acquired from prominent Collector A" },
                { date: "Jan 2024", title: "Verification", desc: "Physical authenticity verified by Mangako" }
            ],
            ctaInquire: "Inquire about this piece",
            relatedTitle: "Related Works",
            relatedSubtitle: "From the same archive.",
            relatedItems: [],
            image: "/images/collection/dragon_heritage.png"
        },
        marketplace: {
            heroTitle: "The Exchange",
            heroSubtitle: "Value in Motion.",
            heroDesc: "Browse and acquire high-trust listings from verified collectors globally.",
            featuredTitle: "Featured Drop",
            featuredSubtitle: "Highlight of the week.",
            featuredItemTitle: "Pulse of Legend Vol.1 (Signed)",
            featuredItemDesc: "A rare first edition autographed by the author. Includes full provenance.",
            featuredItemPrice: "¥8,900,000",
            featuredItemImage: "/images/marketplace/pulse_of_legend.png",
            featuredItemSlug: "featured-item",
            listingTitle: "Current Listings",
            listingSubtitle: "Works available for acquisition.",
            filterPills: ["Newest", "Price", "Limited"],
            listings: [
                { title: "Star Voyager 1-10", price: "¥120,000", condition: "A+", seller: "Collector 032" },
                { title: "Crimson Knight Full Set", price: "¥450,000", condition: "S", seller: "Archive Node" }
            ]
        },
        marketDetail: {
            title: "Pulse of Legend Vol.1 (Signed)",
            ref: "LIST-992",
            price: "¥8,900,000",
            image: "/images/marketplace/pulse_of_legend.png",
            descTexts: [
                "One of few signed commemorative copies produced at start of serialization in 1992.",
                "Flawless condition, managed in a dedicated climate-controlled vault."
            ],
            summary: [
                { label: "Estimated Value", value: "¥8.5M - ¥9.2M" },
                { label: "Authenticity", value: "Verified S-Class" }
            ],
            verificationTitle: "Authenticity Protocol",
            verificationDesc: "Mangako's specialized team has completed physical appraisal and provenance research.",
            trustTags: ["Appraised", "Insured", "Anonymous Shipping"],
            ctaInquire: "Inquire to Purchase",
            ctaReserve: "Reserve Priority Rights"
        },
        artists: {
            heroTitle: "The Creators",
            heroSubtitle: "Source of the Stroke.",
            heroDesc: "Introducing the great artists who built manga history and continue to redefine it.",
            featuredArtist: "K. MURAYAMA",
            featuredSubtitle: "Artist Spotlight.",
            featuredTexts: [
                "A master who revolutionized 90s SF fantasy with intricate lines and overwhelming composition.",
                "His original art and first edition sets are among the most sought-after collections today."
            ],
            featuredImage: "/images/artists/k_murayama.png",
            featuredArtistSlug: "k-murayama",
            viewProfile: "View creator profile",
            indexTitle: "Artist Collective",
            indexSubtitle: "Archived creators.",
            list: [
                { name: "S. KAWAGUCHI", style: "Cyberpunk", count: "12 ARCHIVES" },
                { name: "REI OKAMOTO", style: "Drama", count: "8 ARCHIVES" }
            ]
        },
        artistDetail: {
            name: "K. MURAYAMA",
            subtitle: "Master of Lines and Space.",
            image: "/images/artists/k_murayama.png",
            studioImage: "/images/artists/studio_workspace.png",
            bioTexts: [
                "Born in 1972. Known for the contrast between meticulous background detail and dynamic action.",
                "His work 'Dragon Heritage' has sold over 100 million copies worldwide."
            ],
            milestones: [
                { year: "1991", title: "Debut", desc: "Awarded newcomer prize" },
                { year: "2005", title: "Japan Media Arts Festival", desc: "Grand Prize winner" }
            ],
            keyQuote: "There are views you can only see by continuing to draw."
        },
        sell: {
            heroTitle: "Consignment",
            heroSubtitle: "Entrust the Value.",
            heroDesc: "We help connect your precious collection to the next owner who understands its true worth.",
            reasons: [
                { title: "Fair Valuation", desc: "Calculated based on global market data for collectible assets." },
                { title: "Full Support", desc: "We manage the entire process, from logistics to photography and appraisal." },
                { title: "Global Reach", desc: "Reach passionate collectors across the globe." }
            ],
            processTitle: "The Process",
            processSubtitle: "Consignment evolution.",
            steps: [
                { title: "Initial Appraisal", desc: "Submit your item information via the form." },
                { title: "Logistics & Audit", desc: "Detailed physical appraisal by our specialized staff." },
                { title: "Live Listing", desc: "Your collection goes live to the global market on Mangako." }
            ],
            formTitle: "Inquiry Form",
            formDesc: "Interested in consignment? Please contact us via the form below.",
            fields: { name: "Name", email: "Email", itemTitle: "Item Title", notes: "Details/Notes" },
            submitButton: "Request Appraisal"
        },
        trade: {
            heroTitle: "Trade & Exchange",
            heroSubtitle: "Equivalence.",
            heroDesc: "Facilitating asset-based exchange requests between verified collectors.",
            howItWorksTitle: "How It Works",
            howItWorksSubtitle: "The mechanism of exchange.",
            steps: [
                { title: "Request", desc: "Register your assets and the works you wish to acquire." },
                { title: "Matching", desc: "We notify you when a matching collector profile is found." },
                { title: "Mediation", desc: "Mangako secures both items for verification before exchange." }
            ],
            scenariosTitle: "Trade Scenarios",
            scenariosSubtitle: "Established examples.",
            scenarios: [
                { title: "1980s First Edition ↔ 2000s Limited Art", desc: "A cross-era reallocation of value." }
            ]
        },
        provenancePage: {
            heroTitle: "The Authority",
            heroSubtitle: "Verified Origin.",
            heroDesc: "Details on the technology and processes Mangako uses to guarantee authenticity.",
            processTitle: "Verification Layers",
            processSubtitle: "Multi-layered audit.",
            layers: [
                { title: "Physical Appraisal", desc: "Experts analyze paper quality, ink, and print methods." },
                { title: "Digital Record", desc: "Results recorded on the blockchain as immutable records." }
            ],
            standards: [
                { title: "S-Class", desc: "Flawless condition with full verified provenance." },
                { title: "Archive Grade", desc: "High market liquidity and stable investment value." }
            ]
        },
        archivePage: {
            heroTitle: "Archive Index",
            heroSubtitle: "Index of Records.",
            heroDesc: "The complete database of all archives verified and published by Mangako.",
            entries: [
                { ref: "ARCH-001", era: "1980s", title: "Dragon Heritage", desc: "The masterpiece that signaled the dawn of fantasy." },
                { ref: "ARCH-024", era: "1990s", title: "Steel Kingdom", desc: "A masterful work of intricate settings and psychology." }
            ],
            exploreLink: "Explore the Archive",
            archivalNote: "Records speak the truth while maintaining their silence."
        },
        journalPage: {
            heroTitle: "The Journal",
            heroSubtitle: "Perspective.",
            heroDesc: "Expert insights on manga artistry, market trends, and preservation technology.",
            featuredTitle: "Archaeology of the Line",
            featuredSubtitle: "Editorial Column.",
            featuredExcerpt: "What we see in a single panel is not just a drawing, but the atmosphere of the era itself.",
            readArticle: "Read Essay",
            latestTitle: "Latest Essays",
            latestSubtitle: "Fresh perspectives.",
            posts: [
                { tag: "Analysis", title: "Revisiting 90s Cyberpunk", date: "Dec 01, 2024", excerpt: "Why the cyberpunk of the past is gaining renewed attention today." }
            ]
        },
        journalDetail: {
            title: "Archaeology of the Line",
            subtitle: "On memories of an era dwelling in a single panel.",
            introTexts: ["We have become too used to skimming through manga. But in that single line..."],
            author: "Editorial Team",
            date: "Dec 01, 2024",
            bodySections: [
                { heading: "Paper as a Vessel", content: "The bleeding and layering of ink that digital cannot replicate." }
            ],
            pullQuote: "Physical manga is a form of resistance against the flow of time."
        },
        communityPage: {
            heroTitle: "The Community",
            heroSubtitle: "Private Circle.",
            heroDesc: "An exclusive community for selected collectors who share the same values.",
            accessTitle: "Private Access",
            accessSubtitle: "Membership Benefits.",
            membershipQuote: "Ownership ascends to joy only when there is a circle to discuss its value.",
            benefits: [
                { title: "Priority Notice", desc: "Secure rare drops before they are opened to the public." },
                { title: "Global Events", desc: "Private sessions with creators, curators, and appraisers." }
            ],
            joinTitle: "Request Access",
            joinSubtitle: "Membership Application.",
            joinDesc: "Membership is currently by invitation only. We audit applications as they are received.",
            requestAccess: "Apply for Membership"
        },
        faqPage: {
            heroTitle: "FAQ",
            heroSubtitle: "Guidance.",
            heroDesc: "Find answers to frequently asked questions about the platform.",
            categories: [
                {
                    title: "General",
                    subtitle: "About the platform.",
                    questions: [
                        { question: "What is Mangako?", answer: "A specialized platform for collecting and trading premium manga assets." }
                    ]
                }
            ],
            supportTitle: "Still have questions?",
            supportDesc: "Our support team is available for further assistance.",
            contactSupport: "Contact Support"
        },
        contactPage: {
            heroTitle: "Contact Us",
            heroSubtitle: "Communication.",
            heroDesc: "Inquiries regarding appraisals, consignments, or membership applications.",
            formTitle: "Send Inquiry",
            formSubtitle: "Dispatch message.",
            fields: { name: "Name", email: "Email", type: "Type", message: "Message", typeOptions: ["Appraisal Inquiry", "Consignment Inquiry", "Membership Inquiry"] },
            submitButton: "Send Message",
            infoTitle: "Other Ways",
            infoSubtitle: "Alternative channels.",
            infoBlocks: [{ title: "Email", desc: "support@mangako.jp" }]
        },
        earlyAccessPage: {
            heroTitle: "Early Access",
            heroSubtitle: "Awaiting the Dawn.",
            heroDesc: "Secure your priority access preceding the official release of Mangako.",
            perksTitle: "Priority Membership",
            perksSubtitle: "Early Access Benefits.",
            perks: [
                { title: "Exclusive Drops", desc: "Purchase rights for rare release-day archives." }
            ],
            formTitle: "Join the Queue",
            formDesc: "Register your email to receive updates and access credentials.",
            joinButton: "Join Priority List"
        }
    }
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>('jp');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Load from local storage on mount
        const saved = localStorage.getItem('mangako-language');
        if (saved === 'jp' || saved === 'en') {
            setLanguageState(saved);
        }
        setIsMounted(true);
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('mangako-language', lang);
    };

    const t = (path: string) => {
        const keys = path.split('.');
        let result: any = translations[language];
        for (const key of keys) {
            if (result === undefined) return path; // fallback
            result = result[key];
        }
        return result;
    };

    // Prevent hydration mismatch
    if (!isMounted) return null;

    return (
        <TranslationContext.Provider value={{ language, setLanguage, t }}>
            <div className={language === 'en' ? 'font-en' : ''}>
                {children}
            </div>
        </TranslationContext.Provider>
    );
};

export const useTranslation = () => {
    const context = useContext(TranslationContext);
    if (context === undefined) {
        throw new Error('useTranslation must be used within a TranslationProvider');
    }
    return context;
};
