import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Character.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

function Character({ character }) {
  return (
    <Link to={`/character/${character.id}`}>
      <div className="flex flex-col items-center hover:opacity-40">
        <img
          src={character.image}
          alt={character.name}
          className="rounded-full w-[250px] h-[250px]"
        />
        <h2 className="font-bold">ID: {character.id}</h2>
        <h2 className="font-bold">{character.name}</h2>
        <h3>
          Status:{" "}
          <span
            className={`${
              character.status === "Alive"
                ? "text-green-500"
                : character.status === "Dead"
                ? "text-red-500"
                : "text-yellow-400"
            } font-semibold`}
          >
            {character.status}
          </span>
        </h3>
      </div>
    </Link>
  );
}

export default Character;
