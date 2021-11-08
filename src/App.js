import { Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing/landing";
import Profile from "./pages/Profile/profile";
import Register from "./pages/Auth/Register/register";
import Login from "./pages/Auth/Login/login";
import Verify from "./pages/Auth/Verify/verify";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/verify-mail" exact component={Verify} />
      </Switch>
    </>
  );
};
export default App;
