import { motion } from "framer-motion";

export default function About() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-24 bg-[#020617] px-6 text-white">

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center"
      >

        {/* LEFT SIDE */}
        <motion.div variants={item}>

          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-orange-400">Me</span>
          </h2>

          <p className="text-gray-300 leading-8 mb-6">
            I'm a Full Stack Developer based in Ahmedabad, India, passionate
            about building modern, scalable, and secure web applications.
            I enjoy transforming complex ideas into elegant and performant
            digital solutions.
          </p>

          <p className="text-gray-400 leading-8 mb-6">
            My development journey includes building real-time chat
            applications, ERP systems, blogging platforms, and dynamic
            business websites. I focus on clean architecture, optimized
            backend systems, and intuitive user interfaces.
          </p>

          <p className="text-gray-400 leading-8">
            My primary tech stack includes React, NodeJS, MongoDB, Django,
            JavaScript, and modern frontend frameworks like TailwindCSS.
            I'm constantly learning new technologies to stay ahead in the
            fast-moving world of web development.
          </p>

        </motion.div>


        {/* RIGHT SIDE STATS */}
        <motion.div
          variants={container}
          className="grid grid-cols-2 gap-8"
        >

          <motion.div
            variants={item}
            whileHover={{ scale: 1.07 }}
            className="bg-[#0f172a] p-8 rounded-xl text-center shadow-lg"
          >
            <h3 className="text-3xl font-bold text-orange-400">10+</h3>
            <p className="text-gray-400 mt-2">Projects Built</p>
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{ scale: 1.07 }}
            className="bg-[#0f172a] p-8 rounded-xl text-center shadow-lg"
          >
            <h3 className="text-3xl font-bold text-orange-400">5+</h3>
            <p className="text-gray-400 mt-2">Technologies Used</p>
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{ scale: 1.07 }}
            className="bg-[#0f172a] p-8 rounded-xl text-center shadow-lg"
          >
            <h3 className="text-3xl font-bold text-orange-400">100%</h3>
            <p className="text-gray-400 mt-2">Code Quality Focus</p>
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{ scale: 1.07 }}
            className="bg-[#0f172a] p-8 rounded-xl text-center shadow-lg"
          >
            <h3 className="text-3xl font-bold text-orange-400">∞</h3>
            <p className="text-gray-400 mt-2">Learning Mindset</p>
          </motion.div>

        </motion.div>

      </motion.div>
    </section>
  );
}