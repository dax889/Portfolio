import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Projects() {
  const [projects, setProjects] = useState(null); // start as null

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, []);

  // ✅ Loading state
  if (projects === null) {
    return (
      <section className="py-20 text-center">
        <p className="text-gray-400">Loading projects...</p>
      </section>
    );
  }

  // ✅ Empty state
  if (projects.length === 0) {
    return (
      <section className="py-20 text-center">
        <h3 className="text-xl text-gray-400">
          Projects Coming Soon 🚀
        </h3>
      </section>
    );
  }

  // ✅ Normal render
  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-400 mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8 ">
        {projects.map((project, i) => (
          <motion.div
            key={project._id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-102"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-62 object-cover"
            />

            <div className="p-6 ">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 px-3 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
                >
                  Live Demo
                </a>

                <Link
                  to={`/project/${project._id}`}
                  className="border border-blue-500 px-4 py-2 rounded hover:bg-blue-500"
                >
                  Details
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}