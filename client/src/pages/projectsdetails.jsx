import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProjectDetails() {
  const { id } = useParams();

  const [project, setProject] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/projects").then((res) => {
      setProjects(res.data);

      const found = res.data.find((p) => p._id === id);
      setProject(found);
    });
  }, [id]);

  if (!project) return <div className="p-10 text-white">Loading...</div>;

  const relatedProjects = projects
    .filter((p) => p._id !== id)
    .slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto py-20 px-6 text-white">

      {/* Back Button */}
      <Link
        to="/"
        className="text-blue-400 hover:text-blue-300 mb-8 inline-block"
      >
        ← Back to Home
      </Link>

      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full max-h-[400px] object-cover rounded-xl mb-8 shadow-lg"
      />

      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

      {/* Description */}
      <p className="text-gray-300 mb-8 leading-relaxed">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-3 mb-10">
        {project.tech?.map((t, i) => (
          <span
            key={i}
            className="bg-gray-800 px-4 py-1 rounded-full text-sm"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-16">
        <a
          href={project.github}
          target="_blank"
          className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition"
        >
          GitHub
        </a>

        <a
          href={project.demo}
          target="_blank"
          className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition"
        >
          Live Demo
        </a>
      </div>

      {/* Related Projects */}
      <h2 className="text-2xl font-bold mb-6">
        Related Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {relatedProjects.map((p) => (
          <Link
            to={`/project/${p._id}`}
            key={p._id}
            className="bg-[#1e293b] rounded-xl overflow-hidden hover:scale-105 transition"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg text-blue-500 font-semibold mb-2">
                {p.title}
              </h3>

              <p className="text-sm text-gray-400 line-clamp-2">
                {p.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}