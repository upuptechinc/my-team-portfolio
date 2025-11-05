import { Code2, Layout, Database, Blocks, Settings, Palette } from 'lucide-react';

const services = [
  {
    title: 'Frontend Development',
    description: 'Creating responsive and interactive user interfaces with modern frameworks and technologies.',
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
    title: 'Backend Development',
    description: 'Building robust server-side applications and APIs that power your digital solutions.',
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
    title: 'Full Stack Development',
    description: 'End-to-end development combining frontend and backend expertise for complete solutions.',
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
    title: 'Blockchain Development',
    description: 'Implementing secure and scalable blockchain solutions for next-gen applications.',
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
    title: 'UI/UX Design',
    description: 'Crafting beautiful and intuitive user experiences that delight your customers.',
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
    description: 'Streamlining development operations with automated workflows and robust infrastructure.',
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
    <div id="services" className="py-24 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Comprehensive solutions for your digital needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-indigo-500 transform transition-all duration-300"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-indigo-900/50 text-indigo-400 ring-4 ring-indigo-900/30 group-hover:text-indigo-300 transition-colors duration-300">
                  <service.icon className="h-6 w-6 animate-float" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-white group-hover:text-indigo-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <div className="mt-6 space-y-4">
                  {service.skills?.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-400">{skill.name}</span>
                        <span className="text-sm text-indigo-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1.5">
                        <div
                          className="bg-gradient-to-r from-indigo-500 to-purple-500 h-1.5 rounded-full transition-all duration-500 ease-out group-hover:from-indigo-400 group-hover:to-purple-400"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}