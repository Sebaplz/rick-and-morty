import { Link } from "react-router-dom";

function Back() {
  return (
    <Link to={".."} className="p-2 bg-cyan-700 rounded">
      ⬅️ Back
    </Link>
  );
}
export default Back;
