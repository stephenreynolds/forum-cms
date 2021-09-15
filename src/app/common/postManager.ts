import mockPosts from "../mockdb/posts.json";
import PostModel from "./post";

export const getPosts = (): PostModel[] => {
  return mockPosts.posts.map(post => {
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
  const res = mockPosts.posts.find(post => post.id === id);

  return {
    id: res.id,
    author: res.author,
    authorId: res.authorId,
    created: new Date(res.created),
    title: res.title,
    content: res.content
  };
};