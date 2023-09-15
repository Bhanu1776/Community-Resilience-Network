import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Navbar from "./components/Navbar";
import { Home } from "./pages/home";
import Location from "./pages/location/Location";
import NotFound from "./pages/notFound/NotFound";
import Login from "./pages/login/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Header from "./components/Header";


const useAuth = () => {
  const user = JSON.parse(localStorage.getItem('currentUser'));
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
  const queryClient = new QueryClient()
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  return (
    <>
      <Router>
        <div className=" flex w-full h-screen">
          <QueryClientProvider client={queryClient}>
            <GoogleOAuthProvider clientId={clientId}>
              <Navbar/>
              <Header/>
              <Routes>
                <Route exact path="/" element={<Login />} />
                <Route element={<ProtectedRoutes />}>
                  <Route exact path='/home' element={< Home />} />
                  <Route path='/location' element={<Location />} />
                </Route>

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
