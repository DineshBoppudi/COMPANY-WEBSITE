import ServiceCard from "../ui/ServiceCard";
import { services } from "../../data/services";

export default function Services() {
  return (
    <section id="services" className="py-32">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <p className="text-blue-600 font-medium">
            OUR SERVICES
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
            Solutions Designed
            For Modern Businesses
          </h2>

          <p
            className="
            text-gray-500
            mt-6
            max-w-2xl
            mx-auto
          "
          >
            We create intelligent digital products
            that help businesses grow faster and
            operate more efficiently.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}

        </div>

      </div>

    </section>
  );
}