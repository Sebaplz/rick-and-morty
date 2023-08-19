import PropTypes from "prop-types";

Character.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    origin: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

function Character({ character }) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={character.image}
        alt={character.name}
        className="rounded-full w-[250px] h-[250px]"
      />
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
      <h2>
        Origen: <span className="font-semibold">{character.origin.name}</span>
      </h2>
    </div>
  );
}

export default Character;
