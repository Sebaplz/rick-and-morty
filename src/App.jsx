import { useState, useEffect } from "react";
import CharacterList from "./components/CharacterList";
import Spinner from "./components/Spinner";
import "./App.css";
import Pagination from "./components/Pagination";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [Url, setUrl] = useState(
    "https://rickandmortyapi.com/api/character?page=1"
  );

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(Url);
      const data = await response.json();
      setCharacters(data.results);
      setInfo(data.info);
      setIsLoading(false);
    }
    fetchData();
  }, [Url]);

  return (
    <>
      <main className="text-white">
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="pb-8">
            <Pagination info={info} setUrl={setUrl} />
            <CharacterList characters={characters} />
            <Pagination info={info} setUrl={setUrl} />
          </div>
        )}
      </main>
    </>
  );
}

export default App;
