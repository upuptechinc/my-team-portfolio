import { ArrowRight, Code2, Rocket, Users } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen overflow-hidden bg-gray-900">
      <div className="max-w-7xl mx-auto h-full">
        <div className="relative z-10 h-full flex items-center">
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex-1">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block animate-[fadeIn_1s_ease-out] leading-snug">
                  Transforming Ideas into
                </span>
                <span className="block bg-gradient-to-r leading-snug from-indigo-400 to-purple-400 bg-clip-text text-transparent animate-[fadeIn_1s_ease-out_0.5s]">
                  Digital Excellence
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 animate-[fadeIn_1s_ease-out_1s]">
                We're not just developers – we're digital architects crafting the future. With cutting-edge technology and creative innovation, we transform complex challenges into elegant solutions that drive business growth and user engagement.
              </p>

              <div className="mt-8 space-y-4 sm:space-y-0 sm:flex sm:justify-center lg:justify-start animate-[fadeIn_1s_ease-out_1.5s]">
                <div className="rounded-md">
                  <a
                    href="#showcases"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 md:py-4 md:text-lg md:px-10"
                  >
                    View Our Work
                    <ArrowRight className="ml-2 h-5 w-5 animate-float" />
                  </a>
                </div>
                <div className="sm:ml-4">
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-100 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800 transition-all duration-300 md:py-4 md:text-lg md:px-10"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 animate-[fadeIn_1s_ease-out_2s]">
                <div className="flex items-center space-x-2">
                  <Code2 className="h-6 w-6 text-indigo-400" />
                  <span className="text-gray-400">10+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Rocket className="h-6 w-6 text-indigo-400" />
                  <span className="text-gray-400">100+ Projects Delivered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-indigo-400" />
                  <span className="text-gray-400">50+ Happy Clients</span>
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