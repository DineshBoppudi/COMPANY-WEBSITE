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

      {/* Project Preview */}

      <div
        className="
        h-80
        relative
        overflow-hidden
        bg-gradient-to-br
        from-blue-100
        via-indigo-100
        to-purple-100
        "
      >

        <div
          className="
          absolute
          inset-0
          group-hover:scale-110
          transition-transform
          duration-700
          "
        >

          <div className="absolute top-8 left-8 right-8">

            <div className="bg-white rounded-2xl p-4 shadow-lg">

              <div className="flex gap-2">

                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>

              </div>

              <div className="mt-6 space-y-3">

                <div className="h-3 bg-blue-200 rounded-full"></div>

                <div className="h-3 bg-blue-300 rounded-full w-4/5"></div>

                <div className="h-3 bg-blue-400 rounded-full w-2/3"></div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Content */}

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
          font-medium
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