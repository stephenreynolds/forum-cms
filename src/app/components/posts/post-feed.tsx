import { useEffect, useState } from "react";
import Post from "./post";
import { getPosts } from "../../common/postManager";
import Container from "../layout/container";

const PostFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  return (
    <Container fitContent>
      {
        posts && posts.length > 0 && posts.map((post) =>
          <Post key={post.id} id={post.id} author={post.author} authorId={post.authorId} created={post.created}
                title={post.title}
                content={post.content} />)
      }
    </Container>
  );
};

export default PostFeed;