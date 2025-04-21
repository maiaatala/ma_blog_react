import { useEffect } from "react";
import { Comment } from "../services/dto";
import { useFetchComments } from "../utility/useFetchComments";
import { Loading } from "./Loading";
import "./OneComment.css";

interface OneCommentProps {
  comment: Comment;
  postId: string;
  level?: number;
}

export const OneComment = (props: OneCommentProps) => {
  const { comment, postId, level = 0 } = props;

  const { comments, fetchComments, isLoading } = useFetchComments(postId);
  const hasFetchedReplies = comments?.length > 0;

  const date = new Date(comment.createdAt).toLocaleDateString("pt-br");

  useEffect(() => {
    if (level === 0 && comment.hasReplies && !hasFetchedReplies)
      fetchComments(comment.id);
  }, [level, comment.hasReplies, comment.id, hasFetchedReplies, fetchComments]);

  return (
    <article
      className="comment-wrapper"
      style={{
        marginLeft: level ? "20px" : "0px",
      }}
    >
      <div className="comment">
        <div className="comment-metadata">
          <img src={comment.author.photo} alt={comment.author.name} />
          <h4>
            {comment.author.name} • <span>{date}</span>
          </h4>
        </div>
        <p>{comment.content}</p>
        {comment.hasReplies && !isLoading && !hasFetchedReplies && (
          <button onClick={() => fetchComments(comment.id)}>
            + Ver Respostas
          </button>
        )}
      </div>
      {hasFetchedReplies &&
        comments.map((c) => (
          <OneComment comment={c} level={level + 1} postId={postId} />
        ))}

      {isLoading && <Loading width="50px" />}
    </article>
  );
};
