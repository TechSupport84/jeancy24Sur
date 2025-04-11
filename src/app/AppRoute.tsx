import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import WelcomePage from "./WelcomePage";
import useAuth from "../hooks/useAuth";
import NavBar from "../components/NavBar";

function AppRoute() {
  const { user, loading } = useAuth();
 console.log("user: ", user)
  if (loading) {
    return <p className="text-center text-2xl">Loading...</p>;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/home" replace /> : <WelcomePage />}
        />
        <Route
          path="/home"
          element={
            user ? (
              <>
                <NavBar />
                <HomePage />
              </>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default AppRoute;
