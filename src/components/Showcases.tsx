import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'NFT3X',
    subtitle: 'React · Next.js · Chakra UI · Solidity · Web3.js · Ethereum',
    description: 'A multi-asset swaps and options platform to barter, reserve & exchange NFT collections, entirely peer-to-peer.',
    image: '/nf3.jpg',
    Link: 'https://nf3.exchange/',
    githubLink: '#',
  },
  {
    title: 'World of V',
    subtitle: 'React.js · Next.js · Styled Components · Redux · VeChain/Connex · Web3.js',
    description: 'The most renowned NFT marketplaces on VeChain, based in Italy.',
    image: '/worldofv.art.jpg',
    Link: 'https://worldofv.art',
    githubLink: '#',
  },
  {
    title: 'Cryptool.io',
    subtitle: 'React.js · Next.js · Vue.js · Node.js · Express.js · RESTful APIs · Google Sheets API · Web3.js · Solidity',
    description: 'Automated all-in-one platform to easily manage, raise, invest and trade cryptocurrency assets',
    image: '/cryptool.io.jpg',
    Link: 'https://cryptool.io/',
    githubLink: '#',
  },
  {
    title: 'Realtor',
    subtitle: 'React.js · Next.js · Vue.js · Node.js · ASP.net · AWS · MongoDB · Tailwind CSS',
    description: 'A real estate platform that provides a comprehensive list of properties for sale and provides the tools and information you need to make informed decisions about real estate.',
    image: '/realtor.jpg',
    Link: 'https://www.realtor.com/',
    githubLink: '#',
  },
  {
    title: 'Polcode',
    subtitle: 'React.js · Vue.js · Vuex · Redux · RESTful APIs · GraphQL · Webpack · Babel',
    description: 'An award-winning developer agency, trusted worldwide for our remote services in web, mobile and team extension projects.',
    image: '/polcode.jpg',
    Link: 'https://polcode.com/',
    githubLink: '#',
  },
  {
    title: 'Grata Inc',
    subtitle: 'React.js · Vue.js · Vuex · Redux · RESTful APIs · GraphQL · PHP · Laravel',
    description: 'A platform providing a business-to-business (B2B) search engine designed to help users discover small to medium-sized private companies.',
    image: '/grata.jpg',
    Link: 'https://grata.com/',
    githubLink: '#',
  },
  {
    title: 'Veritone',
    subtitle: 'React.js · Vue.js · Vuex · Redux · RESTful APIs · GraphQL · PHP · Laravel',
    description: 'A platform for cognitive computing. Its technology is designed to process and analyze large amounts of unstructured audio and video data, making it accessible and actionable for various industries.',
    image: '/veritone.jpg',
    Link: 'https://www.veritone.com/',
    githubLink: '#',
  },
  {
    title: 'Chime',
    subtitle: 'React.js · Vue.js · Vuex · Redux · RESTful APIs · GraphQL · PHP · Laravel',
    description: 'An online bank that offers fee-free banking solutions. It focuses on providing easy-to-use financial services with no hidden fees, targeting younger consumers and those frustrated with traditional banking.',
    image: '/chime.jpg',
    Link: 'https://www.chime.com/',
    githubLink: '#',
  },
];

export default function Showcases() {
  return (
    <div id="showcases" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Our Showcases
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Showcasing our expertise through successful projects and innovative solutions
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700 hover:border-indigo-500 transition-all duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-indigo-400">{project.subtitle}</p>
                <p className="mt-3 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>
                <div className="mt-4 flex space-x-4">
                  <a
                    href={project.Link} target="_blank"
                    className="inline-flex items-center text-sm text-indigo-400 hover:text-indigo-300"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Link
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}