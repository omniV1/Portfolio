import { useEffect, useState } from 'react';
import { Medal, Code, Lightbulb } from 'lucide-react';

const Hero = () => {
  // No stray text should appear above the component
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-900">
      {/* Animated radar sweep effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 animate-radar-sweep">
          <div className="h-full w-full bg-gradient-to-t from-blue-500/20 via-transparent to-transparent" 
               style={{
                 transform: `rotate(${mousePosition.x * 20}deg)`,
                 transition: 'transform 0.3s ease-out'
               }} />
        </div>
      </div>

      {/* Flight path lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-px w-full bg-blue-500/20 animate-flight-path"
            style={{
              top: `${20 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              transform: `rotate(${5 - i * 2}deg)`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <div className="relative">
            {/* Aircraft silhouette icon */}
            <div className="absolute -top-24 left-1/2 transform -translate-x-1/2">
              <svg
                className="w-16 h-16 text-blue-400"
                viewBox="0 0 24 24"
                style={{
                  transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
                  transition: 'transform 0.3s ease-out'
                }}
              >
                <path
                  fill="currentColor"
                  d="M12,0L8.11,4.74L2,5.82L2,10.37L8.11,12.37L12,20L15.89,12.37L22,10.37V5.82L15.89,4.74L12,0M12,2.12L14.91,5.67L19.64,6.47V9.71L14.91,11.22L12,17.15L9.09,11.22L4.36,9.71V6.47L9.09,5.67L12,2.12Z"
                />
              </svg>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
              Hello, I'm Owen Lindsey
            </h1>
            
            <p className="text-xl text-blue-300 font-light tracking-wide">
              Full Stack Developer | Former F-22 Maintenance Technician | USAF Veteran
            </p>
          </div>

          {/* Experience cards with technical aesthetic */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              {
                title: "USAF Experience",
                icon: <Medal className="w-full h-full" />,
                details: "5 years experience maintaining F-22 Raptors, applying technical expertise to complex systems"
              },
              {
                title: "Software Development",
                icon: <Code className="w-full h-full" />,
                details: "Bringing aviation systems experience to software development, creating efficient and reliable solutions"
              },
              {
                title: "Innovation Focus",
                icon: <Lightbulb className="w-full h-full" />,
                details: "Combining technical expertise with creative problem-solving to deliver impactful solutions"
              }
            ].map((card, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-slate-800 rounded-lg p-6 h-full border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 mb-4 text-blue-400">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        {card.icon}
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                    <p className="text-slate-300">{card.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call-to-action buttons with technical style */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
            <a
              href="#projects"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold 
                         hover:bg-blue-700 transform hover:-translate-y-0.5 transition-all duration-200 
                         shadow-lg hover:shadow-xl"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold 
                       hover:bg-blue-500 hover:text-white transform hover:-translate-y-0.5 transition-all duration-200
                       shadow-lg hover:shadow-xl"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;