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