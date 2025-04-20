import { RefObject, useCallback, useEffect, useState } from "react";
import { ApiCalls } from "../services/services";
import { ShortPost } from "../services/dto";

export const useFetchPosts = (
  observerRef: RefObject<HTMLDivElement | null>,
) => {
  const [posts, setPosts] = useState<ShortPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPage, setNextPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchItems = useCallback(async (page = 1, itemsPerPage = 15) => {
    setIsLoading(true);
    try {
      const res = await ApiCalls.getPosts(page);
      const _nextPage = page + 1;
      const _hasMore = Math.ceil(res.totalItems / itemsPerPage) > _nextPage;
      setPosts((old) => [...old, ...res.items]);
      setNextPage(_nextPage);
      setHasMore(_hasMore);
    } catch (e) {
      console.error("error fetching posts", e);
      setError(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    console.log("hi", !observerRef?.current);
    if (!observerRef?.current || !hasMore || error) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isLoading) {
        fetchItems(nextPage);
      }
    });

    observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [isLoading, hasMore, observerRef, error, fetchItems, nextPage]);

  return {
    isLoading,
    hasMore,
    posts,
  };
};
