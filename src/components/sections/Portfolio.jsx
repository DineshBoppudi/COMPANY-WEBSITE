import { motion } from "framer-motion";
import portfolioImage from "../../assets/portfolio-showcase.png";

export default function Portfolio() {
  return (
    <section className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <p className="text-blue-600 font-semibold tracking-wider uppercase">
            Our Work
          </p>

          <h2
            className="
            text-5xl
            md:text-6xl
            font-bold
            tracking-tight
            mt-4
            "
          >
            Recent Projects
          </h2>

          <p
            className="
            text-xl
            text-gray-500
            mt-6
            max-w-3xl
            mx-auto
            "
          >
            We build intelligent digital products,
            AI applications, and data platforms
            that drive real business impact.
          </p>

        </div>

        <motion.div
          className="relative mt-20"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <div
            className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[700px]
            h-[300px]
            bg-blue-200
            opacity-30
            blur-[120px]
            rounded-full
            "
          />

          <img
            src={portfolioImage}
            alt="Portfolio Showcase"
            className="
            relative
            z-10
            w-full
            rounded-[40px]
            shadow-2xl
            border
            border-gray-100
            "
          />

        </motion.div>

      </div>
    </section>
  );
}