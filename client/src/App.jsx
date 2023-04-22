import axios from "axios";
import axiosInstance from "./utils/axiosInstance";

import { useContext, useEffect, useState } from "react";
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
import { FlexWorkContext } from "./context/ContextStore";

const App = () => {
  const navigate = useNavigate();
  const [isopen, setisopen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const { user, setUser, isLogin, setIsLogin, setUserId } =
    useContext(FlexWorkContext);

  const [searchParams] = useSearchParams();

  const getUser = async () => {
    const { data } = await axios.get(
      "http://localhost:5000/auth/login/success",
      {
        withCredentials: true,
      }
    );

    const id = data.userId;
    const redirectUrl = data?.redirectUrl;

    if (id && data.isLogin) {
      localStorage.setItem("userId", id);
      localStorage.setItem("isLogin", true);
      setUserId(id);
    }

    if (redirectUrl && data.isRegistered) {
      navigate(redirectUrl);
    } else {
      navigate("/");
    }
  };

  const getManualUser = async (userId) => {
    try {
      const { data } = await axiosInstance.get(`/user/${userId}`);
      if (data.data) {
        setUser(data.data);
        console.log(data.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    (async () => {
      if (searchParams.get("isSuccess") === "true") {
        await getUser();
      }
      const userId = localStorage.getItem("userId");
      setUserId(userId);
      await getManualUser(userId);

      const isLogin = localStorage.getItem("isLogin");

      if (isLogin && userId) {
        setIsLogin(true);
      }
    })();
  }, []);

  const toggle = () => {
    setisopen(!isopen);
  };

  const url = window.location.href;
  console.log(url.includes("/login"));

  return (
    <ChakraProvider>
      <div className="App">
        <Navbar toggle={toggle}></Navbar>
        <Routes>
          <Route
            path="/"
            element={isLogin ? <Home /> : <Login setUser={setUser}></Login>}
          />
          <Route
            path="/register"
            element={
              <RegisterOption setIsClient={setIsClient} isClient={isClient} />
            }
          />
          <Route
            path="/client"
            element={
              isLogin && user?.isClient ? (
                <RegisterOption setIsClient={setIsClient} isClient={isClient} />
              ) : (
                <Login></Login>
              )
            }
          />
          <Route
            path="/freelancer"
            element={
              isLogin && !user?.isClient ? (
                <RegisterOption setIsClient={setIsClient} isClient={isClient} />
              ) : (
                <Login></Login>
              )
            }
          />
          <Route path="/profile/edit/:userId" element={<EditProfile />} />
          <Route
            path="/register/client"
            element={<Register title={"Client"} />}
          />
          <Route
            path="/register/freelancer"
            element={<Register title={"Freelancer"} />}
          />
          <Route path="/login" element={<Login setUser={setUser} />} />
        </Routes>{" "}
        <Footer></Footer>
      </div>
    </ChakraProvider>
  );
};

export default App;
