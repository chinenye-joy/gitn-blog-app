import { useState, useEffect } from "react";
import { initialPosts } from "../data/posts";
import CategoryFilter from "../components/CategoryFilter";
import BlogCard from "../components/BlogCard";
import SearchBar from "../components/SearchBar";
import { motion } from "framer-motion";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Load fresh posts when query or category changes
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("blog-posts"));
    if (savedPosts && savedPosts.length > 0) {
      setPosts(savedPosts);
    } else {
      setPosts(initialPosts);
      localStorage.setItem("blog-posts", JSON.stringify(initialPosts));
    }
  }, [searchQuery, selectedCategory]);

  // Optional: listen to localStorage change from another tab
  useEffect(() => {
    const syncPosts = () => {
      const latest = JSON.parse(localStorage.getItem("blog-posts")) || [];
      setPosts(latest);
    };

    window.addEventListener("storage", syncPosts);
    return () => window.removeEventListener("storage", syncPosts);
  }, []);

  // Delete post
  const deletePost = (id) => {
    const updated = posts.filter((post) => post.id !== id);
    setPosts(updated);
    localStorage.setItem("blog-posts", JSON.stringify(updated));
  };

  // Categories
  const categories = [...new Set(posts.map((post) => post.category))];

  // Filter
  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;

    const matchesSearch =
      searchQuery.trim() === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="mt-6"
    >
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="md:px-4 md:space-y-6 overflow-hidden">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} deletePost={deletePost} />
          ))
        ) : (
          <p className="text-center text-gray-600 mt-10">No posts found.</p>
        )}
      </div>
    </motion.div>
  );
};

export default Home;
