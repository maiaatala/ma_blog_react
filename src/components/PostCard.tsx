import { ShortPost } from "../services/dto";
import "./PostCard.css";

interface PostCardProps {
  post: ShortPost;
  onClick: () => void;
}

export const PostCard = (props: PostCardProps) => {
  const {
    onClick,
    post: { id, image, title, description, createdAt, author },
  } = props;

  const date = new Date(createdAt).toLocaleDateString("pt-br");

  return (
    <div className="postcard-position" onClick={onClick}>
      <div className="postcard-wrapper">
        <img src={`https://picsum.photos/seed/${id}/1800/300`} alt={title} />
        <div className="metadata">
          <h3>{title}</h3>
          <p className="description">{description}</p>
          <div className="author">
            <p>{date}</p>
            <p>•</p>
            <p>{author.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
