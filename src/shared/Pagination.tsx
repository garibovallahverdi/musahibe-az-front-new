import React from "react";

// Prop türlerini tanımlayın
type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  if (totalPages < 2) return null;

  const onPageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <ul className="flex items-center justify-center space-x-2 mt-4">
      <li>
        <button
          className={`px-3 py-1 rounded ${
            currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-backgroundSecond"
          }`}
          onClick={() => onPageClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &laquo;
        </button>
      </li>

      {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) => (
        <li key={page}>
          <button
            className={`px-3 py-1 rounded ${
              page === currentPage
                ? "bg-blue-500 text-white"
                : "bg-backgroundSecond hover:bg-gray-300"
            }`}
            onClick={() => onPageClick(page)}
          >
            {page}
          </button>
        </li>
      ))}

      <li>
        <button
          className={`px-3 py-1 rounded ${
            currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-backgroundSecond"
          }`}
          onClick={() => onPageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &raquo;
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
