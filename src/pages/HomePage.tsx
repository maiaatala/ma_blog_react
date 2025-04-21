import React, { useRef } from "react";
import { Loading } from "../components/Loading";
import { useFetchPosts } from "../utility/useFetchPosts";
import { PostCard } from "../components/PostCard";
import { useNavigate } from "react-router";

const HomePage: React.FC = () => {
  const observerRef = useRef(null);

  const { posts, isLoading } = useFetchPosts(observerRef);

  const navigate = useNavigate();

  return (
    <main style={{ padding: "20px 40px 120px", flex: 1, maxWidth: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px 20px",
          flexWrap: "wrap",
        }}
      >
        {posts.map((p) => (
          <PostCard
            onClick={() => navigate(`/posts/${p.id}`)}
            key={p.id}
            post={p}
          />
        ))}
      </div>
      {isLoading && <Loading />}
      <div ref={observerRef} style={{ height: "1px", width: "1px" }} />
    </main>
  );
};

export default HomePage;
