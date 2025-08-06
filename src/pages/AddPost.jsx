import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AddPost = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    tags: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const newPost = {
    id: Date.now(),
    title: formData.title,
    description: formData.description,
    content: formData.content,
    tags: formData.tags.split(",").map((tag) => tag.trim()),
    category: formData.category,
    date: new Date().toISOString().split("T")[0],
    url: "https://source.unsplash.com/600x300/?blog,developer",
  };

  const saved = JSON.parse(localStorage.getItem("blog-posts")) || [];
  const updatedPosts = [newPost, ...saved];
  localStorage.setItem("blog-posts", JSON.stringify(updatedPosts));

  navigate("/", { replace: true });
  window.location.reload(); //  force homepage to reload fresh posts
};


  return (
    <motion.div 
      initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
    className="max-w-3xl mx-auto mt-40 p-9 md:p-6 bg-white rounded-md shadow md:drop-shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-black">Add New Post</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />

        <input
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Short Description"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />

        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Full Content"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded h-32"
        />

        <input
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          placeholder="Tags (comma-separated)"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />

        <input
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Publish Post
        </button>
      </form>
    </motion.div>
  );
};

export default AddPost;
