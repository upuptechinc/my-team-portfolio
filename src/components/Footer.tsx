import { Code2, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Code2 className="h-8 w-8 text-indigo-500" />
              <span className="ml-2 text-xl font-bold text-white">UpUp&Up Tech Inc</span>
            </div>
            <p className="mt-4 text-base text-gray-400">
              Transforming ideas into digital reality. We're a team of passionate developers
              and designers crafting exceptional digital experiences.
            </p>
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
              Services
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#services" className="text-base text-gray-400 hover:text-white">
                  Frontend Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-base text-gray-400 hover:text-white">
                  Backend Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-base text-gray-400 hover:text-white">
                  Full Stack Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-base text-gray-400 hover:text-white">
                  Blockchain Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-base text-gray-400 hover:text-white">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#services" className="text-base text-gray-400 hover:text-white">
                  Devops
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              {/* <li>
                <a href="#" className="text-base text-gray-400 hover:text-white">
                  Blog
                </a>
              </li> */}
              <li>
                <a href="#team" className="text-base text-gray-400 hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" className="text-base text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © 2024 UpUp&Up Tech Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}