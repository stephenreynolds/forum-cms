import { PostCreateModel, PostModel } from "../../common/post";
import * as postApi from "../../common/postManager";
import { CREATE_POST_SUCCESS, GET_POST_BY_ID_SUCCESS, GET_POSTS_SUCCESS } from "./actionTypes";

export const getPostsSuccess = (posts: PostModel[]) => {
  return { type: GET_POSTS_SUCCESS, posts };
};

export const getPostByIdSuccess = (post: PostModel) => {
  return { type: GET_POST_BY_ID_SUCCESS, post };
};

export const createPostSuccess = (post: PostModel) => {
  return { type: CREATE_POST_SUCCESS, post };
};

export const getPosts = () => {
  return (dispatch) => {
    return postApi
      .getPosts()
      .then(posts => {
        dispatch(getPostsSuccess(posts));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const getPostById = (id: string) => {
  return (dispatch) => {
    return postApi
      .getPostById(id)
      .then(post => {
        dispatch(getPostByIdSuccess(post));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const createPost = (post: PostCreateModel) => {
  return (dispatch) => {
    postApi
      .createPost(post)
      .then(createdPost => {
        dispatch(createPostSuccess(createdPost));
      })
      .catch((error) => {
        throw error;
      });
  };
};