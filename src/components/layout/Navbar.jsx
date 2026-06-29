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

    <li>
      <a
        href="#services"
        className="hover:text-black transition"
      >
        Services
      </a>
    </li>

    <li>
      <a
        href="#work"
        className="hover:text-black transition"
      >
        Work
      </a>
    </li>

    <li>
      <a
        href="#process"
        className="hover:text-black transition"
      >
        Process
      </a>
    </li>

    <li>
      <a
        href="#contact"
        className="hover:text-black transition"
      >
        Contact
      </a>
    </li>

  </ul>
</nav>

         <a
  href="#contact"
  className="
  bg-black
  text-white
  px-6
  py-3
  rounded-xl
  "
>
  Let's Talk
</a>
        </div>

      </div>

    </header>
  );
}