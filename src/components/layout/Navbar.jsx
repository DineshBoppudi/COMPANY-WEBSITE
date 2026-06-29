export default function ServiceCard({
  title,
  description,
  icon: Icon,
}) {
  return (
    <div
      className="
      group
      bg-white
      rounded-[28px]
      p-8
      border
      border-gray-100
      hover:shadow-xl
      hover:-translate-y-2
      transition-all
      duration-300
      "
    >
      <div
        className="
        w-14
        h-14
        rounded-2xl
        bg-gradient-to-r
        from-blue-50
        to-indigo-50
        flex
        items-center
        justify-center
        "
      >
        <Icon
          size={28}
          className="text-blue-600"
        />
      </div>

      <h3 className="text-2xl font-bold mt-6">
        {title}
      </h3>

      <p
        className="
        text-gray-500
        mt-4
        leading-relaxed
        "
      >
        {description}
      </p>

      <button
        className="
        mt-6
        text-blue-600
        font-semibold
        group-hover:translate-x-2
        transition-transform
        "
      >
        Learn More →
      </button>
    </div>
  );
}