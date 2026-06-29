export default function Process() {

  const steps = [
    "Discovery",
    "Strategy",
    "Design",
    "Development"
  ];

  return (
    <section className="py-32 bg-white">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold">
          Our Process
        </h2>

        <div className="grid md:grid-cols-4 gap-8 mt-16">

          {steps.map((step, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-gray-50"
            >
              <div className="text-5xl font-bold text-gray-300">
                0{index + 1}
              </div>

              <h3 className="text-xl font-semibold mt-4">
                {step}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}