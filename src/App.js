import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing/landing";
import Profile from "./pages/Profile/profile";
import Policy from "./pages/Policy/policy";
import AboutUs from "./pages/AboutUs/about";
import History from "./pages/DeliveryHistory/history";
import Register from "./pages/Auth/Register/register";
import Login from "./pages/Auth/Login/login";
import Verify from "./pages/Auth/Verify/verify";
import ForgotPassword from "./pages/Auth/ForgotPassword/forgot";
import Error404 from "./pages/404/404";
import Success from "./pages/Success/success";
import { createAutoLogout } from "./services/functions";
import OrderInfo from "./pages/BookingDetails/details";

const ProtectedRoute = ({ children }) => {
  const validToken = createAutoLogout();
  return validToken ? children : <Navigate replace to="/login" />;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/auth/email/verify" element={<Verify />} />
      <Route path="/privacy-policy" element={<Policy />} />
      <Route
        path="/about-us"
        element={
          <ProtectedRoute>
            <AboutUs />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/history"
        element={
          <ProtectedRoute>
            <History />
          </ProtectedRoute>
        }
      />
      <Route
        path="/success"
        element={
          <ProtectedRoute>
            <Success />
          </ProtectedRoute>
        }
      />
      <Route path="/*" element={<Error404 />} />
      {/* <ProtectedRoute path="/order-info/:id"  element={<OrderInfo} />/> */}
    </Routes>
  );
};
export default App;
