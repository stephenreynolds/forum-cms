import initialState from "./initialState";
import { CREATE_POST_SUCCESS, GET_POST_BY_ID_SUCCESS, GET_POSTS_SUCCESS } from "../actions/actionTypes";
import { PostModel } from "../../common/post";

const postReducer = (state = initialState,
                     action: { type: string, post: PostModel, posts: PostModel[] }) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return { post: action.post, posts: action.posts };
    case GET_POST_BY_ID_SUCCESS:
      return { post: action.post, posts: action.posts };
    case CREATE_POST_SUCCESS:
      return { ...state, posts: [...state.posts, action.post] };
    default:
      return state;
  }
};

export default postReducer;