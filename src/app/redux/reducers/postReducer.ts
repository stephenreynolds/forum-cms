import initialState from "./initialState";
import { CREATE_POST_SUCCESS, GET_POSTS_SUCCESS } from "../actions/actionTypes";
import { PostModel } from "../../common/post";

const postReducer = (state = initialState.posts,
                     action: { type: string, post: PostModel, posts: PostModel[] }) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      console.log(action.posts);
      return action.posts;
    case CREATE_POST_SUCCESS:
      return [...state, { ...action.post }];
    default:
      return state;
  }
};

export default postReducer;