import React, { useState } from "react";


const Header = ({ onSearch }) => {
  const [location, setLocation] = useState("");


  const handleSearch = () => {
    if (location.trim()) onSearch(location);
  };


  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Weather Dashboard</h1>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter location"
            className="p-2 rounded-l"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button
            className="bg-blue-700 p-2 rounded-r text-white"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </header>
  );
};


export default Header;