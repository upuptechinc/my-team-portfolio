import { ArrowRight, Code2, Rocket, Users } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
      <div className="max-w-7xl mx-auto h-full relative z-10">
        <div className="min-h-screen flex items-center py-20">
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex-1">
            <div className="sm:text-center lg:text-left">
              <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                <span className="text-sm font-medium text-indigo-400">デジタルソリューションのパートナー</span>
              </div>
              <h1 className="text-5xl tracking-tight font-extrabold text-white sm:text-6xl md:text-7xl lg:text-8xl">
                <span className="block animate-[fadeIn_1s_ease-out] leading-tight mb-2">
                  アイデアを
                </span>
                <span className="block bg-gradient-to-r leading-tight from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-[fadeIn_1s_ease-out_0.5s]">
                  デジタルエクセレンスへ
                </span>
              </h1>
              <p className="mt-6 text-lg text-gray-300 sm:mt-8 sm:text-xl sm:max-w-2xl sm:mx-auto md:mt-8 md:text-2xl lg:mx-0 animate-[fadeIn_1s_ease-out_1s] leading-relaxed">
                私たちは単なる開発者ではありません。未来を創造するデジタルアーキテクトです。最先端のテクノロジーと創造的なイノベーションにより、複雑な課題をエレガントなソリューションに変え、ビジネスの成長とユーザーエンゲージメントを推進します。
              </p>

              <div className="mt-10 space-y-4 sm:space-y-0 sm:flex sm:justify-center lg:justify-start animate-[fadeIn_1s_ease-out_1.5s]">
                <a
                  href="#showcases"
                  className="group w-full sm:w-auto flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 transform hover:scale-105 transition-all duration-300 md:py-5 md:text-lg md:px-10"
                >
                  実績を見る
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="w-full sm:w-auto sm:ml-4 flex items-center justify-center px-8 py-4 border-2 border-gray-600 text-base font-semibold rounded-lg text-white bg-transparent hover:bg-gray-800/50 hover:border-gray-500 transition-all duration-300 md:py-5 md:text-lg md:px-10"
                >
                  お問い合わせ
                </a>
              </div>

              <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 animate-[fadeIn_1s_ease-out_2s]">
                <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                    <Code2 className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">10+</div>
                    <div className="text-sm text-gray-400">年以上の経験</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                    <Rocket className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">100+</div>
                    <div className="text-sm text-gray-400">プロジェクト実績</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                    <Users className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">50+</div>
                    <div className="text-sm text-gray-400">満足なクライアント</div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-75 hover:opacity-100 transition-opacity duration-300"
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="Team collaboration"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/60 to-transparent lg:via-transparent" />
      </div>
    </div>
  );
}