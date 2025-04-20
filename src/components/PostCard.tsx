import { ShortPost } from "../services/dto";
import "./PostCard.css";

interface PostCardProps {
  post: ShortPost;
}

export const PostCard = (props: PostCardProps) => {
  const {
    post: { id, image, title, description },
  } = props;

  return (
    <div className="postcard-wrapper">
      <img src={`https://picsum.photos/seed/${id}/1800/300`} alt={title} />
      <div className="metadata">
        <h3>{title}</h3>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};
