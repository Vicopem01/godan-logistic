import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext, PaymentContext, AppData } from "./context";
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
import { useState, useEffect, useMemo } from "react";
import { checkOrders, getSingleUserInfo } from "./services/apiCalls";
import { toast } from "react-toastify";
import ToastMessage from "./components/Toast/toast";
import { ProtectedRoute } from "./services/functions";
import Stage2 from "./pages/Landing/Stage2/stage2";
import Stage3 from "./pages/Landing/Stage3/stage3";
import Stage4 from "./pages/Landing/Stage4/stage4";
import Payment from "./pages/Payment/payment";

const App = () => {
  const [paid, setPaid] = useState(null);
  const [load, setLoad] = useState(false);
  const [user, setUser] = useState({});
  const [unpaid, setUnpaid] = useState([]);
  const [data, setData] = useState({
    startDestination: "",
    endDestination: "",
    distance: undefined,
    paymentMethod: "",
    vehicleCategory: "",
    amount: undefined,
  });
  const token = localStorage.getItem("token");

  useEffect(async () => {
    if (token) {
      try {
        const res = await getSingleUserInfo();
        console.log(res.data.data);
        setUser(res.data.data);
      } catch (error) {
        toast.error(
          <ToastMessage
            text="Error geting information"
            message={error.message}
          />
        );
      }
    }
  }, [token]);

  const timer = async () => {
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
  };
  useEffect(async () => {
    setInterval(function () {
      timer();
    }, 10000);
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppData.Provider value={{ data, setData }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/stage2"
            element={<Stage2 data={data} setData={setData} />}
          />
          <Route
            path="/stage3"
            element={<Stage3 data={data} setData={setData} />}
          />
          <Route path="/stage4" element={<Stage4 />} />
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
      </AppData.Provider>
    </UserContext.Provider>
  );
};
export default App;
