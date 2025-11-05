// import { Facebook, Github, Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: 'Ohno Saburo',
    role: 'Project Manager',
    image: '/Ohno.png',
    // githubLink: "https://github.com/huntermanwoow",
  },
  {
    name: 'Takeshi Kato',
    role: 'Sr. Software Engineer',
    image: '/Takeshi.png',
    // githubLink: "https://github.com/passionmuse16",
    // linkedInLink: "https://www.linkedin.com/in/levine-stewart/"
  },
  {
    name: 'Kristin D Worley',
    role: 'Product Manager',
    image: '/Kristin.png',
    // linkedInLink: "https://www.linkedin.com/in/kristin-worley-986829335/"
  },
  {
    name: 'Hisami Kurita',
    role: 'Software Architect',
    image: '/Hisami.jpg',
    // githubLink: "https://github.com/sports-man",
    // linkedInLink: "https://www.linkedin.com/in/kenneth-pribble-706512335"
  },
  {
    name: 'Mamoru Taniya',
    role: 'Frontend & QA Engineer',
    image: '/Mamoru.png',
    // githubLink: "https://github.com/huntermanwoow",
  },
  {
    name: 'Fumiaki Nagase',
    role: 'Full stack & Web3 Developer',
    image: '/Fumiaki.jpg',
    // githubLink: "https://github.com/sven3270350",
    // linkedInLink: "https://www.linkedin.com/in/dang-vo-64177a36/"
  },
  {
    name: 'Satoshi Amanuma',
    role: 'DevOps Engineer',
    image: '/Amanuma.png',
    // githubLink: "https://github.com/huntermanwoow",
  },
  {
    name: 'Ken Suzuki',
    role: 'Full stack & Android Developer',
    image: '/Ken.jpg',
    // githubLink: "https://github.com/dev-harvey-jun",
    // linkedInLink: "https://www.linkedin.com/in/harvey-jun-3b9763387/"
  },
  {
    name: 'Mikiya Endo',
    role: 'UX/UI Designer',
    image: '/Mikiya.jpg',
    // githubLink: "https://github.com/huntermanwoow",
  },
];

export default function Team() {
  return (
    <div id="team" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Talented professionals committed to your success
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="relative rounded-lg overflow-hidden transform transition duration-300 group-hover:scale-105">
                <img
                  className="w-full h-96 object-cover"
                  src={member.image}
                  alt={member.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-indigo-200">{member.role}</p>
                  {/* <div className="mt-4 flex space-x-4">
                    {member.githubLink && <a href={member.githubLink} target="_blank" className="text-white hover:text-indigo-200">
                      <Github className="h-5 w-5" />
                    </a>}
                    {member.linkedInLink && <a href={member.linkedInLink} target="_blank" className="text-white hover:text-indigo-200">
                      <Linkedin className="h-5 w-5" />
                    </a>}
                    {member.facebookLink && <a href={member.facebookLink} target="_blank" className="text-white hover:text-indigo-200">
                      <Facebook className="h-5 w-5" />
                    </a>}
                    {member.twitterLink && <a href={member.twitterLink} target="_blank" className="text-white hover:text-indigo-200">
                      <Twitter className="h-5 w-5" />
                    </a>}
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
