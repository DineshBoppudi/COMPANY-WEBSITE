export default function CTA() {
  return (
    <section className="py-32">

      <div className="max-w-6xl mx-auto px-8">

        <div
          className="
          bg-black
          text-white
          rounded-[40px]
          p-16
          md:p-24
          text-center
          "
        >

          <p className="text-blue-400 font-medium uppercase tracking-widest">
            LET'S WORK TOGETHER
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
            Ready To Build
            Your Next Big Product?
          </h2>

          <p className="text-gray-400 mt-8 max-w-2xl mx-auto text-lg">
            From AI applications to enterprise platforms,
            we help businesses turn ideas into scalable products.
          </p>

          <div className="mt-10 flex justify-center gap-4">

            <button
              className="
              bg-white
              text-black
              px-8
              py-4
              rounded-full
              font-semibold
              hover:scale-105
              transition
              "
            >
              Start a Project
            </button>

            <button
              className="
              border
              border-gray-600
              px-8
              py-4
              rounded-full
              "
            >
              Schedule Call
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}