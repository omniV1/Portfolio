import { FC } from 'react';
import ReactAircraftImg from '../img/ReactImg.png'; 
import MVCImage from '../img/minesweeper.png'
import AngularAircraftImg from '../img/AngularImg.png'; 

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  liveDemo: string;
  github: string;
  documentation: string;
  features: string[];
  image: any; 
}

const ProjectsSection: FC = () => {
  const projects: ProjectCardProps[] = [
    {
      title: "Aircraft Maintenance Management System",
      description: "A comprehensive full-stack application for managing aircraft maintenance schedules, tracking performance metrics, and maintaining detailed service records.",
      technologies: ["React", "TypeScript", "Node.js", "MySQL", "Express"],
      liveDemo: "https://www.loom.com/share/8d939537a10643a19b88d9c0ac69c1bc",
      github: "https://github.com/omniV1/CST-391/tree/main/src/Milestone/aircraft-fleet-manager",
      documentation: "https://github.com/omniV1/CST-391/tree/main/docs/Milestone",
      features: [
        "Real-time maintenance tracking and scheduling",
        "Performance analytics dashboard",
        "Maintenance history logging",
        "Aircraft fleet management"
      ],
      image: ReactAircraftImg  // Use the imported image here
    },
    {
    title: "Aircraft Maintenance Manager (Angular)",
    description: "The original version of the aircraft maintenance system built with Angular, featuring a robust service-oriented architecture and comprehensive user management system.",
    technologies: ["Angular", "TypeScript", "SQL Server", "Express", "Node.js"],
    liveDemo: "https://www.loom.com/share/4803a73b147944b0aa5abe974a906ca6",
    documentation: "https://github.com/omniV1/CST-391/tree/main/docs/Milestone",
    github: "https://github.com/omniV1/CST-391/tree/main/src/Milestone/aerospace-maintenance",
    features: [
      "Real-time maintenance tracking",
      "Service-oriented architecture",
      "SQL Server database integration",
      "RESTful API design"
    ],
    image: AngularAircraftImg // Use the imported image here
  },
    {
        title: "Minesweeper Web Application",
        description: "A modern web-based implementation of the classic Minesweeper game with additional features like game saving, user authentication, and administrative capabilities.",
        technologies: ["C#", "ASP.NET Core", "SQL Server", "JavaScript"],
        liveDemo: "https://www.loom.com/share/a37e9630c84e47e19a1df033205c9753",
        github: "https://github.com/omniV1/CST-350-Milestone/tree/main/Milestone",
        documentation: "https://github.com/omniV1/CST-350-Milestone/tree/main/Documentation",
        features: [
          "User authentication and role-based access",
          "Save/load game functionality",
          "Real-time game state management",
          "Administrative user management",
          "RESTful API for game operations"
        ],
        image: MVCImage // We'll need to update this with a Minesweeper screenshot
      },
  ];
  return (
    <div className="min-h-screen bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group relative bg-slate-800 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Project Image */}
                <div className="relative rounded-lg overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                </div>


                {/* Project Info */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-slate-300">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-white">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-slate-300">
                          <span className="text-blue-400">→</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 mt-6">
                    <a
                      href={project.liveDemo}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                    <a href={project.documentation}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Documentation
                    </a>
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
                    >
                      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;