

function WelcomePage() {

    const handleLogin = ()=>{
        window.location.href = "/home"
    }
  return (
    <div className="w-screen h-screen p-0 m-0 overflow-hidden relative">
      {/* Background Image */}
      <img
        src="/pexels-tranmautritam-69432.webp"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover blur-sm"
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 text-center text-white">
        {/* Description Box */}
        <div className="w-full max-w-lg mb-6 sm:mb-8 bg-black/50 p-4 sm:p-6 rounded-xl backdrop-blur-md">
          <h1 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">
            Welcome to Learn with Jeancy 
          </h1>
          <p className="text-base sm:text-lg leading-relaxed">
            X-Web is your gateway to mastering programming languages and web technologies.
            Learn HTML, CSS, JavaScript, React, and more with practical tools and real-world projects.
          </p>
        </div>

        {/* Google Button */}
        <button onClick={handleLogin}
          className="flex items-center justify-center gap-3 bg-white/90 text-gray-800 w-full max-w-xs sm:max-w-sm px-5 py-3 rounded-xl 
          shadow-md hover:bg-white active:scale-95 active:bg-gray-200 transition-all duration-200 font-semibold text-base sm:text-lg"
        >
            Continue
        </button>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 w-full text-center text-sm text-white z-10 px-4">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 bg-black/40 backdrop-blur-md py-2 rounded-lg">
          <span>© {new Date().getFullYear()} Jeancy Mpoyi. All rights reserved.</span>
          <a href="#" className="underline hover:text-blue-300 transition">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}

export default WelcomePage;
