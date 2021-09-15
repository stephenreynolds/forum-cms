import { useEffect, useState } from "react";
import { getPosts } from "../../common/postManager";
import Container from "../layout/container";
import PostPreview from "./post-preview";
import NewPostFormPreview from "./new-post/new-post-form-preview";

const PostFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  return (
    <Container maxWidth="640px">
      <NewPostFormPreview />
      {
        posts && posts.length > 0 && posts.map((post) =>
          <PostPreview key={post.id} id={post.id} author={post.author} authorId={post.authorId} created={post.created}
                title={post.title}
                content={post.content} />)
      }
    </Container>
  );
};

export default PostFeed;