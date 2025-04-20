import customAxios from "./customAxios";
import { Post, ShortPostPaginated, Comment } from "./dto";

const getPosts = async (
  itemsPerPage = 10,
  page = 1,
): Promise<ShortPostPaginated | null> => {
  try {
    const res = await customAxios.get<ShortPostPaginated>("/posts", {
      params: { itemsPerPage, page },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return null;
  }
};

const getPostById = async (postId: string): Promise<Post | null> => {
  try {
    const res = await customAxios.get<Post>(`/posts/${postId}`);
    return res.data;
  } catch (error) {
    console.error(`Error fetching post with ID ${postId}:`, error);
    return null;
  }
};

const getPostComments = async (
  postId: string,
  parentCommentId: string | null = null,
): Promise<Comment[] | null> => {
  try {
    const res = await customAxios.get<Comment[]>(`/posts/${postId}/comments`, {
      params: { parentCommentId },
    });
    return res.data;
  } catch (error) {
    console.error(`Error fetching comments for post ${postId}:`, error);
    return null;
  }
};

export const ApiCalls = {
  getPosts,
  getPostById,
  getPostComments,
};
