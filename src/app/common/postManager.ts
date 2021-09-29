import mockPosts from "../mockdb/posts.json";
import { PostModel, PostCreateModel } from "./post";
import { v4 as uuidv4 } from "uuid";

export const getPosts = async (): Promise<PostModel[]> => {
  const posts = JSON.parse(localStorage.getItem("posts"));
  return posts.map(post => {
    return {
      id: post.id,
      author: post.author,
      authorId: post.authorId,
      created: new Date(post.created),
      title: post.title,
      content: post.content
    };
  });
};

export const getPostById = (id: string): PostModel => {
  const posts = JSON.parse(localStorage.getItem("posts"));
  const res = posts.find(post => post.id === id);

  return {
    id: res.id,
    author: res.author,
    authorId: res.authorId,
    created: new Date(res.created),
    title: res.title,
    content: res.content
  };
};

export const createPost = async (post: PostCreateModel) => {
  const posts: PostModel[] = JSON.parse(localStorage.getItem("posts"));
  const createdPost: PostModel = {
    id: uuidv4(),
    author: post.author,
    authorId: post.authorId,
    created: new Date(),
    title: post.title,
    content: post.content
  };
  localStorage.setItem("posts", JSON.stringify([...posts, createdPost]));
  return createdPost;
};

export const initMockPosts = () => {
  const posts = localStorage.getItem("posts");
  if (!posts) {
    localStorage.setItem("posts", JSON.stringify(mockPosts));
  }
};