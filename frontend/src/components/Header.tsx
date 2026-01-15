import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiX } from "react-icons/fi";

export const Header = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {};
  return (
    <header>
      <img
        src="https://static.eneba.games/branding/v2/logoFull.svg"
        alt="eneba logo"
      />
      <div className="wrapper">
        <div className="search-wrapper">
          <CiSearch onClick={handleSearch} size={28} className="search-icon" />
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
          />
        </div>
        <FiX
          onClick={() => setInputValue("")}
          size={24}
          className="clear-icon"
        />
      </div>
    </header>
  );
};
