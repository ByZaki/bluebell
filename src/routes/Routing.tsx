import { Router, RouterProvider } from "react-router";
import adminRoutes from "./PrivateRoutes";
import distributorRoutes from "./PrivateRoutes";
import publicRoutes from "./PublicRoutes";
import useStore from "../store/store";

export default function Routing() {
  const auth = useStore((state) => state.isAuth);
  const role = useStore((state) => state.role);

  const router = new Router({
    routes: auth
      ? role === "admin"
        ? adminRoutes
        : distributorRoutes
      : publicRoutes,
  });

  return <RouterProvider router={router} />;
}
