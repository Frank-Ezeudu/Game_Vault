function Navbar() {
  return (
    <nav className="border-b border-gray-800 bg-[#111820] px-6 py-5">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <h2 className="text-2xl font-bold text-white">
          Game<span className="text-blue-400">Vault</span>
        </h2>

        <div className="flex gap-6">
          <a href="#home" className="text-gray-300 hover:text-blue-400">
            Home
          </a>

          <a href="#games" className="text-gray-300 hover:text-blue-400">
            Games
          </a>

          <a href="#about" className="text-gray-300 hover:text-blue-400">
            About
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;