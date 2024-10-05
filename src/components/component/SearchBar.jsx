"use client";
import { Search } from "lucide-react";
import { useState } from "react";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState(""); // To store the search query
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Query:", searchQuery);
    // Add the logic to handle search queries here
  };
  return (
    <div className="relative rounded-lg border-spacing-1 focus:outline-none border-platinum-400 focus:ring-2 focus:ring-platinum-500 border">
      <form onSubmit={handleSearch} className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border border-platinum-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-platinum-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-white-600 border-platinum-300  text-white rounded-r-md  focus:ring-2 focus:ring-platinum-500"
        >
          <Search className="h-6 w-6 text-black" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
