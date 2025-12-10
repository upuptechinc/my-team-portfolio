import { Star, CheckCircle2, Quote, Building2 } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: '田中 美咲',
    role: '代表取締役',
    company: 'テックスタート株式会社',
    image: 'https://i.pravatar.cc/150?img=47',
    rating: 5,
    verified: true,
    date: '2週間前',
    text: 'UpUp&Up Tech Incには、当社のスタートアップ向けブロックチェーンプラットフォームの開発をお願いしました。Web3開発における専門知識と細部への配慮は期待を超えるものでした。チームはプロフェッショナルで、レスポンスも迅速、納期も守っていただきました。',
    project: 'ブロックチェーンプラットフォーム開発',
  },
  {
    id: 2,
    name: '佐藤 健太',
    role: 'CTO',
    company: 'ファイナンスフロー株式会社',
    image: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    verified: true,
    date: '1ヶ月前',
    text: 'UpUp&Up Tech Incと協力して、当社のフィンテックアプリケーションを開発しました。フルスタック開発のスキルとモダンなアプローチにより、予定より早くリリースすることができました。サービスを強くお勧めします。',
    project: 'フィンテックアプリケーション',
  },
  {
    id: 3,
    name: '山田 恵子',
    role: 'プロダクトマネージャー',
    company: 'デザインハブ株式会社',
    image: 'https://i.pravatar.cc/150?img=45',
    rating: 5,
    verified: true,
    date: '3週間前',
    text: 'UpUp&Up Tech IncのUI/UXデザイン作業により、当社のプロダクトが変わりました。デザイナーは私たちのビジョンを理解し、ユーザーが愛する美しく直感的なインターフェースを作成してくれました。品質とサービスは素晴らしいです。',
    project: 'UI/UXリデザイン',
  },
  {
    id: 4,
    name: '鈴木 大輔',
    role: '創業者',
    company: 'クラウドスケール株式会社',
    image: 'https://i.pravatar.cc/150?img=33',
    rating: 5,
    verified: true,
    date: '2ヶ月前',
    text: 'DevOpsチームが、成長するトラフィックをシームレスに処理する堅牢でスケーラブルなインフラストラクチャを構築してくれました。実装されたCI/CDパイプラインにより、デプロイプロセスが大幅に改善されました。プロフェッショナルで信頼できるチームです。',
    project: 'DevOpsインフラストラクチャ',
  },
  {
    id: 5,
    name: '高橋 麻衣',
    role: 'ディレクター',
    company: 'リテールプロ株式会社',
    image: 'https://i.pravatar.cc/150?img=20',
    rating: 5,
    verified: true,
    date: '1ヶ月前',
    text: 'UpUp&Up Tech Incがゼロから当社のECプラットフォームを構築してくれました。ReactとNext.jsの実装は完璧で、パフォーマンスも優れています。モダンなWeb開発のベストプラクティスを真に理解しているチームです。',
    project: 'ECプラットフォーム',
  },
  {
    id: 6,
    name: '伊藤 翔太',
    role: 'VP エンジニアリング',
    company: 'データビズ株式会社',
    image: 'https://i.pravatar.cc/150?img=51',
    rating: 5,
    verified: true,
    date: '3週間前',
    text: '優れたバックエンド開発作業でした。Node.jsとExpressを使用して、1日数百万のリクエストを処理する堅牢なAPIを構築してくれました。コード品質は最高水準で、ドキュメントも徹底しています。',
    project: 'バックエンドAPI開発',
  },
];

export default function Reviews() {
  return (
    <div id="reviews" className="py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 mb-6 shadow-lg shadow-indigo-500/20 border border-indigo-500/30">
            <Quote className="h-8 w-8 text-indigo-400" />
          </div>
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30">
            <span className="text-sm font-medium text-indigo-400">お客様の声</span>
          </div>
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl mb-6">
            信頼と実績
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            世界中の主要企業から信頼されています。お客様が私たちとの協力についてどのように評価しているかご覧ください。
          </p>
          <div className="flex items-center justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-3 text-2xl font-bold text-white">5.0</span>
            <span className="text-gray-400 ml-2">（24件の認証済みレビュー）</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-700/50 hover:shadow-2xl hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-14 h-14 rounded-xl object-cover ring-2 ring-indigo-500/30 shadow-lg"
                    />
                    {review.verified && (
                      <div className="absolute -bottom-1 -right-1 bg-indigo-500 rounded-full p-1 ring-2 ring-gray-800">
                        <CheckCircle2 className="h-3 w-3 text-white" title="認証済み" />
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-bold text-white text-lg">{review.name}</h3>
                    </div>
                    <div className="flex items-center space-x-1.5 mb-1">
                      <Building2 className="h-3.5 w-3.5 text-gray-400" />
                      <p className="text-sm font-medium text-gray-300">{review.company}</p>
                    </div>
                    <p className="text-xs text-gray-400">{review.role}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{review.text}</p>

              <div className="pt-6 border-t border-gray-700/50">
                <p className="text-sm font-semibold text-indigo-400 mb-2">{review.project}</p>
                <p className="text-xs text-gray-400">{review.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-12 bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-xl px-12 py-8 border border-gray-700/50">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">24+</div>
              <div className="text-sm font-medium text-gray-300">認証済みレビュー</div>
            </div>
            <div className="h-16 w-px bg-gradient-to-b from-gray-600 to-gray-700"></div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">5.0</div>
              <div className="text-sm font-medium text-gray-300">平均評価</div>
            </div>
            <div className="h-16 w-px bg-gradient-to-b from-gray-600 to-gray-700"></div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">100%</div>
              <div className="text-sm font-medium text-gray-300">満足度</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

