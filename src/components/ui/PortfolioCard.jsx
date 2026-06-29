export default function PortfolioCard({
  title,
  category,
  description,
}) {
  return (
    <div
      className="
      group
      bg-white
      rounded-[32px]
      overflow-hidden
      border
      border-gray-100
      hover:shadow-2xl
      hover:-translate-y-3
      transition-all
      duration-500
      "
    >
      {/* Fake Dashboard Preview */}

      <div
        className="
        h-72
        bg-gradient-to-br
        from-blue-50
        via-indigo-50
        to-purple-50
        p-6
        "
      >
        <div className="bg-white rounded-2xl shadow-lg p-4">

          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">

            <div className="bg-blue-50 p-3 rounded-xl">
              <p className="text-xs text-gray-500">
                Revenue
              </p>

              <h4 className="font-bold">
                $50K
              </h4>
            </div>

            <div className="bg-blue-50 p-3 rounded-xl">
              <p className="text-xs text-gray-500">
                Users
              </p>

              <h4 className="font-bold">
                2.4K
              </h4>
            </div>

            <div className="bg-blue-50 p-3 rounded-xl">
              <p className="text-xs text-gray-500">
                Growth
              </p>

              <h4 className="font-bold">
                +32%
              </h4>
            </div>

          </div>

          <div className="mt-6 space-y-3">

            <div className="h-3 bg-blue-200 rounded-full"></div>

            <div className="h-3 bg-blue-300 rounded-full w-4/5"></div>

            <div className="h-3 bg-blue-500 rounded-full w-2/3"></div>

          </div>

        </div>
      </div>

      <div className="p-8">

        <span
          className="
          inline-flex
          px-3
          py-1
          rounded-full
          bg-blue-50
          text-blue-600
          text-sm
          "
        >
          {category}
        </span>

        <h3 className="text-3xl font-bold mt-5">
          {title}
        </h3>

        <p className="text-gray-500 mt-4">
          {description}
        </p>

        <button
          className="
          mt-8
          font-semibold
          group-hover:translate-x-2
          transition-transform
          "
        >
          View Project →
        </button>

      </div>

    </div>
  );
}