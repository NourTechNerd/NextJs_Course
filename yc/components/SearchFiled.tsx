"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import { Search, X } from "lucide-react";

export default function SearchField() {
  const [query, setQuery] = useState("");
  const router = useRouter(); // Initialize router

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/?query=${query.trim().toLowerCase()}`); // Navigate to /?query=your_search
    }
  };

  return (
    <div className="search-form">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()} // Search on Enter key
        className="search-input"
        placeholder="Search for Startups"
      />
      <button onClick={handleSearch}>
        <Search className="text-white bg-black-200 rounded-full w-9 h-9 p-2" />
      </button>
      {query && (
        <button onClick={() => {setQuery(""); router.push("/")}}>
          <X className="text-white bg-black-200 rounded-full w-9 h-9 p-2" />
        </button>
      )}
    </div>
  );
}
