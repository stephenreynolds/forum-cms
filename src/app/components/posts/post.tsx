import { PostModel } from "../../common/post";
import PostHeader from "./post-header";
import Card from "../layout/card";
import Container from "../layout/container";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getPostById } from "../../redux/actions/postActions";

interface Props {
  post: PostModel,
  actions: {
    getPostById: (id: string) => any;
  }
}

const Post = ({ post, actions }: Props) => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (!post || !post.id) {
      actions.getPostById(id).then(() => {
        setLoading(false);
      }).catch(error => {
        console.log(`Failed to load post. ${error}`);
      });
    }
  }, [id]);

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

const mapStateToProps = (state) => {
  return {
    post: state.posts.post
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getPostById: bindActionCreators(getPostById, dispatch)
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);