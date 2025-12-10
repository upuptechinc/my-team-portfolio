import { Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <a href="https://en.maebe.jp/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:opacity-80 transition-opacity duration-300">
              <Code2 className="h-8 w-8 text-indigo-500" />
              <span className="ml-2 text-xl font-bold text-white">UpUp&Up Tech Inc</span>
            </a>
            <p className="mt-4 text-base text-gray-400">
              アイデアをデジタル現実に変えます。私たちは、卓越したデジタル体験を創造する情熱的な開発者とデザイナーのチームです。
            </p>
            <div className="mt-4">
              <a 
                href="https://en.maebe.jp/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 transition-colors duration-200 text-sm font-medium"
              >
                公式サイトへ →
              </a>
            </div>
            {/* <div className="mt-6 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-indigo-500">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-500">
                <Linkedin className="h-6 w-6" />
              </a>
            </div> */}
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              サービス
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#services" className="text-base text-gray-400 hover:text-white">
                  フロントエンド開発
                </a>
              </li>
              <li>
                <a href="#services" className="text-base text-gray-400 hover:text-white">
                  バックエンド開発
                </a>
              </li>
              <li>
                <a href="#services" className="text-base text-gray-400 hover:text-white">
                  フルスタック開発
                </a>
              </li>
              <li>
                <a href="#services" className="text-base text-gray-400 hover:text-white">
                  ブロックチェーン開発
                </a>
              </li>
              <li>
                <a href="#services" className="text-base text-gray-400 hover:text-white">
                  UI/UXデザイン
                </a>
              </li>
              <li>
                <a href="#services" className="text-base text-gray-400 hover:text-white">
                  DevOps
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              会社
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="https://en.maebe.jp/" target="_blank" rel="noopener noreferrer" className="text-base text-gray-400 hover:text-white">
                  公式サイト
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-white">
                  会社概要
                </a>
              </li>
              <li>
                <a href="#team" className="text-base text-gray-400 hover:text-white">
                  採用情報
                </a>
              </li>
              <li>
                <a href="#contact" className="text-base text-gray-400 hover:text-white">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © 2016 UpUp&Up Tech Inc. 全著作権所有。
          </p>
        </div>
      </div>
    </footer>
  );
}