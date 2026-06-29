export default function Stats() {
  const stats = [
    {
      number: "100+",
      label: "Clients"
    },

    {
      number: "250+",
      label: "Projects"
    },

    {
      number: "99%",
      label: "Success Rate"
    },

    {
      number: "5+",
      label: "Years"
    }
  ];

  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((stat, index) => (
            <div
              key={index}
     className="
bg-white
rounded-[30px]
p-10
border
border-gray-100
hover:shadow-xl
hover:-translate-y-2
transition-all
duration-300
"
            >
              <h3 className="text-5xl font-bold">
                {stat.number}
              </h3>

              <p className="text-gray-500 mt-3">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}