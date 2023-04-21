import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useSearchParams } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import RegisterOption from "./pages/RegisterOption/RegisterOption";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import { ChakraProvider } from "@chakra-ui/react";
import EditProfile from "./pages/EditProfile/EditProfile";
import Footer from "./components/Footer/Footer";

const App = () => {
  // const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [isopen, setisopen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [user, setUser] = useState({});
  const [isLogin, setIsLogin] = useState(false);

  const [searchParams] = useSearchParams();

  const getUser = async () => {
    //
    const { data } = await axios.get(
      "http://localhost:5000/auth/login/success",
      {
        withCredentials: true,
      }
    );
    const user = data.user;
    setUser(user);
    const redirectUrl = data?.redirectUrl;
    console.log(redirectUrl);
    if (redirectUrl) {
      navigate(redirectUrl);
    }
  };

  useEffect(() => {
    if (searchParams.get("isSuccess") === "true") {
      getUser();
    }
    const isLogin = localStorage.getItem("isLogin");
    if (isLogin) {
      setIsLogin(isLogin);
    }
  }, []);

  const toggle = () => {
    setisopen(!isopen);
  };

  return (
    <ChakraProvider>
      <div className="App">
        <Navbar toggle={toggle}></Navbar>
        <Sidebar isopen={isopen} toggle={toggle} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={
              <RegisterOption setIsClient={setIsClient} isClient={isClient} />
            }
          />
          <Route path="/profile/edit/:userId" element={<EditProfile />} />
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
        <Footer></Footer>
      </div>
    </ChakraProvider>
  );
};

export default App;
