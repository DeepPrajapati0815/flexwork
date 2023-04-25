import axios from "./utils/axiosInstance";

import { useCallback, useContext, useEffect, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { FlexWorkContext } from "./context/ContextStore";
import EditProfile from "./pages/EditProfile/EditProfile";
import FreelancerLandingPage from "./pages/FreelancerLandingPage/FreelancerLandingPage";
import FreelancerProfilePage from "./pages/FreelancerProfilePage/FreelancerProfilePage";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import RegisterOption from "./pages/RegisterOption/RegisterOption";

const App = () => {
  const navigate = useNavigate();
  const [isopen, setisopen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const { setUser } = useContext(FlexWorkContext);

  const [searchParams] = useSearchParams();

  const isLogin = localStorage.getItem("isLogin") === "true";
  const isUserClient = localStorage.getItem("isClient") === "true";

  const getUser = useCallback(async () => {
    const { data } = await axios.get("/auth/login/success", {
      withCredentials: true,
    });
    const id = data.userId;

    if (id && data.isLogin) {
      localStorage.setItem("userId", id);
      localStorage.setItem("isLogin", true);
    }

    if (data.isRegistered) {
      sessionStorage.setItem("isRegistered", true);
    }
  }, []);

  const getManualUser = useCallback(async (userId) => {
    try {
      const { data } = await axios.get(`/api/v1/user/${userId}`, {
        withCredentials: true,
      });

      localStorage.setItem("isClient", data.data.isClient);

      if (data.data) {
        setUser(data.data);
        if (searchParams.get("isClient") === "true" && data.data.isClient) {
          if (sessionStorage.getItem("isRegistered") === "true") {
            navigate("/client/profile");
            sessionStorage.removeItem("isRegistered");
          } else {
            navigate("/client");
          }
        }

        if (searchParams.get("isClient") === "true" && !data.data.isClient) {
          if (sessionStorage.getItem("isRegistered") === "true") {
            console.log("navigating....");
            navigate("/freelancer/profile");
            sessionStorage.removeItem("isRegistered");
          } else {
            navigate("/freelancer");
          }
        }
      }
    } catch (error) {}
  }, []);

  useEffect(() => {
    (async () => {
      if (searchParams.get("isSuccess") === "true") {
        await getUser();
      }
      const userId = localStorage.getItem("userId");
      await getManualUser(userId);
    })();
  }, []);

  const toggle = () => {
    setisopen(!isopen);
  };

  return (
    <ChakraProvider>
      <div className="App">
        <Navbar toggle={toggle}></Navbar>
        <Routes>
          <Route
            path="/"
            element={<Home isLogin={isLogin} isUserClient={isUserClient} />}
          />
          <Route
            path="/register"
            element={
              <RegisterOption
                isLogin={isLogin}
                isUserClient={isUserClient}
                setIsClient={setIsClient}
                isClient={isClient}
              />
            }
          />
          <Route
            path="/client"
            element={
              isLogin && isUserClient ? (
                <RegisterOption setIsClient={setIsClient} isClient={isClient} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/freelancer"
            element={
              isLogin && !isUserClient ? (
                <FreelancerLandingPage />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/freelancer/profile"
            element={
              isLogin && !isUserClient ? (
                <FreelancerProfilePage />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route
            path="/client/profile"
            element={
              isLogin && isUserClient ? (
                <FreelancerProfilePage />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route
            path="/register/client"
            element={
              <Register
                isLogin={isLogin}
                isUserClient={isUserClient}
                title={"Client"}
              />
            }
          />
          <Route
            path="/register/freelancer"
            element={
              <Register
                isLogin={isLogin}
                isUserClient={isUserClient}
                title={"Freelancer"}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                isLogin={isLogin}
                isUserClient={isUserClient}
                setUser={setUser}
              />
            }
          />

          <Route path="/*" element={<Navigate to={"/login"} />} />
        </Routes>{" "}
        <Footer></Footer>
      </div>
    </ChakraProvider>
  );
};

export default App;
