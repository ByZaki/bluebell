// import Dashboard from "./pages/Dashboard";
import { Route, Routes, useNavigate } from "react-router";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useEffect } from "react";
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
          <Route index element={<Dashboard />} />
        ) : (
          <Route path="/login" element={<Login />} />
        )}
      </Routes>
    </>
  );
}

export default App;
