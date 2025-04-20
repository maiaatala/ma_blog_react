import React, { useEffect, useRef } from "react";
import DateDisplay from "../components/DateDisplay";
import { ApiCalls } from "../services/services";
import { DefaultPageLayout } from "../layout/DefaultPageLayout";
import { Loading } from "../components/Loading";
import { LoadingOne } from "../components/LoadingOne";
import { useFetchPosts } from "../utility/useFetchPosts";
import { PostCard } from "../components/PostCard";

const HomePage: React.FC = () => {
  const observerRef = useRef(null);

  const { posts, isLoading } = useFetchPosts(observerRef);

  return (
    <main style={{ padding: "20px 1em", flex: 1, maxWidth: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px 20px",
          flexWrap: "wrap",
        }}
      >
        {posts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
      {isLoading && <Loading />}
      <div ref={observerRef} style={{ height: "1px", width: "1px" }} />
    </main>
  );
};

export default HomePage;
