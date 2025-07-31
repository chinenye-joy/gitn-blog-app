

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex justify-center ">
         <div className="w-full max-w-2xl mx-auto flex flex-col sm:flex-row py-15 gap-4 mt-20 p-4">
    <input
      type="text"
     placeholder="Search by title or tag..."
      value={searchQuery}
      onChange={handleChange}
      className="
      w-full sm:flex-1
      max-w-lg
      border border-gray-300 shadow-md
      px-4 py-2
      rounded-2xl
      text-sm md:text-base outline-none
      
    "
    />
    </div>
  </div>
  );
};

export default SearchBar;
