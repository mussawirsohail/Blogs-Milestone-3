export default function Header( ){
    return(
        <header className="py-6 top-0 left-0 w-full shadow-lg  bg-yellow-200">
          <div className="container mx-auto flex justify-between items-center px-6">
            <h1 className="text-2xl font-bold text-black">AI</h1>
            <nav className="space-x-6">
              <a
                href="/"
                className="text-black hover:text-violet-800 transition duration-200"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-black hover:text-violet-800 transition duration-200"
              >
                About
              </a>
              <a
                href="/contact"
                className="text-black hover:text-violet-800 transition duration-200"
              >
                Contact
              </a>
            </nav>
          </div>
        </header>
    )
}