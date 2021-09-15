import PostModel from "../../common/post";
import PostHeader from "./post-header";
import Card from "../layout/card";
import Container from "../layout/container";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPostById } from "../../common/postManager";

const Post = () => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState<PostModel>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    setPost(getPostById(id));
    setLoading(false);
  }, []);

  if (loading) {
    return <></>;
  }

  return (
    <Container maxWidth="640px">
      {!loading &&
      <Card>
        <PostHeader author={post.author} created={post.created} />
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </Card>
      }
    </Container>
  );
};

export default Post;