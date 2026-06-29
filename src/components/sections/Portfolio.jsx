import portfolioImage from "../../assets/portfolio-showcase.png";

export default function Portfolio() {
  return (
    <section id="work" className="py-40 bg-white">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <p className="text-blue-600 font-semibold uppercase">
            OUR WORK
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            Recent Projects
          </h2>

          <p className="text-xl text-gray-500 mt-6 max-w-3xl mx-auto">
            We build intelligent digital products,
            AI applications and data platforms
            that drive real business impact.
          </p>

        </div>

        <div className="mt-20">

          <img
            src={portfolioImage}
            alt="Portfolio Showcase"
            className="
            w-full
            rounded-[40px]
            shadow-2xl
            border
            border-gray-100
            "
          />

        </div>

      </div>

    </section>
  );
}