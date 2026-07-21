const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Project = require("./models/Project");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:");
    console.error(err);
  });

    const count = await Project.countDocuments();

    if (count === 0) {
      console.log("No projects found. Seeding default projects...");

      await Project.insertMany([
        {
          title: "Django Chat Application",
          description:
            "WhatsApp-style chat with RSA encryption & AJAX polling.",
          tech: ["Django", "JavaScript", "RSA Encryption"],
          image: "/images/chat website.jpg",
          github: "https://github.com/dax889/ChatWebsite.git",
          demo: "#",
        },
        {
          title: "Yoga Blog Platform",
          description: "Full stack blog with JWT authentication and MongoDB.",
          tech: ["React", "NodeJS", "MongoDB"],
          image: "/images/Yoga Blog image.png",
          github: "https://github.com/dax889/Yoga-Blog-Post-Website.git",
          demo: "#",
        },
        {
          title: "Gym Management System",
          description:
            "Complete gym ERP system for member registration, trainer management, attendance tracking, fee management, and admin dashboard.",
          tech: ["React", "NodeJS", "MongoDB", "Express"],
          image: "/images/Gym3.jpg",
          github: "https://github.com/",
          demo: "#",
        },
        {
          title: "News Portal Website",
          description:
            "Dynamic news publishing platform with category filtering, admin content management, authentication system, and responsive UI.",
          tech: ["React", "NodeJS", "MongoDB"],
          image: "/images/News image.png",
          github: "https://github.com/",
          demo: "#",
        },
        {
          title: "Cryonix-IT Dynamic Website",
          description:
            "Corporate IT website showcasing hardware & software components with dynamic product listings, admin panel, and SEO-friendly structure.",
          tech: ["React", "NodeJS", "MongoDB", "Express"],
          image: "h/images/Cryonix-IT image2.png",
          github: "https://github.com/",
          demo: "#",
        },
        {
          title: "Ice Cream Ordering Website",
          description:
            "Online ice cream ordering system with product catalog, cart functionality, order management, and payment integration ready structure.",
          tech: ["Django", "Python", "SQLite"],
          image: "/images/icecream.png",
          github: "https://github.com/",
          demo: "#",
        },
      ]);

      console.log("Default projects added 🚀");
    }
  })
  .catch((err) => console.log(err));

app.use("/images", express.static("images"));

app.get("/api/projects", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
