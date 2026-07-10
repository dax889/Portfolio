import { motion } from "framer-motion";

export default function Testimonials() {

  const reviews = [
    {
      name: "Project Client",
      role: "Business Owner",
      message:
        "Dax delivered a highly professional website with great performance and modern design. Communication was smooth and the project was completed on time.",
    },
    {
      name: "Team Collaborator",
      role: "Frontend Developer",
      message:
        "Working with Dax was great. He has strong backend knowledge and understands how to design scalable systems.",
    },
    {
      name: "Mentor Feedback",
      role: "Senior Developer",
      message:
        "Dax shows excellent problem-solving skills and dedication to learning modern technologies.",
    },
  ];

  return (
    <section className="py-24 bg-[#0f172a] text-white">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-14">
          Things <span className="text-orange-400">People Say</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {reviews.map((review, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-[#020617] p-8 rounded-xl shadow-lg text-left"
            >

              <p className="text-gray-300 leading-7 mb-6">
                "{review.message}"
              </p>

              <div>
                <h4 className="font-semibold text-orange-400">
                  {review.name}
                </h4>

                <p className="text-sm text-gray-400">
                  {review.role}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}