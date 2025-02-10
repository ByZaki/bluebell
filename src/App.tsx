// import Dashboard from "./pages/Dashboard";
import { Route, Routes, useNavigate, useNavigation } from "react-router";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useContext, useEffect } from "react";
import { Context } from "./main";
import { observe } from "mobx";

function App() {
  const { store } = useContext(Context);

  const navigate = useNavigate();

  useEffect(() => {
    if (!store.isAuth) {
      navigate("/login");
    }
  }, [store.isAuth]);

  if (store.isAuth) {
    return (
      <Routes>
        <Route index element={<Dashboard />} />
      </Routes>
    );
  }
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default observe(App);
