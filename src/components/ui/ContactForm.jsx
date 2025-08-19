import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="flex justify-center text-sm md:text-base">
      <form
        action="https://formspree.io/f/xvgqbnvk"
        method="POST"
        className="space-y-4 rounded-xl w-full p-2"
      >
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="rounded-md bg-base-100 px-3 py-2 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="rounded-md bg-base-100 px-3 py-2 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="rounded-md bg-base-100 px-3 py-2 focus:outline-none"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="btn w-full border-1 p-3 border-neutral text-gray-300 
            hover:bg-neutral  hover:scale-105
            hover:shadow-[0_0_10px_rgba(79,70,229,255)]
            transition-all duration-300 ease-in-out"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
