const Hero = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.05] -z-0" />
      <div className="absolute h-full w-full bg-gradient-to-b from-blue-600/50 via-transparent to-blue-950/50" />
      
      {/* Main content - adjusted padding and spacing for mobile */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-16 sm:py-24">
        <div className="w-full max-w-[90%] sm:max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Heading - adjusted font sizes for mobile */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight animate-fade-in px-2">
            Hello, I'm Owen Lindsey
          </h1>

          <div className="space-y-4 sm:space-y-6">
            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 font-light tracking-wide px-2">
              Full Stack Developer | Father | USAF Veteran
            </p>
            
            {/* Divider */}
            <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
            
            {/* Description - adjusted font size and padding */}
            <p className="text-base sm:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
              Former Tactical Aircraft Maintenance Technician (5th Generation F-22) turned Software Developer, 
              combining aviation precision with innovative software solutions.
            </p>
          </div>

          {/* Cards - adjusted for better mobile layout */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 max-w-lg sm:max-w-4xl mx-auto mt-6">
            <div className="backdrop-blur-md bg-white/10 rounded-xl p-4 sm:p-6 shadow-lg border border-white/10">
              <h3 className="text-white font-semibold text-lg mb-2">Military Experience</h3>
              <p className="text-blue-100">
                5 Years USAF<br />
                F-22 Maintenance Technician
              </p>
            </div>

            <div className="backdrop-blur-md bg-white/10 rounded-xl p-4 sm:p-6 shadow-lg border border-white/10">
              <h3 className="text-white font-semibold text-lg mb-2">Education</h3>
              <p className="text-blue-100">
                Software Development<br />
                GCU Senior
              </p>
            </div>

            <div className="backdrop-blur-md bg-white/10 rounded-xl p-4 sm:p-6 shadow-lg border border-white/10">
              <h3 className="text-white font-semibold text-lg mb-2">Family Life</h3>
              <p className="text-blue-100">
                Proud Father of Three
              </p>
            </div>
          </div>

          {/* Buttons - adjusted for mobile */}
          <div className="flex flex-col gap-4 mt-8 px-4 sm:px-0">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-blue-700 rounded-lg font-semibold 
                           hover:bg-blue-50 transition-all">
              View Projects
            </button>
            <button className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white rounded-lg font-semibold 
                           hover:bg-white/10 transition-all">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;