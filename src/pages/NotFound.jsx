import { useRouteError } from "react-router-dom";
import Back from "../components/Back";

function NotFound() {
  const error = useRouteError();
  return (
    <div className="flex items-center justify-center text-white h-[80vh]">
      <Back />
      <div className="flex gap-2 ml-4">
        <i>{error.status}</i>
        <p>{error.statusText}</p>
      </div>
    </div>
  );
}
export default NotFound;
