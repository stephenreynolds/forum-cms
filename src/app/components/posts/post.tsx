import PostModel from "../../common/post";

const Post = (post: PostModel) => {
  return (
    <>
      <h2>{post.title}</h2>
      <h3>Author: {post.author}</h3>
      <h3>Created on: {post.created.toLocaleDateString()}</h3>
      <p>{post.content}</p>
    </>
  );
};

export default Post;