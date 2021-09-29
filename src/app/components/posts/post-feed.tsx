import { useEffect } from "react";
import Container from "../layout/container";
import PostPreview from "./post-preview";
import NewPostFormPreview from "./new-post/new-post-form-preview";
import { bindActionCreators } from "redux";
import { getPosts } from "../../redux/actions/postActions";
import { connect } from "react-redux";
import { PostModel } from "../../common/post";

interface Props {
  posts: PostModel[],
  actions: {
    getPosts: () => any;
  }
}

const sortByDate = (posts) => {
  return posts.sort((a,b) => {
    return +b.created - +a.created;
  });
};

const PostFeed = ({ posts, actions }: Props) => {
  useEffect(() => {
    if (!posts || posts.length === 0) {
      actions.getPosts().catch(error => {
        console.log(`Failed to load trades. ${error}`);
      });
    }
  }, [posts, actions]);

  return (
    <Container maxWidth="640px">
      <NewPostFormPreview />
      {
        posts && posts.length > 0 && sortByDate(posts).map((post) =>
          <PostPreview key={post.id} id={post.id} author={post.author}
                       authorId={post.authorId} created={post.created}
                       title={post.title} content={post.content} />)
      }
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getPosts: bindActionCreators(getPosts, dispatch)
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostFeed);