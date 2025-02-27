import { RouterProvider } from "react-router";
import useStore from "../store/store";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

export default function Routing() {
  const auth = useStore((state) => state.isAuth);

  return <RouterProvider router={auth ? PrivateRoutes : PublicRoutes} />;
}
