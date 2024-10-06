"use client";
import { Search } from "lucide-react";
import { useState } from "react";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState(""); // To store the search query
  const [highlighted, setHighlighted] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") return; // Avoid empty search
    highlightText(searchQuery);
  };

  // Function to highlight the text on the page
  const highlightText = (query) => {
    clearHighlights(); // Clear previous highlights
    const bodyText = document.body; // Target the entire body
    const regex = new RegExp(query, "gi"); // Case-insensitive search

    const traverseNodes = (node) => {
      if (node.nodeType === 3) {
        // Text node
        const matches = node.textContent.match(regex);
        if (matches) {
          const span = document.createElement("span");
          span.innerHTML = node.textContent.replace(
            regex,
            (match) => `<mark>${match}</mark>`
          );
          node.parentNode.replaceChild(span, node);
          setHighlighted(true);
        }
      } else if (node.nodeType === 1 && node.childNodes) {
        // Element node
        node.childNodes.forEach(traverseNodes);
      }
    };

    traverseNodes(bodyText);
  };

  // Function to clear all highlights
  const clearHighlights = () => {
    if (highlighted) {
      document.querySelectorAll("mark").forEach((mark) => {
        const parent = mark.parentNode;
        parent.replaceChild(document.createTextNode(mark.textContent), mark);
      });
      setHighlighted(false);
    }
  };

  return (
    <div className="relative rounded-lg border focus:outline-none border-platinum-400 focus:ring-2 focus:ring-platinum-500">
      <form onSubmit={handleSearch} className="flex items-center">
        {/* Input field */}
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border border-platinum-400 rounded-l-md focus:outline-none focus:ring-2 focus:ring-platinum-500 w-64"
        />
        {/* Search button */}
        <button
          type="submit"
          aria-label="Search"
          className="px-4 py-2 bg-white border border-platinum-400 text-platinum-700 rounded-r-md hover:bg-platinum-100 focus:outline-none focus:ring-2 focus:ring-platinum-500"
        >
          <Search className="h-6 w-6" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
