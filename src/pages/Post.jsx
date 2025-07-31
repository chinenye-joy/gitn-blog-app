import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CommentSection from "../components/CommentSection";

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("blog-posts")) || [];
    const foundPost = savedPosts.find((p) => p.id === Number(id));
    setPost(foundPost);
  }, [id]);

  const deletePost = () => {
    const savedPosts = JSON.parse(localStorage.getItem("blog-posts")) || [];
    const updated = savedPosts.filter((p) => p.id !== Number(id));
    localStorage.setItem("blog-posts", JSON.stringify(updated));
    navigate("/");
  };

  if (!post) {
    return <p className="text-center text-gray-500 mt-10">Post not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-20 px-4 py-10">
      {/* Image */}
      <img
        src={post.url}
        alt={post.title}
        className="w-full h-72 object-cover rounded-md shadow mb-8"
      />

      {/* Title and Meta */}
      <h1 className="text-4xl font-bold text-black mb-3">{post.title}</h1>

      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
          {post.category}
        </span>
        <span>📅 {post.date}</span>
      </div>

      {/* Content */}
      <div className="prose prose-blue max-w-none text-gray-800 mb-10">
        {post.content.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-10">
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Delete Button */}
      <div className="flex justify-end mb-16">
        <button
          onClick={deletePost}
          className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition"
        >
          Delete Post
        </button>
      </div>

      {/* Comments */}
      <CommentSection />
    </div>
  );
};

export default Post;
