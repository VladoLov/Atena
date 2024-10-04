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
    <div className="relative">
      <form onSubmit={handleSearch} className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
        >
          <Search className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
