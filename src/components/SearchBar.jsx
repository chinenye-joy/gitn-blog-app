

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
   
         <div className="w-full max-w-2xl mx-auto flex flex-col sm:flex-row py-15 gap-4 p-4">
    <input
      type="text"
     placeholder="Search by title or tag..."
      value={searchQuery}
      onChange={handleChange}
      className="
      w-full sm:flex-1
      max-w-md
      border border-[#D1D5DB] shadow-md
      px-4 py-2
      rounded-2xl
      text-sm md:text-base outline-none
    "
    />
    </div>
  
  );
};

export default SearchBar;
