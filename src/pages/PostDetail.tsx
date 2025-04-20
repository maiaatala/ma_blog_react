import { useParams } from "react-router";

export const PostDetail = () => {
  const { postId } = useParams();
  return <div>detailed post {postId} goes here</div>;
};
