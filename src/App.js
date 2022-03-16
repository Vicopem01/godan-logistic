import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext, PaymentContext } from "./context";
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
import Payment from "./pages/Payment/payment";
import { useState, useEffect } from "react";
import { checkOrders, getSingleUserInfo } from "./services/apiCalls";
import { toast } from "react-toastify";
import ToastMessage from "./components/Toast/toast";

const ProtectedRoute = ({ children }) => {
  const validToken = createAutoLogout();
  return validToken ? children : <Navigate replace to="/login" />;
};

const App = () => {
  const [paid, setPaid] = useState(null);
  const [data, setData] = useState({});
  const [unpaid, setUnpaid] = useState([]);

  useEffect(async () => {
    if (localStorage.getItem("token")) {
      try {
        const res = await getSingleUserInfo();
        setData(res.data.data);
      } catch (error) {
        toast.error(
          <ToastMessage
            text="Error geting information"
            message={error.message}
          />
        );
      }
    }
  }, []);

  useEffect(async () => {
    try {
      const res = await checkOrders();
      console.log(res.data);
      res.data.length > 0 ? setPaid(true) : setPaid(false);
      setUnpaid(res.data);
    } catch (error) {
      error.response
        ? toast.error(
            <ToastMessage
              text="Error getting orders"
              message={error.response.data.message}
            />
          )
        : toast.error(
            <ToastMessage text="Error getting orders" message={error.message} />
          );
    }
  }, []);
  return (
    <UserContext.Provider value={data}>
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
      </Routes>
      {paid && (
        <PaymentContext.Provider value={{ paid, setPaid, unpaid }}>
          <Payment />
        </PaymentContext.Provider>
      )}
    </UserContext.Provider>
  );
};
export default App;
