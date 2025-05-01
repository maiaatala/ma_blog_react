import customAxios from "./customAxios";
import { Post, ShortPostPaginated, Comment, CreateContact } from "./dto";

const getPosts = async (
  page = 1,
  itemsPerPage = 10,
): Promise<ShortPostPaginated> => {
  const res = await customAxios.get<ShortPostPaginated>("/posts", {
    params: { itemsPerPage, page },
  });
  return res.data;
};

const getPostById = async (postId: string): Promise<Post> => {
  const res = await customAxios.get<Post>(`/posts/${postId}`);
  return res.data;
};

const getPostComments = async (
  postId: string,
  parentCommentId: string | null = null,
): Promise<Comment[]> => {
  const res = await customAxios.get<Comment[]>(`/posts/${postId}/comments`, {
    params: { parentCommentId },
  });
  return res.data;
};

const postContact = async (contactdto: CreateContact): Promise<boolean> => {
  const res = await customAxios.post<unknown>(`/contact`, contactdto);
  return Boolean(res.data);
};

export const ApiCalls = {
  getPosts,
  getPostById,
  getPostComments,
  postContact,
};
