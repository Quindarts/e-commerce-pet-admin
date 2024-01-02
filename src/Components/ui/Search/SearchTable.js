// SearchTable.js
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import SearchBar from "./SearchBar";

function SearchTable({ data, columns }) {
  const [filter, setFilter] = useState("");

  return (
    <div className="container mx-auto">
      <SearchBar
        placeholder="Search by any column"
        onSearch={(query) => setFilter(query)}
      />
      <table className="border-collapse w-full">
        <thead>
          <tr className="bg-blue-100">
            {columns.map((column) => (
              <th className="border p-2 text-left" key={column}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(filter.trim() ? data.filter((item) =>
              columns.some((column) =>
                item[column].toLowerCase().includes(filter.toLowerCase())
              )
            ) : data).map((item) => (
              <tr className="border p-2" key={item.ID}>
                {columns.map((column) => (
                  <td className="border p-2" key={column}>
                    {item[column]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchTable;
