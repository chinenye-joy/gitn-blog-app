import { useState } from "react";
import SearchBar from "../Components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CategoryFilter setSelectedCategory={setSelectedCategory} />
    </div>
  );
};

export default Home;
