export default function ScheduleCallModal({
  isOpen,
  onClose,
}) {
  if (!isOpen) return null;

  const handleSubmit = () => {

    onClose();

    alert(
      "Thank you! Your request has been submitted successfully."
    );
  };

  return (
    <div
      className="
      fixed inset-0
      bg-black/50
      flex items-center justify-center
      z-50
      "
    >
      <div
        className="
        bg-blue-300
        w-full
        max-w-md
        rounded-3xl
        p-8
        "
      >
        <div className="flex justify-between items-center">

          <h2 className="text-2xl font-bold">
            Schedule a Call
          </h2>

          <button
            onClick={onClose}
            className="text-xl"
          >
            ✕
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 mt-6"
        >

          <input
            type="text"
            placeholder="Your Name"
            required
            className="
            w-full
            border
            p-3
            rounded-xl
            "
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            className="
            w-full
            border
            p-3
            rounded-xl
            "
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="
            w-full
            border
            p-3
            rounded-xl
            "
          />

          <input
            type="date"
            className="
            w-full
            border
            p-3
            rounded-xl
            "
          />

          <input
            type="time"
            className="
            w-full
            border
            p-3
            rounded-xl
            "
          />

          <textarea
            placeholder="Project Requirement (Optional)"
            rows="4"
            className="
            w-full
            border
            p-3
            rounded-xl
            "
          />

          <button
            type="submit"
            className="
            w-full
            bg-black
            text-white
            py-3
            rounded-xl
            mt-2
            "
          >
            Submit
          </button>

        </form>

      </div>
    </div>
  );
}