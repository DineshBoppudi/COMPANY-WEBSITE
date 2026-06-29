export default function Navbar() {
  return (
    <header className="fixed top-5 left-0 right-0 z-50">

      <div className="max-w-7xl mx-auto px-8">

        <div
          className="
          bg-white/50
          backdrop-blur-2xl
          rounded-2xl
          px-8
          h-20
          flex
          items-center
          justify-between
          shadow-lg
          "
        >

          <div className="flex items-center gap-3">

            <div
              className="
              w-10
              h-10
              rounded-xl
              bg-gradient-to-r
              from-blue-600
              to-indigo-600
              flex
              items-center
              justify-center
              text-white
              font-bold
              "
            >
              D
            </div>

            <div>

              <h1 className="font-bold text-xl">
                DataVision
              </h1>

              <p className="text-xs text-gray-500">
                AI Studio
              </p>

            </div>

          </div>

          <nav className="hidden md:block">

            <ul className="flex gap-10 text-gray-600">

              <li className="hover:text-black cursor-pointer">
                Services
              </li>

              <li className="hover:text-black cursor-pointer">
                Work
              </li>

              <li className="hover:text-black cursor-pointer">
                Process
              </li>

              <li className="hover:text-black cursor-pointer">
                Contact
              </li>

            </ul>

          </nav>

          <button
            className="
            bg-black
            text-white
            px-6
            py-3
            rounded-xl
            hover:bg-gray-900
            transition
            "
          >
            Let's Talk
          </button>

        </div>

      </div>

    </header>
  );
}