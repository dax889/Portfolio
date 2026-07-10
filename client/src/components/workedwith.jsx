import { motion } from "framer-motion";

export default function WorkedWith() {
  const companies = [
    {
      name: "Instagram client",
      logo: "/Instagram logo.png",
    },
    {
      name: "Netflix client",
      logo: "/netflix logo.png",
    },
    {
      name: "Dropbox client",
      logo: "/Dropbox logo.png",
    },
    {
      name: "Spotify client",
      logo: "/Spotify logo2.png",
    },
    {
      name: "airbnb client",
      logo: "/airbnb logo.png",
    },
    {
      name: "Pinterest client",
      logo: "/Pinterest logo.png",
    },
  ];

  return (
    <section className="py-20 bg-[#020617] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-12">
          I've Worked <span className="text-orange-400">With</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center">

          {companies.map((company, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="shadow-lg flex items-center justify-center"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-28 hover:opacity-100 transition"
              />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}