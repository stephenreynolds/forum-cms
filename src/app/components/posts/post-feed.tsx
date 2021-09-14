import { useEffect, useState } from "react";
import Post from "./post";
import { getPosts } from "../../common/postManager";

const PostFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  return (
    <>
      {
        posts && posts.length > 0 && posts.map((post) =>
          <Post key={post.id} id={post.id} author={post.author} authorId={post.authorId} created={post.created}
                title={post.title}
                content={post.content} />)
      }
    </>
  );
};

export default PostFeed;