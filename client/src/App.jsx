import axios from "axios";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import RegisterOption from "./pages/RegisterOption/RegisterOption";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

const App = () => {
  // const [user, setUser] = useState(null);

  const [isopen, setisopen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const getUser = async () => {
    //
    const data = await axios.get("http://localhost:5000/auth/login/success", {
      withCredentials: true,
    });
    console.log(data);
  };

  useEffect(() => {
    (async () => {
      await getUser();
    })();
  }, []);

  const toggle = () => {
    setisopen(!isopen);
  };

  return (
    <div className="App">
      <Router>
        <Navbar toggle={toggle}></Navbar>
        <Sidebar isopen={isopen} toggle={toggle} />
        <Routes>
          <Route
            path="/register"
            element={
              <RegisterOption setIsClient={setIsClient} isClient={isClient} />
            }
          />
          <Route
            path="/client/register"
            element={<Register title={"Client"} />}
          />
          <Route
            path="/freelancer/register"
            element={<Register title={"Freelancer"} />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
