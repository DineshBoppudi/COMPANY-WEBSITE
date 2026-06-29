import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 overflow-hidden bg-gradient-to-b from-white to-blue-50">

      {/* Background Glow */}

      <div
        className="
        absolute
        top-20
        right-0
        w-[600px]
        h-[600px]
        bg-blue-300
        opacity-20
        blur-[180px]
        rounded-full
        "
      />

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 relative z-10">

        {/* Left Side */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="flex flex-col justify-center"
        >

          <div
            className="
            inline-flex
            w-fit
            px-4
            py-2
            rounded-full
            bg-blue-100
            text-blue-700
            text-sm
            font-medium
            "
          >
            🚀 Trusted By 100+ Businesses
          </div>

          <h1
            className="
            text-5xl
            lg:text-7xl
            font-bold
            tracking-tight
            leading-[1]
            mt-8
            "
          >
            Building
            Intelligent
            Digital Products
            For Growth
          </h1>

          <p
            className="
            text-xl
            text-gray-500
            mt-8
            max-w-2xl
            "
          >
            We help startups and enterprises build AI
            applications, analytics platforms, data solutions,
            and modern web products that scale globally.
          </p>

          <div className="flex gap-4 mt-10">

            <button
              className="
              bg-black
              text-white
              px-8
              py-4
              rounded-full
              hover:scale-105
              transition
              "
            >
              Start Project
            </button>

            <button
              className="
              bg-white
              border
              border-gray-300
              px-8
              py-4
              rounded-full
              hover:bg-gray-50
              transition
              "
            >
              View Work
            </button>

          </div>

          {/* Trusted Users */}

          <div className="flex items-center gap-4 mt-10">

            <div className="flex -space-x-3">

              <div className="w-10 h-10 bg-blue-500 rounded-full border-4 border-white"></div>

              <div className="w-10 h-10 bg-green-500 rounded-full border-4 border-white"></div>

              <div className="w-10 h-10 bg-purple-500 rounded-full border-4 border-white"></div>

            </div>

            <p className="text-gray-500">
              Trusted by 100+ companies worldwide
            </p>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{
            opacity: 0,
            x: 50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="flex items-center justify-center"
        >

          <div
            className="
            relative
            bg-white
            rounded-[40px]
            p-8
            shadow-2xl
            border
            border-gray-100
            w-full
            max-w-xl
            "
          >

            {/* Floating Card */}

            <div
              className="
              absolute
              -top-6
              -right-6
              bg-white
              shadow-xl
              rounded-2xl
              p-4
              border
              border-gray-100
              "
            >
              <p className="text-sm text-gray-500">
                Active Users
              </p>

              <h3 className="text-2xl font-bold">
                10.4K
              </h3>
            </div>

            <div className="flex justify-between items-center">

              <h3 className="font-bold text-xl">
                Analytics Dashboard
              </h3>

              <span className="text-green-500 font-medium">
                ● Live
              </span>

            </div>

            {/* KPI Cards */}

            <div className="grid grid-cols-3 gap-4 mt-8">

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-2xl">

                <p className="text-sm text-gray-500">
                  Revenue
                </p>

                <h4 className="text-2xl font-bold">
                  $120K
                </h4>

              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-2xl">

                <p className="text-sm text-gray-500">
                  Users
                </p>

                <h4 className="text-2xl font-bold">
                  10K
                </h4>

              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-2xl">

                <p className="text-sm text-gray-500">
                  Growth
                </p>

                <h4 className="text-2xl font-bold">
                  +25%
                </h4>

              </div>

            </div>

            {/* Chart */}

            <div className="mt-10 space-y-5">

              <div className="h-4 rounded-full bg-blue-200"></div>

              <div className="h-4 rounded-full bg-blue-300 w-4/5"></div>

              <div className="h-4 rounded-full bg-blue-500 w-2/3"></div>

            </div>

            {/* Performance */}

            <div className="mt-10 bg-gray-50 p-6 rounded-3xl">

              <p className="text-gray-500">
                Monthly Performance
              </p>

              <h3 className="text-5xl font-bold mt-2">
                +42%
              </h3>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}