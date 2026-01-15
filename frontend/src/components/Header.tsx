import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiX } from "react-icons/fi";

type Props = {
  onSearch: (quert: string) => void;
};

export const Header = ({ onSearch }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    onSearch(inputValue);
  };

  const handleClear = () => {
    setInputValue("");
    onSearch("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

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
            onKeyDown={handleKeyDown}
            type="text"
            placeholder="Search games..."
          />
        </div>
        <FiX onClick={handleClear} size={24} className="clear-icon" />
      </div>
    </header>
  );
};
