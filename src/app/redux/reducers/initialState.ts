const mockPosts = JSON.parse(window.localStorage.getItem("posts"));

export default {
  posts: mockPosts,
  post: {}
};