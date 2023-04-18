import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Register from "./pages/Register";
const App = () => {
  return (
    <GoogleOAuthProvider clientId="307284311912-itjp3mau9q780gvn15s6m7ffc4nv058n.apps.googleusercontent.com">
      <Router>
        <Routes>
          <Route path="/client/register" element={<Register />} />
          <Route path="/freelancer/register" element={<Register />} />
          <Route path="/freelancer/login" element={<Register />} />
          <Route path="/freelancer/login" element={<Register />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
