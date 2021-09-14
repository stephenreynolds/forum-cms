import PostModel from "../../common/post";
import PostHeader from "./post-header";
import Card from "../layout/card";

const Post = (post: PostModel) => {
  return (
    <Card>
      <PostHeader author={post.author} created={post.created} title={post.title} />
      <p>{post.content}</p>
    </Card>
  );
};

export default Post;