export default function ServiceCard({
  title,
  description,
  icon: Icon,
}) {
  return (
    <div
      className="
      bg-white
      p-8
      rounded-[30px]
      border
      border-gray-100
      hover:shadow-2xl
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
        bg-blue-50
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

      <h3 className="text-2xl font-semibold mt-6">
        {title}
      </h3>

      <p className="text-gray-500 mt-4">
        {description}
      </p>

    </div>
  );
}