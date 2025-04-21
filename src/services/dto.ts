export interface ShortPost {
  id: string;
  createdAt: string;
  title: string;
  description: string;
  image: string;
  author: {
    name: string;
  };
}

export interface ShortPostPaginated {
  totalItems: number;
  page: number;
  items: ShortPost[];
}

export interface Post {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  description?: string;
  image: string;
  content: string;
  author: {
    name: string;
    photo?: string;
  };
  tags: string[];
}

export interface Comment {
  id: string;
  postId: string;
  parentCommentId?: string;
  createdAt: string;
  content: string;
  hasReplies: boolean;
  author: {
    name: string;
    photo?: string;
  };
}
