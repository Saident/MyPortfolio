// 1. Import the PDF file here
import resumePdf from "../assets/resume.pdf";

const navItems = ["About", "Projects", "Contact"];

const Navbar = () => {
  return (
    <header className="flex items-center justify-around gap-4 px-20 py-4 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-8 flex-1 w-full">
        <div className="text-3xl font-bold text-gray-900">
          {/* Logo or Name can go here */}
        </div>

        <nav className="flex items-center justify-center gap-6">
            {navItems.map((item) => (
            <div key={item} className="flex items-center justify-center">
                <a href={`#${item.toLowerCase()}`} className="text-gray-600 no-underline hover:text-gray-900">
                    {item}
                </a>
            </div>
        ))}

          <div className="flex items-center justify-center gap-4">
            {/* 2. Use the imported variable in the href */}
            <a 
              href={resumePdf} 
              download="CV - Averil Primayuda.pdf"
              className="px-4 py-1.5 bg-gray-900 text-white rounded-xl cursor-pointer hover:bg-gray-800 inline-block no-underline"
            >
              <span className="text-gray-50">
                Download CV
              </span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;