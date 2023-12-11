import React, { useState, useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";
import { APP_ICON } from "../../../Utils/Constants";

function SearchBar({ placeholder, onSearch }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        onSearch(query);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [query, onSearch]);

  const handleClear = () => {
    setQuery("");
    inputRef.current.focus();
  };

  return (
    <div className="flex items-center h-12 w-96 border-2 border-gray-400 rounded-lg bg-white shadow-lg">
      <div className="flex items-center pl-2 pr-1">
        <span className="iconify h-6 w-6 text-gray-800" icon={APP_ICON.i_search} />
      </div>
      <input
        type="text"
        value={query}
        placeholder={placeholder}
        onChange={(event) => setQuery(event.target.value)}
        className="flex-1 h-full px-2 outline-none"
        ref={inputRef}
      />
      <div
        className="flex items-center pl-1 pr-2 cursor-pointer"
        onClick={handleClear}
      >
        <span className="iconify h-6 w-6 text-gray-800" icon={APP_ICON.i_close} />
      </div>
    </div>
  );
}

export default SearchBar;