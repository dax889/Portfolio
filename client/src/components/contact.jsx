import { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post("http://localhost:5000/api/contact", form);

      alert("Message Sent Successfully 🚀");

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setLoading(false);
    } catch (err) {
      alert("Something went wrong ❌");
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#020617] text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-16">
          Contact <span className="text-orange-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT SIDE INFO */}
          <div className="space-y-8">

            <h3 className="text-2xl font-semibold">
              Let's Work Together
            </h3>

            <p className="text-gray-400">
              I'm open to freelance projects, collaborations, and full-time
              opportunities. Feel free to send a message and I'll respond as soon as possible.
            </p>

            {/* Email */}
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-orange-400 text-xl" />
              <span className="text-gray-300">
                dax@email.com
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-orange-400 text-xl" />
              <span className="text-gray-300">
                Gujarat, India
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 pt-4 text-2xl">

              <a
                href="https://github.com/"
                target="_blank"
                className="hover:text-orange-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                className="hover:text-orange-400 transition"
              >
                <FaLinkedin />
              </a>

            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <form
            onSubmit={submit}
            className="space-y-6 bg-[#0f172a] p-8 rounded-xl shadow-lg"
          >

            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              required
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="w-full p-4 bg-[#020617] border border-gray-700 rounded-lg focus:outline-none focus:border-orange-400"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              required
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full p-4 bg-[#020617] border border-gray-700 rounded-lg focus:outline-none focus:border-orange-400"
            />

            {/* Message */}
            <textarea
              rows="5"
              placeholder="Your Message"
              value={form.message}
              required
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="w-full p-4 bg-[#020617] border border-gray-700 rounded-lg focus:outline-none focus:border-orange-400"
            />

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 py-3 rounded-lg hover:bg-orange-600 transition font-semibold"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}