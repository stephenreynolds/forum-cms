export interface PostModel {
  id?: string;
  author: string;
  authorId: string;
  created: Date;
  title: string;
  content: string;
}

export interface PostCreateModel {
  author: string;
  authorId: string;
  title: string;
  content: string;
}