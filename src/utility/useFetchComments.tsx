import { useCallback, useState } from "react";
import { ApiCalls } from "../services/services";
import { Comment } from "../services/dto";

export const useFetchComments = (postId: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);

  const fetchComments = useCallback(
    async (parentCommentId?: string) => {
      setIsLoading(true);
      try {
        const res = await ApiCalls.getPostComments(postId, parentCommentId);
        setComments(res);
      } catch (e) {
        console.error("error fetching comments", e);
      } finally {
        setIsLoading(false);
      }
    },
    [postId],
  );

  return {
    isLoading,
    comments,
    fetchComments,
  };
};
