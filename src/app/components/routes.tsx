import { BrowserRouter, Route, Switch } from "react-router-dom";
import PostFeed from "./posts/post-feed";
import Post from "./posts/post";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={["/"]} component={PostFeed} />
        <Route exact path={["/posts/:id/:title?"]} component={Post} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;