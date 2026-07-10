import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-950 via-gray-900 to-black px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-400 text-lg mb-4"
          >
            Hello 👋 I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Dax Patel
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-300 mb-6"
          >
            Full Stack Developer & Secure System Builder
          </motion.h2>

          <p className="text-gray-400 mb-8 max-w-lg">
            I build secure, scalable and high-performance web & mobile
            applications using React, NodeJS, Django and modern technologies.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="border border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500 transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center">
          <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

          <img
            src="/Dax Patel2.png" // Put your image inside public folder
            alt="Dax Patel"
            className="relative w-80 rounded-xl shadow-2xl bg-gray-800 p-4 border-2 "
          />
        </div>
      </div>
    </section>
  );
}
