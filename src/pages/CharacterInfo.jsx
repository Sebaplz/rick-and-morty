import { useLoaderData } from "react-router";
import Back from "../components/Back";

function CharacterInfo() {
  const { characterInfo } = useLoaderData();
  return (
    <div className="text-white">
      <div className="p-4 lg:pl-20">
        <Back />
      </div>
      <div className="flex flex-col items-center">
        <img
          src={characterInfo.image}
          alt={characterInfo.name}
          className="rounded-full w-auto"
        />
        <h2>ID: {characterInfo.id}</h2>
        <h2>Name: {characterInfo.name}</h2>
        <h2>
          Origen:{" "}
          <span className="font-semibold">{characterInfo.origin.name}</span>
        </h2>
        <h2>Gender: {characterInfo.gender}</h2>
        <h2>Specie: {characterInfo.species}</h2>
        <h2>
          Status:{" "}
          <span
            className={`${
              characterInfo.status === "Alive"
                ? "text-green-500"
                : characterInfo.status === "Dead"
                ? "text-red-500"
                : "text-yellow-400"
            } font-semibold`}
          >
            {characterInfo.status}
          </span>
        </h2>
      </div>
    </div>
  );
}
export default CharacterInfo;
