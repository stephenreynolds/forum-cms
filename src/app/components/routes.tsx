import { BrowserRouter, Route, Switch } from "react-router-dom";
import PostFeed from "./posts/post-feed";
import Post from "./posts/post";
import NewPostForm from "./posts/new-post/new-post-form";
import TopHeader from "./top-header/top-header";

const Routes = () => {
  return (
    <BrowserRouter>
      <TopHeader />
      <Switch>
        <Route exact path={["/"]} component={PostFeed} />
        <Route exact path={["/posts/:id/:title?"]} component={Post} />
        <Route exact path={["/new"]} component={NewPostForm} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;