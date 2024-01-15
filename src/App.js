import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import AuthContext from "./store/auth-context";
import { useContext } from "react";
import Mail from "./pages/Mail";

function App() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <Route path="/mail" element={<Mail />} />
        ) : (
          <Route path="/" element={<Auth />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
