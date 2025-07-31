const CategoryFilter = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
      <div className="flex justify-center">
    <div className="flex  flex-wrap gap-3 mb-6">
      <button
        onClick={() => setSelectedCategory("All")}
        className={`px-4 py-1 rounded-full border ${
          selectedCategory === "All"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-black hover:bg-blue-100"
        }`}
      >
        All
      </button>

      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-1 rounded-full border ${
            selectedCategory === category
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-black hover:bg-blue-100"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
    </div>
  );
};

export default CategoryFilter;


