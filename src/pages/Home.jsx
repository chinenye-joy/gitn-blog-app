import { useState, useEffect } from "react";
import { initialPosts } from "../data/posts";
import CategoryFilter from "../components/CategoryFilter";
import BlogCard from "../components/BlogCard";
import SearchBar from "../Components/SearchBar";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Load posts from localStorage or fallback to initialPosts
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("blog-posts"));
    if (savedPosts && savedPosts.length > 0) {
      setPosts(savedPosts);
    } else {
      setPosts(initialPosts);
      localStorage.setItem("blog-posts", JSON.stringify(initialPosts));
    }
  }, []);

  // Save posts whenever they change
  useEffect(() => {
    localStorage.setItem("blog-posts", JSON.stringify(posts));
  }, [posts]);

  // Delete a post
  const deletePost = (id) => {
    const updated = posts.filter((post) => post.id !== id);
    setPosts(updated);
  };

  // Unique categories
  const categories = [...new Set(posts.map((post) => post.category))];

  // Filtered posts
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
    <div className="mt-6">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
<div className="px-4 space-y-6">
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <BlogCard key={post.id} post={post} deletePost={deletePost} />
        ))
      ) : (
        <p className="text-center text-gray-600 mt-10">No posts found.</p>
      )}
      </div>
    </div>
  );
};

export default Home;
