export default function TrustedCompanies() {

  const companies = [
    "Microsoft",
    "Google",
    "Amazon",
    "Adobe",
    "Spotify",
    "Netflix",
  ];

  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-8">

        <p
          className="
          text-center
          uppercase
          tracking-[4px]
          text-gray-400
          text-sm
          "
        >
          Trusted By Innovative Teams
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-12">

          {companies.map((company) => (
            <div
              key={company}
              className="
              text-center
              font-bold
              text-gray-400
              text-xl
              "
            >
              {company}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}