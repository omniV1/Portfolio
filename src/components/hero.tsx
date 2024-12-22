const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Get the section's position relative to the viewport
      const sectionTop = section.getBoundingClientRect().top;
      // Get current scroll position
      const scrollPosition = window.pageYOffset;
      // Calculate target position
      const targetPosition = scrollPosition + sectionTop;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.05] -z-0" />
      <div className="absolute h-full w-full bg-gradient-to-b from-blue-600/50 via-transparent to-blue-950/50" />

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight animate-fade-in">
            Hello, I'm Owen Lindsey
          </h1>

          <div className="space-y-6">
            <p className="text-xl sm:text-2xl text-blue-100 font-light tracking-wide">
              Full Stack Developer | Father | USAF Veteran
            </p>

            <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

            <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Former Tactical Aircraft Maintenance Technician (5th Generation
              F-22) turned Software Developer, combining aviation precision with
              innovative software solutions.
            </p>
          </div>

          {/* Experience cards with glass effect */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 shadow-lg border border-white/10 hover:border-white/20 transition-all duration-300">
              <h3 className="text-white font-semibold text-lg mb-3">
                Military Experience
              </h3>
              <p className="text-blue-100">
                5 Years USAF
                <br />
                F-22 Maintenance Technician
              </p>
            </div>

            <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 shadow-lg border border-white/10 hover:border-white/20 transition-all duration-300">
              <h3 className="text-white font-semibold text-lg mb-3">
                Education
              </h3>
              <p className="text-blue-100">
                Software Development
                <br />
                GCU Senior
              </p>
            </div>

            <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 shadow-lg border border-white/10 hover:border-white/20 transition-all duration-300">
              <h3 className="text-white font-semibold text-lg mb-3">
                Family Life
              </h3>
              <p className="text-blue-100">
                Proud Father of Three
                <br />
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 bg-white text-blue-700 rounded-lg font-semibold 
           hover:bg-blue-50 transform hover:-translate-y-0.5 transition-all duration-200 
           shadow-lg hover:shadow-xl"
            >
              View Projects
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold 
           hover:bg-white/10 transform hover:-translate-y-0.5 transition-all duration-200
           shadow-lg hover:shadow-xl"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
