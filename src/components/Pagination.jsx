import PropTypes from "prop-types";

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
  const pageNumber = info.next ? info.next.split("page=")[1] : info.pages + 1;

  return (
    <div className="flex justify-between mx-8 xl:mx-20 items-center flex-wrap gap-4">
      {info.prev != null ? (
        <button
          className="p-2 bg-cyan-700 rounded hover:opacity-40"
          onClick={() => {
            setUrl(info.prev);
          }}
        >
          ⬅️ Prev
        </button>
      ) : (
        <button
          className="p-2 bg-cyan-700 rounded disabled:opacity-40"
          onClick={() => {
            setUrl(info.prev);
          }}
          disabled
        >
          ⬅️ Prev
        </button>
      )}
      <div className="flex gap-4">
        <h2>
          Characters: <span className="font-bold">{info.count}</span>
        </h2>
        <h2>
          Total pages: <span className="font-bold">{info.pages}</span>
        </h2>
        <h2>
          Page: <span className="font-bold">{pageNumber - 1}</span>
        </h2>
      </div>
      {info.next != null ? (
        <button
          className="p-2 bg-cyan-700 rounded hover:opacity-40"
          onClick={() => {
            setUrl(info.next);
          }}
        >
          Next ➡️
        </button>
      ) : (
        <button
          className="p-2 bg-cyan-700 rounded disabled:opacity-40"
          onClick={() => {
            setUrl(info.next);
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
