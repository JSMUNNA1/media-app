// React Component
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import { fetchPost } from "../../Redux/Action";
import { useEffect, useState, useCallback } from "react";
import Loading from "../../assets/Components/Loading";

export default function Home() {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 50 &&
      !isFetching
    ) {
      setIsFetching(true);
    }
  }, [isFetching]);

  useEffect(() => {
    dispatch(fetchPost(page));
    setIsFetching(false);
  }, [dispatch, page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (isFetching) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [isFetching]);

  return (
    <div>
      <div>
        {posts?.length > 0 ? (
          posts.map((post) => {
            return <Card key={post.id} post={post} />;
          })
        ) : (
          <Loading />
        )}
      </div>
      {isFetching && <Loading />} {/* Show loading indicator when fetching */}
    </div>
  );
}
