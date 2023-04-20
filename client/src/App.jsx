import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import { useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import RegisterOption from "./components/RegisterOption/RegisterOption";
import Register from "./pages/Register/Register";

const App = () => {
  // const [user, setUser] = useState(null);

  const [isopen, setisopen] = useState(false);
  const [isClient, setIsClient] = useState(true);

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
            element={<RegisterOption setIsClient={setIsClient} />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
