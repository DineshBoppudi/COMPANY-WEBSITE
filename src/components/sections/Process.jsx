import { useState } from "react";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We understand your business goals, users and requirements.",
      points: [
        "Business Analysis",
        "Requirement Gathering",
        "Market Research",
      ],
      icon: "🔍",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "We define roadmap, architecture and execution plan.",
      points: [
        "Planning",
        "Architecture Design",
        "Technology Stack",
      ],
      icon: "🎯",
    },
    {
      number: "03",
      title: "Design",
      description:
        "We create intuitive user experiences and interfaces.",
      points: [
        "Wireframes",
        "UI Design",
        "UX Review",
      ],
      icon: "🎨",
    },
    {
      number: "04",
      title: "Development",
      description:
        "We build scalable applications and APIs.",
      points: [
        "Frontend Development",
        "Backend APIs",
        "Integrations",
      ],
      icon: "💻",
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <section
      id="process"
      className="
      py-32
      bg-white
      "
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <div className="text-center">

          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            OUR PROCESS
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            How We Build Products
          </h2>

          <p className="text-xl text-gray-500 mt-6 max-w-3xl mx-auto">
            A proven process that transforms ideas into
            scalable digital products.
          </p>

        </div>

        {/* Main Card */}

        <div
          className="
          mt-20
          bg-blue-100
          rounded-[40px]
          border
          border-gray-100
          shadow-xl
          overflow-hidden
          "
        >
          <div className="grid md:grid-cols-2">

            {/* Left Side */}

            <div
              className="
              bg-blue-100
              p-12
              flex
              flex-col
              justify-center
              items-center
              text-center
              "
            >
              <div
                className="
                w-32
                h-32
                bg-white
                rounded-[32px]
                shadow-lg
                flex
                items-center
                justify-center
                text-5xl
                "
              >
                {steps[currentStep].icon}
              </div>

              <h3 className="text-4xl font-bold mt-8">
                {steps[currentStep].title}
              </h3>

              <p
                className="
                text-blue-600
                font-semibold
                tracking-widest
                mt-3
                "
              >
                PHASE {steps[currentStep].number}
              </p>
            </div>

            {/* Right Side */}

            <div className="p-12">

              <div className="flex justify-between items-start">

                <h3
                  className="
                  text-4xl
                  font-bold
                  text-orange-500
                  "
                >
                  {steps[currentStep].title}
                </h3>

                <span
                  className="
                  text-6xl
                  font-black
                  text-gray-100
                  "
                >
                  {steps[currentStep].number}
                </span>

              </div>

              <p
                className="
                text-gray-500
                text-lg
                mt-6
                leading-relaxed
                "
              >
                {steps[currentStep].description}
              </p>

              <div className="grid grid-cols-2 gap-6 mt-10">

                {steps[currentStep].points.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <div
                      className="
                      w-2
                      h-2
                      bg-pink-500
                      rounded-full
                      mt-3
                      "
                    />

                    <span className="text-gray-700">
                      {point}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </div>
        </div>

        {/* Navigation */}

        <div
          className="
          flex
          justify-center
          items-center
          gap-8
          mt-10
          "
        >
          <button
            onClick={prevStep}
            className="
            w-14
            h-14
            rounded-full
            bg-white
            shadow-md
            border
            border-gray-200
            hover:scale-105
            transition
            "
          >
            ←
          </button>

          <div className="flex items-center gap-3">

            <span
              className="
              text-orange-500
              font-bold
              text-xl
              "
            >
              {steps[currentStep].number}
            </span>

            {steps.map((_, index) => (
              <div
                key={index}
                className={`
                  w-3 h-3 rounded-full
                  ${
                    index === currentStep
                      ? "bg-blue-600"
                      : "bg-gray-300"
                  }
                `}
              />
            ))}

          </div>

          <button
            onClick={nextStep}
            className="
            w-14
            h-14
            rounded-full
            bg-blue-600
            text-white
            hover:bg-blue-700
            transition
            "
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
}