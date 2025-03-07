import { RouterProvider } from "react-router-dom";
import useStore from "../store/store";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

export default function Routing() {
  const auth = useStore((state) => state.isAuth);

  return (
    <RouterProvider
      key={auth ? "private" : "public"}
      router={auth ? PrivateRoutes : PublicRoutes}
    />
  );
}
