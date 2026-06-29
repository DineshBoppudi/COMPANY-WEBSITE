import { motion } from "framer-motion";
import portfolioImage from "../../assets/portfolio-showcase.png";

export default function Portfolio() {
  return (
    <section id="work" className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          className="relative"
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
            opacity-20
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
            "
          />
        </motion.div>

      </div>
    </section>
  );
}