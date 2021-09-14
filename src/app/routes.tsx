import { BrowserRouter, Route, Switch } from "react-router-dom";
import PostFeed from "./components/posts/post-feed";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={["/"]} component={PostFeed} />
      </Switch>
    </BrowserRouter>
  )
};

export default Routes;