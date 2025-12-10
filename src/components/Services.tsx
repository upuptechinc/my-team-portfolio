import { Code2, Layout, Database, Blocks, Settings, Palette } from 'lucide-react';

const services = [
  {
    title: 'フロントエンド開発',
    description: 'モダンなフレームワークとテクノロジーを使用した、レスポンシブでインタラクティブなユーザーインターフェースの作成。',
    icon: Layout,
    skills: [
      { name: 'React', level: 100 },
      { name: 'Next.js', level: 100 },
      { name: 'Vue.js', level: 90 },
      { name: 'Angular.js', level: 90 },
      { name: 'Flutter', level: 93 },
      { name: 'TypeScript', level: 100 },
      { name: 'JavaScript', level: 100 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Bootstrap', level: 95 },
      { name: 'MUI', level: 95 },
      { name: 'Shadcn UI', level: 95 },
      { name: 'Chakra UI', level: 95 },
    ],
  },
  {
    title: 'バックエンド開発',
    description: 'デジタルソリューションを支える堅牢なサーバーサイドアプリケーションとAPIの構築。',
    icon: Database,
    skills: [
      { name: 'Node.js', level: 100 },
      { name: 'Express.js', level: 100 },
      { name: 'Python', level: 97 },
      { name: 'Django', level: 93 },
      { name: 'Flask', level: 95 },
      { name: 'FastAPI', level: 96 },
      { name: 'Go', level: 85 },
      { name: 'PHP', level: 90 },
      { name: 'Laravel', level: 90 },
      { name: 'ASP.net', level: 90 },
      { name: 'Ruby on Rails', level: 85 },
    ],
  },
  {
    title: 'フルスタック開発',
    description: 'フロントエンドとバックエンドの専門知識を組み合わせた、完全なソリューションのためのエンドツーエンド開発。',
    icon: Code2,
    skills: [
      { name: 'React', level: 100 },
      { name: 'Next.js', level: 100 },
      { name: 'Node.js', level: 100 },
      { name: 'Express.js', level: 100 },
      { name: 'TypeScript', level: 95 },
      { name: 'GraphQL', level: 90 },
      { name: 'REST APIs', level: 92 },
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 88 },
    ],
  },
  {
    title: 'ブロックチェーン開発',
    description: '次世代アプリケーションのための安全でスケーラブルなブロックチェーンソリューションの実装。',
    icon: Blocks,
    skills: [
      { name: 'Solidity', level: 100 },
      { name: 'Rust', level: 90 },
      { name: 'Smart contract', level: 100 },
      { name: 'Dapp', level: 75 },
      { name: 'Web3.js', level: 90 },
      { name: 'Ethers.js', level: 90 },
      { name: 'Truffle', level: 85 },
      { name: 'Hardhat', level: 85 },
    ],
  },
  {
    title: 'UI/UXデザイン',
    description: 'お客様を喜ばせる美しく直感的なユーザー体験の創造。',
    icon: Palette,
    skills: [
      { name: 'Figma', level: 95 },
      { name: 'Adobe XD', level: 90 },
      { name: 'Sketch', level: 85 },
      { name: 'InVision', level: 80 },
      { name: 'Prototyping', level: 92 },
      { name: 'Wireframing', level: 95 },
      { name: 'User Research', level: 90 },
    ],
  },
  {
    title: 'DevOps',
    description: '自動化されたワークフローと堅牢なインフラストラクチャによる開発運用の効率化。',
    icon: Settings,
    skills: [
      { name: 'AWS', level: 90 },
      { name: 'Docker', level: 88 },
      { name: 'Kubernetes', level: 85 },
      { name: 'CI/CD', level: 92 },
      { name: 'Terraform', level: 85 },
      { name: 'Azure', level: 80 },
      { name: 'GCP', level: 80 },
      { name: 'Serverless', level: 78 },
      { name: 'Ansible', level: 85 },
      { name: 'Jenkins', level: 88 },
    ],
  },
];


export default function Services() {
  return (
    <div id="services" className="py-32 bg-gradient-to-b from-gray-800/50 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            <span className="text-sm font-medium text-indigo-400">専門サービス</span>
          </div>
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl mb-6">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              私たちのサービス
            </span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
            デジタルニーズに対応する包括的なソリューション
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-7 w-7 text-indigo-400" aria-hidden="true" />
                  </div>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="space-y-3">
                  {service.skills?.slice(0, 5).map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                        <span className="text-sm font-semibold text-indigo-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-700 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}