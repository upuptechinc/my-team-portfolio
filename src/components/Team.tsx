import { Briefcase, Users2 } from 'lucide-react';

const team = [
  {
    name: '大野 三郎',
    role: 'プロジェクトマネージャー',
    image: '/Ohno.png',
  },
  {
    name: '加藤 武',
    role: 'シニアソフトウェアエンジニア',
    image: '/Takeshi.png',
  },
  {
    name: '天沼 聡',
    role: 'DevOpsエンジニア',
    image: '/Amanuma.png',
  },
  {
    name: '谷屋 守',
    role: 'フロントエンド・QAエンジニア',
    image: '/Mamoru.png',
  },
  {
    name: '長瀬 文昭',
    role: 'フルスタック・Web3開発者',
    image: '/Fumiaki.jpg',
  },
  {
    name: '鈴木 健',
    role: 'フルスタック・Android開発者',
    image: '/Ken.jpg',
  },
];

export default function Team() {
  return (
    <div id="team" className="bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center shadow-lg shadow-indigo-500/20 border border-indigo-500/30">
              <Users2 className="h-8 w-8 text-indigo-400" />
            </div>
          </div>
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30">
            <span className="text-sm font-medium text-indigo-400">エキスパートチーム</span>
          </div>
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl mb-6">
            チームメンバー
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
            あなたの成功にコミットした才能ある専門家チーム
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="group relative bg-gray-800/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-indigo-500/50 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Professional Image Section */}
              <div className="relative pt-8 pb-6 px-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50">
                <div className="flex justify-center">
                  <div className="relative">
                    {/* Image Container with Professional Styling */}
                    <div className="relative w-40 h-40 rounded-full overflow-hidden ring-4 ring-gray-800 shadow-xl group-hover:ring-indigo-500/50 transition-all duration-300">
                      <img
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        src={member.image}
                        alt={member.name}
                      />
                    </div>
                    {/* Decorative Ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-indigo-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="px-8 pb-8 bg-gray-800/60">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Briefcase className="h-4 w-4 text-indigo-400" />
                    <p className="text-sm font-semibold text-indigo-400">{member.role}</p>
                  </div>
                  
                  {/* Professional Divider */}
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent mx-auto"></div>
                </div>
              </div>

              {/* Hover Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-300 pointer-events-none rounded-2xl" />
            </div>
          ))}
        </div>

        {/* Team Statistics */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 rounded-2xl p-8 border border-indigo-500/30 shadow-lg backdrop-blur-sm">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-400 mb-2">6</div>
              <div className="text-sm font-semibold text-indigo-300 uppercase tracking-wide">専門家</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl p-8 border border-purple-500/30 shadow-lg backdrop-blur-sm">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">100+</div>
              <div className="text-sm font-semibold text-purple-300 uppercase tracking-wide">プロジェクト実績</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-2xl p-8 border border-pink-500/30 shadow-lg backdrop-blur-sm">
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">10+</div>
              <div className="text-sm font-semibold text-pink-300 uppercase tracking-wide">平均経験年数</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
