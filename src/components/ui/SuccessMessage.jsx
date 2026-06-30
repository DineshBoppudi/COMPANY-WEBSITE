export default function SuccessMessage({
  name,
  email,
}) {
  return (
    <div
      className="
      fixed
      bottom-6
      right-6
      bg-white
      rounded-3xl
      shadow-2xl
      border
      border-gray-100
      p-6
      w-[420px]
      z-50
      "
    >
      <div className="flex items-start gap-4">

        <div
          className="
          w-14
          h-14
          rounded-full
          bg-green-100
          flex
          items-center
          justify-center
          text-green-600
          text-2xl
          font-bold
          shrink-0
          "
        >
          ✓
        </div>

        <div>

          <h3
            className="
            text-xl
            font-bold
            text-gray-900
            "
          >
            Thank You, {name}
          </h3>

          <p className="text-gray-500 mt-2">
            We've received your request and
            our team will review it shortly.
          </p>

          <div
            className="
            mt-3
            px-3
            py-2
            bg-blue-50
            rounded-xl
            border
            border-blue-100
            "
          >
            <p className="text-xs text-gray-500">
              Confirmation will be sent to
            </p>

            <p className="text-blue-600 font-medium">
              {email}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}