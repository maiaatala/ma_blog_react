import { useParams } from "react-router";
import { DefaultPageLayout } from "../layout/DefaultPageLayout";
import { Loading } from "../components/Loading";
import { useEffect, useState } from "react";
import { Post } from "../services/dto";
import { ApiCalls } from "../services/services";
import { OneComment } from "../components/OneComment";
import { useFetchComments } from "../utility/useFetchComments";
import { ScrollToTopButton } from "../components/ScrollTopBtn";

export const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  const { fetchComments, isLoading, comments } = useFetchComments(
    postId as string,
  );

  useEffect(() => {
    const fetchPost = async (id: string) => {
      try {
        const res = await ApiCalls.getPostById(id);
        setPost(res);
        fetchComments();
      } catch (e) {
        console.error(e);
      }
    };

    if (typeof postId === "string" && post?.id !== postId) fetchPost(postId);
  }, [postId, post?.id, fetchComments]);

  return (
    <div>
      {post && (
        <img
          src={post.image}
          alt={post.title}
          style={{
            width: "100%",
            height: "300px",
            maxHeight: "25vh",
          }}
        />
      )}
      <DefaultPageLayout
        leftContent={
          post && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                paddingRight: "10px",
                gap: "10px",
              }}
            >
              {post?.tags.map((t) => (
                <p
                  key={t}
                  style={{
                    borderRadius: "4px",
                    padding: "4px 6px",
                    background: "#b48ead",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "#2e3440",
                  }}
                >
                  {t}
                </p>
              ))}
            </div>
          )
        }
        rightContent={
          <div
            style={{
              position: "sticky",
              top: "40px",
              paddingLeft: "10px",
            }}
          >
            <ScrollToTopButton />
          </div>
        }
      >
        {!post && <Loading />}
        {post && (
          <article
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "stretch",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <h1
                style={{
                  fontWeight: 700,
                  fontSize: "2.25rem",
                  color: "#88c0d0",
                }}
              >
                {post.title}
              </h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "4px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={post.author.photo}
                  style={{
                    borderRadius: "50%",
                    width: "24px",
                    height: "24px",
                    objectFit: "cover",
                  }}
                  alt={post.author.name}
                />
                <p
                  style={{
                    fontWeight: 700,
                    color: "#8fbcbb",
                    fontSize: "0.8rem",
                  }}
                >
                  {post.author.name} •{" "}
                  {new Date(post.updatedAt).toLocaleDateString("pt-br")}
                </p>
              </div>
              <p
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "#d8dee9",
                }}
              >
                {post.description}
              </p>
            </div>
            <article
              id="post-content"
              style={{
                borderRadius: "8px",
                padding: "20px 12px",
                width: "100%",
                background: "#3b4252",
              }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        )}
        {post && (
          <section
            className="post-comments"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              justifyContent: "flex-start",
              gap: "16px",
            }}
          >
            {isLoading && <Loading />}
            {comments?.length > 0 &&
              comments.map((c) => (
                <OneComment key={c.id} comment={c} postId={post.id} />
              ))}
          </section>
        )}
      </DefaultPageLayout>
    </div>
  );
};
