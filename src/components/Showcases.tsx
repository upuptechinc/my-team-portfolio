import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'NFT3X',
    subtitle: 'React · Next.js · Chakra UI · Solidity · Web3.js · Ethereum',
    description: 'NFTコレクションを完全にピアツーピアで物々交換、予約、交換するためのマルチアセットスワップおよびオプションプラットフォーム。',
    image: '/nf3.jpg',
    Link: 'https://nf3.exchange/',
    githubLink: '#',
  },
  {
    title: 'World of V',
    subtitle: 'React.js · Next.js · Styled Components · Redux · VeChain/Connex · Web3.js',
    description: 'イタリアを拠点とするVeChainで最も有名なNFTマーケットプレイス。',
    image: '/worldofv.art.jpg',
    Link: 'https://worldofv.art',
    githubLink: '#',
  },
  {
    title: 'Cryptool.io',
    subtitle: 'React.js · Next.js · Vue.js · Node.js · Express.js · RESTful APIs · Google Sheets API · Web3.js · Solidity',
    description: '暗号通貨資産を簡単に管理、調達、投資、取引できるオールインワンの自動化プラットフォーム。',
    image: '/cryptool.io.jpg',
    Link: 'https://cryptool.io/',
    githubLink: '#',
  },
  {
    title: 'Realtor',
    subtitle: 'React.js · Next.js · Vue.js · Node.js · ASP.net · AWS · MongoDB · Tailwind CSS',
    description: '販売物件の包括的なリストを提供し、不動産に関する情報に基づいた意思決定に必要なツールと情報を提供する不動産プラットフォーム。',
    image: '/realtor.jpg',
    Link: 'https://www.realtor.com/',
    githubLink: '#',
  },
  {
    title: 'Polcode',
    subtitle: 'React.js · Vue.js · Vuex · Redux · RESTful APIs · GraphQL · Webpack · Babel',
    description: 'Web、モバイル、チーム拡張プロジェクトにおけるリモートサービスで世界中から信頼されている受賞歴のある開発者エージェンシー。',
    image: '/polcode.jpg',
    Link: 'https://polcode.com/',
    githubLink: '#',
  },
  {
    title: 'Grata Inc',
    subtitle: 'React.js · Vue.js · Vuex · Redux · RESTful APIs · GraphQL · PHP · Laravel',
    description: '中小規模の非公開企業を発見するのに役立つビジネスツービジネス（B2B）検索エンジンを提供するプラットフォーム。',
    image: '/grata.jpg',
    Link: 'https://grata.com/',
    githubLink: '#',
  },
  {
    title: 'Veritone',
    subtitle: 'React.js · Vue.js · Vuex · Redux · RESTful APIs · GraphQL · PHP · Laravel',
    description: '認知コンピューティングのためのプラットフォーム。その技術は、大量の非構造化オーディオおよびビデオデータを処理および分析し、さまざまな業界でアクセス可能で実用的なものにするように設計されています。',
    image: '/veritone.jpg',
    Link: 'https://www.veritone.com/',
    githubLink: '#',
  },
  {
    title: 'Chime',
    subtitle: 'React.js · Vue.js · Vuex · Redux · RESTful APIs · GraphQL · PHP · Laravel',
    description: '手数料無料の銀行ソリューションを提供するオンラインバンク。隠れた手数料なしで使いやすい金融サービスを提供することに焦点を当て、若い消費者や従来の銀行に不満を持つ人々をターゲットにしています。',
    image: '/chime.jpg',
    Link: 'https://www.chime.com/',
    githubLink: '#',
  },
];

export default function Showcases() {
  return (
    <div id="showcases" className="py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            <span className="text-sm font-medium text-indigo-400">ポートフォリオ</span>
          </div>
          <h2 className="text-4xl font-extrabold sm:text-5xl mb-6">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              私たちの実績
            </span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
            成功したプロジェクトと革新的なソリューションを通じて専門知識を紹介
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/90 backdrop-blur-sm text-white text-xs font-medium">
                    実績
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm font-medium text-indigo-400">{project.subtitle}</p>
                <p className="mb-6 text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  ライブリンクを見る
                </a>
                {/* <a
                    href={project.githubLink}
                    className="inline-flex items-center text-sm text-indigo-400 hover:text-indigo-300"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
                  </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}