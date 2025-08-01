import { Link } from "react-router-dom";

const BlogCard = ({ post, deletePost }) => {
  return (
    <div className="w-full max-w-4xl bg-white shadow-sm rounded-md border border-gray-200 mb-6  overflow-hidden  md:ml-10">
      <div className="flex  flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/3">
          <img
            src={post.url}
            alt={post.title}
            className="w-full h-60 object-cover md:rounded-l-md md:rounded-r-none"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-2/3 p-5 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-black mb-2">{post.title}</h2>
            <p className="text-gray-700 mb-4">{post.description}</p>

            <div className="flex flex-wrap gap-2 text-sm mb-3">
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                {post.category}
              </span>
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center mt-4">
            <Link
              to={`/post/${post.id}`}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
            >
              Read More
            </Link>

            <button
              onClick={() => deletePost(post.id)}
              className="text-red-500 hover:underline text-sm"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
