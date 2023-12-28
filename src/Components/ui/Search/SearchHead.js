import React, { useState, useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";
import { APP_ICON } from "../../../Utils/Constants";

function SearchHead({ placeholder, onSearch, isOpen, setIsOpen }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  const handleSearch = (event) => {
    event.stopPropagation(); // Prevent event from bubbling up to the document
    onSearch(query);
  };

  const handleClear = () => {
    setQuery("");
    inputRef.current.focus();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target) && 
          buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsOpen(false);
        handleClear();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`flex items-center h-12 w-full border-2 border-gray-400 rounded-lg bg-white shadow-lg transition-all duration-300 ${isOpen ? "h-12" : "h-0 overflow-hidden"}`}>
      <input
        type="text"
        value={query}
        placeholder={placeholder}
        onChange={(event) => setQuery(event.target.value)}
        className="flex-1 h-full px-2 outline-none rounded-lg"
        ref={inputRef}
      />
      <button
        ref={buttonRef}
        className="mr-2 px-3 flex items-center justify-center cursor-pointer bg-blue-500 text-white rounded h-8"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default SearchHead;
