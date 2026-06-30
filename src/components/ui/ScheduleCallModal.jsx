import { useState } from "react";

export default function ScheduleCallModal({
  isOpen,
  onClose,
  onSuccess,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/book-call",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      console.log(data);

      onClose();

      onSuccess({
        name: formData.name,
        email: formData.email,
      });

    } catch (error) {
      console.error(error);

      alert(
        "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div
      className="
      fixed inset-0
      bg-black/60
      backdrop-blur-sm
      flex items-center justify-center
      z-50
      p-4
      "
    >
      <div
        className="
        bg-white
        w-full
        max-w-lg
        rounded-[32px]
        p-8
        shadow-2xl
        border
        border-gray-100
        "
      >
        <div className="flex justify-between items-start">

          <div>
            <h2 className="text-3xl font-bold text-black">
              Schedule a Call
            </h2>

            <p className="text-gray-500 mt-2">
              Tell us about your project and we'll
              get back to you shortly.
            </p>
          </div>

          <button
            onClick={onClose}
            className="
            text-gray-500
            hover:text-black
            text-xl
            "
          >
            ✕
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 mt-8"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            required
            value={formData.name}
            onChange={handleChange}
            className="
            w-full
            bg-gray-50
            border
            border-gray-200
            p-4
            rounded-2xl
            text-black
            placeholder:text-gray-400
            outline-none
            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-100
            transition
            "
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            required
            value={formData.email}
            onChange={handleChange}
            className="
            w-full
            bg-gray-50
            border
            border-gray-200
            p-4
            rounded-2xl
            text-black
            placeholder:text-gray-400
            outline-none
            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-100
            transition
            "
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="
            w-full
            bg-gray-50
            border
            border-gray-200
            p-4
            rounded-2xl
            text-black
            placeholder:text-gray-400
            outline-none
            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-100
            transition
            "
          />

          <div className="grid grid-cols-2 gap-4">

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="
              w-full
              bg-gray-50
              border
              border-gray-200
              p-4
              rounded-2xl
              text-black
              outline-none
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-100
              transition
              "
            />

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="
              w-full
              bg-gray-50
              border
              border-gray-200
              p-4
              rounded-2xl
              text-black
              outline-none
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-100
              transition
              "
            />

          </div>

          <textarea
            name="message"
            placeholder="Project Requirement (Optional)"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="
            w-full
            bg-gray-50
            border
            border-gray-200
            p-4
            rounded-2xl
            text-black
            placeholder:text-gray-400
            outline-none
            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-100
            transition
            "
          />

          <button
            type="submit"
            className="
            w-full
            bg-blue-600
            hover:bg-blue-700
            text-white
            font-semibold
            py-4
            rounded-2xl
            transition
            "
          >
            Schedule Call
          </button>

        </form>

      </div>
    </div>
  );
}