import { Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing/landing";
import Profile from "./pages/Profile/profile";
import Register from "./pages/Auth/Register/register";
import Login from "./pages/Auth/Login/login";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/register" exact component={Register} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </>
  );
};
export default App;
