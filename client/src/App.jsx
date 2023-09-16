import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/Navbar";
import Guidelines from "./pages/Guidelines";
import { Home } from "./pages/home";
import Location from "./pages/location/Location";
import NotFound from "./pages/notFound/NotFound";
import Login from "./pages/login/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Header from "./components/Header";
import { regSw } from "./helper";
import { useEffect } from "react";
import SubscribeButn from "./components/SubscribeButn";
import Landing from "./pages/Landing";

const useAuth = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (user) {
    return true;
  }
  return false;
};

const ProtectedRoutes = () => {
  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

function App() {
  const queryClient = new QueryClient();
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  useEffect(() => {
    regSw();
  }, []);
  return (
    <>
      <Router>
        <div className=" flex w-full h-screen">
          <QueryClientProvider client={queryClient}>
            <GoogleOAuthProvider clientId={clientId}>
              <Navbar />
              <Header />
              <SubscribeButn />
              <Routes>
                <Route exact path="/" element={<Landing />} />
                <Route element={<ProtectedRoutes />}>
                  <Route exact path="/home" element={<Home />} />
                  <Route path="/location" element={<Location />} />
                  <Route path="/safety" element={<Guidelines />} />

                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </GoogleOAuthProvider>
          </QueryClientProvider>
        </div>
      </Router>
    </>
  );
}

export default App;
