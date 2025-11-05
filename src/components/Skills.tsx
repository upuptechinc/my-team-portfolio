import { Code2, Database, Layout, Cloud, Shield, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Layout,
    skills: [
      { name: 'React', level: 100 },
      { name: 'Next.js', level: 100 },
      { name: 'Vue.js', level: 90 },
      { name: 'Angular.js', level: 90 },
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
    icon: Database,
    skills: [
      { name: 'Node.js', level: 100 },
      { name: 'Express.js', level: 100 },
      { name: 'Python', level: 92 },
      { name: 'Django', level: 90 },
      { name: 'Flask', level: 90 },
      { name: 'FastAPI', level: 90 },
      { name: 'Go', level: 85 },
      { name: 'PHP', level: 90 },
      { name: 'ASP.net', level: 90 },
      { name: 'Ruby on Rails', level: 85 },
    ],
  },
  {
    title: 'Web Technologies',
    icon: Code2,
    skills: [
      { name: 'HTML5/CSS3', level: 98 },
      { name: 'JavaScript', level: 95 },
      { name: 'WebSockets', level: 85 },
      { name: 'GraphQL', level: 88 },
      { name: 'PostgreSQL', level: 90 },
      { name: 'MongoDB', level: 88 },
      { name: 'REST APIs', level: 92 },
      { name: 'Sass', level: 90 },
      { name: 'SEO', level: 85 },
      { name: 'Web Performance', level: 90 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: [
      { name: 'AWS', level: 90 },
      { name: 'Docker', level: 88 },
      { name: 'Kubernetes', level: 85 },
      { name: 'CI/CD', level: 92 },
      { name: 'Terraform', level: 85 },
      { name: 'Azure', level: 80 },
      { name: 'GCP', level: 80 },
      { name: 'Serverless', level: 78 },
    ],
  },
  {
    title: 'Security',
    icon: Shield,
    skills: [
      { name: 'OAuth 2.0', level: 90 },
      { name: 'JWT', level: 92 },
      { name: 'HTTPS/SSL', level: 95 },
      { name: 'Web Security', level: 88 },
      { name: 'Firewalls', level: 82 },
      { name: 'Data Privacy', level: 85 },
    ],
  },
  {
    title: 'Blockchain Development',
    icon: Cpu,
    skills: [
      { name: 'Solidity', level: 100 },
      { name: 'Rust', level: 90 },
      { name: 'Smart contract', level: 100 },
      { name: 'Dapp', level: 75 },
    ],
  },
];


export default function Skills() {
  return (
    <div id="skills" className="py-24 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Our Expertise
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Mastering the latest technologies to deliver cutting-edge solutions
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="relative group bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700 hover:border-indigo-500 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center space-x-3">
                  <category.icon className="h-6 w-6 text-indigo-400" />
                  <h3 className="text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="mt-6 space-y-4">
                  {category.skills.map((skill, skillIndex) => (
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
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}