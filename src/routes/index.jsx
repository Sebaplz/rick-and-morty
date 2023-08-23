import { createHashRouter } from "react-router-dom";
import PublicLayout from "../pages/PublicLayout";
import App from "../App";
import NotFound from "../pages/NotFound";
import CharacterInfo from "../pages/CharacterInfo";
import { loaderCharacterInfo } from "../helpers/loaders";

export const router = createHashRouter([
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <NotFound />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <App />,
          },
          {
            path: "/character/:id",
            element: <CharacterInfo />,
            loader: loaderCharacterInfo,
          },
        ],
      },
    ],
  },
]);
