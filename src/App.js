import { Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing/landing";
import Register from "./pages/Auth/Register/register";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </>
  );
};
export default App;
