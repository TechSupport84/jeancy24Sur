

const FooterPage = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Left: Logo or Site Name */}
        <div className="text-white font-bold text-2xl">
          JeancyTech
        </div>

        {/* Center: Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-gray-400 hover:text-white transition-colors">
          <a href="#html5" className="hover:text-indigo-400">HTML5</a>
          <a href="#css3" className="hover:text-indigo-400">CSS3</a>
          <a href="#python" className="hover:text-indigo-400">Python</a>
          <a href="#reactjs" className="hover:text-indigo-400">ReactJS</a>
          <a href="#english" className="hover:text-indigo-400">Anglais</a>
          <a href="#contact" className="hover:text-indigo-400">Contact</a>
        </nav>

        {/* Right: Social Media Icons */}
        <div className="flex space-x-6">
          {/* Facebook */}
          <a
            href="https://facebook.com/JeancyTech" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-gray-400 hover:text-indigo-400 transition-colors"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.404.597 24 1.326 24h11.495v-9.294H9.69v-3.622h3.13V8.41c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.92.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.326-.596 1.326-1.326V1.326C24 .597 23.404 0 22.675 0z" />
            </svg>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/JeancyTech" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-gray-400 hover:text-indigo-400 transition-colors"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M23.954 4.569a10 10 0 01-2.825.775 4.932 4.932 0 002.163-2.724 9.865 9.865 0 01-3.127 1.195 4.916 4.916 0 00-8.373 4.482A13.944 13.944 0 011.671 3.15a4.917 4.917 0 001.523 6.573 4.9 4.9 0 01-2.228-.616v.061a4.92 4.92 0 003.946 4.827 4.996 4.996 0 01-2.224.084 4.928 4.928 0 004.6 3.417 9.867 9.867 0 01-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 007.557 2.212c9.054 0 14-7.496 14-13.985 0-.21-.004-.423-.015-.633A9.936 9.936 0 0024 4.59z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/JeancyTech" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-indigo-400 transition-colors"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.026-3.037-1.85-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.353V9h3.414v1.561h.049c.476-.9 1.635-1.85 3.366-1.85 3.602 0 4.268 2.368 4.268 5.455v6.286zM5.337 7.433a2.07 2.07 0 110-4.139 2.07 2.07 0 010 4.139zM6.814 20.452H3.864V9h2.95v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.726v20.548C0 23.227.792 24 1.771 24h20.451c.98 0 1.778-.773 1.778-1.726V1.726C24 .774 23.204 0 22.225 0z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/JeancyTech" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-indigo-400 transition-colors"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12a10 10 0 006.838 9.487c.5.09.682-.217.682-.482 0-.237-.01-.868-.015-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.156-1.11-1.465-1.11-1.465-.908-.62.07-.608.07-.608 1.004.07 1.532 1.033 1.532 1.033.892 1.528 2.341 1.087 2.91.832.09-.647.35-1.087.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.09.39-1.98 1.029-2.677-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.845c.85.004 1.705.115 2.504.337 1.91-1.296 2.75-1.026 2.75-1.026.546 1.377.203 2.394.1 2.647.64.697 1.028 1.587 1.028 2.677 0 3.842-2.337 4.687-4.566 4.935.36.31.68.92.68 1.855 0 1.337-.012 2.419-.012 2.749 0 .268.18.577.688.479A10.004 10.004 0 0022 12c0-5.52-4.48-10-10-10z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 text-center text-gray-500 text-sm select-none">
        &copy; {new Date().getFullYear()} JeancyTech. Tous droits réservés.
      </div>
    </footer>
  );
};

export default FooterPage;
