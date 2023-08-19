import PropTypes from "prop-types";
import Character from "./Character";

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

function CharacterList({ characters }) {
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8 justify-center">
        {characters.map((character) => (
          <Character key={character.id} character={character} />
        ))}
      </div>
    </>
  );
}

export default CharacterList;
