import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials"className="py-32 bg-white">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <p className="text-blue-600 font-medium">
            TESTIMONIALS
          </p>

          <h2 className="text-5xl font-bold mt-4">
            What Clients Say
          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
              bg-gray-50
              p-8
              rounded-3xl
            "
            >
              <p className="text-lg">
                "{item.review}"
              </p>

              <div className="mt-8">

                <h4 className="font-semibold">
                  {item.name}
                </h4>

                <p className="text-gray-500">
                  {item.company}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}