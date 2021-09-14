import { Link } from "react-router-dom";
import PostModel from "../../common/post";
import Card from "../layout/card";
import PostHeader from "./post-header";
import styled from "styled-components";

const PreviewLink = styled(Link)`
  color: initial;
  text-decoration: none;
`;

const PostPreview = (post: PostModel) => {
  return (
    <Card>
      <PreviewLink to={"/posts/" + post.id}>
        <PostHeader author={post.author} created={post.created} title={post.title} />
        <p>{post.content}</p>
      </PreviewLink>
    </Card>
  );
};

export default PostPreview;