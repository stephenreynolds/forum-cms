import { Link } from "react-router-dom";
import PostModel from "../../common/post";
import Card from "../layout/card";
import PostHeader from "./post-header";
import styled from "styled-components";

const PreviewLink = styled(Link)`
  color: initial;
  text-decoration: none;
`;

const createPostLink = (id: string, title: string) => {
  const titleText = title.toLowerCase().split(" ").join("_");
  return `/posts/${id}/${titleText}`;
};

const PostPreview = (post: PostModel) => {
  return (
    <Card>
      <PostHeader author={post.author} created={post.created} />
      <PreviewLink to={createPostLink(post.id, post.title)}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </PreviewLink>
    </Card>
  );
};

export default PostPreview;