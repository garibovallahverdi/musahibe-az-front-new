import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); 

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?val=${encodeURIComponent(searchTerm)}`);
      setIsOpen(false); 
    }
  };

  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      {/* Buton */}
      <span
        onClick={() => setIsOpen(!isOpen)}
        className="block px-2 py-2 text-foreground cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </span>

      {/* Arama Inputu */}
      {isOpen && (
        <div
          className="left-0 -translate-x-1/2"
          style={{
            position: "absolute",
            top: "50px", 
            width: "300px",
            padding: "10px",
            backgroundColor: "white",
            border: "1px solid #ddd",
            borderRadius: "5px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: 999, 
          }}
        >
          <input
            className="w-full p-2 border-[1px] border-[#ccc] rounded-lg outline-none text-black"
            type="text"
            placeholder="Axtariş edin..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="mt-2 w-full p-2 bg-buttonBg rounded-lg text-white"
          >
            Axtar
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchInput;
