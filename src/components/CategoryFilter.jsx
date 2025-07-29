const CategoryFilter = ({ setSelectedCategory }) => {
  const categories = ["All", "HTML", "CSS", "Tailwind", "JavaScript", "React"];

  return (
    <div className="flex justify-center gap-6 my-8 flex-wrap">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() =>
            setSelectedCategory(category === "All" ? "" : category)
          }
          className="ml-2 px-4 py-1.5 bg-blue-700 text-white text-sm rounded hover:bg-blue-800 transition"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
