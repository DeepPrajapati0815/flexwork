import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Register from "./pages/Register/Register";
import "./App.css";
import Login from "./pages/Login/Login";

const App = () => {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId="307284311912-itjp3mau9q780gvn15s6m7ffc4nv058n.apps.googleusercontent.com">
        <Router>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </GoogleOAuthProvider>
    </div>
  );
};

export default App;
