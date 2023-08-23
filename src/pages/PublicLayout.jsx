import { Outlet, useNavigation } from "react-router";
import Spinner from "../components/Spinner";

function PublicLayout() {
  const navigation = useNavigation();
  return (
    <>
      <header className="text-center p-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Rick and Morty API
        </h1>
      </header>
      {navigation.state === "loading" && <Spinner />}
      <Outlet />
    </>
  );
}
export default PublicLayout;
