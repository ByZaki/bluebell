import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import useStore from "./store/store";

function App() {
  const auth = useStore((state) => state.isAuth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  }, [auth]);

  return (
    <>
      <Routes>
        {auth ? (
          <Route element={<MainLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
        ) : (
          <Route path="/login" element={<Login />} />
        )}
      </Routes>
    </>
  );
}

export default App;
