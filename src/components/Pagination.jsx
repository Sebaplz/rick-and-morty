import PropTypes from "prop-types";
import { useState } from "react";

Pagination.propTypes = {
  info: PropTypes.shape({
    count: PropTypes.number.isRequired,
    pages: PropTypes.number.isRequired,
    next: PropTypes.string,
    prev: PropTypes.string,
  }).isRequired,
  setUrl: PropTypes.func.isRequired,
};

function Pagination({ info, setUrl }) {
  const [numberPage, setNumberPage] = useState(1);
  return (
    <div className="flex justify-between mx-8 xl:mx-20 items-center flex-wrap gap-4">
      {info.prev != null ? (
        <button
          className="p-2 bg-cyan-700 rounded"
          onClick={() => {
            setUrl(info.prev);
            setNumberPage(numberPage - 1);
          }}
        >
          ⬅️ Prev
        </button>
      ) : (
        <button
          className="p-2 bg-cyan-700 rounded disabled:opacity-40"
          onClick={() => {
            setUrl(info.prev);
            setNumberPage(numberPage - 1);
          }}
          disabled
        >
          ⬅️ Prev
        </button>
      )}
      <div className="flex gap-4">
        <h2>
          Total pages: <span className="font-bold">{info.pages}</span>
        </h2>
        <h2>
          Page: <span className="font-bold">{numberPage}</span>
        </h2>
        <h2>
          Characters: <span className="font-bold">{info.count}</span>
        </h2>
      </div>
      {info.next != null ? (
        <button
          className="p-2 bg-cyan-700 rounded"
          onClick={() => {
            setUrl(info.next);
            setNumberPage(numberPage + 1);
          }}
        >
          Next ➡️
        </button>
      ) : (
        <button
          className="p-2 bg-cyan-700 rounded disabled:opacity-40"
          onClick={() => {
            setUrl(info.next);
            setNumberPage(numberPage + 1);
          }}
          disabled
        >
          Next ➡️
        </button>
      )}
    </div>
  );
}
export default Pagination;
