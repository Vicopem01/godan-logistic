import { Switch, Route, Redirect } from "react-router-dom";
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
import { createAutoLogout } from "./services/functions";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const validToken = createAutoLogout();
  if (!validToken) return <Redirect to="/login" />;
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/forgot-password" exact component={ForgotPassword} />
        <Route path="/auth/email/verify" exact component={Verify} />
        <Route path="/privacy-policy" exact component={Policy} />
        <Route path="/about-us" exact component={AboutUs} />
        <ProtectedRoute path="/profile" exact component={Profile} />
        <ProtectedRoute path="/history" exact component={History} />
        <Route path="/*" exact component={Error404} />
      </Switch>
    </>
  );
};
export default App;