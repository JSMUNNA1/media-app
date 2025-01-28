import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/Card";

import { fetchPost } from "../../Redux/Action";
import { useEffect, useState } from "react";
import Loading from "../../assets/Components/Loading";

export default function Home() {
  const { posts } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      alert("Error When fetching Data From Server..", error);
    }
  };

  useEffect(() => {
    dispatch(fetchPost(page));
  }, [page]);
  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);
  return (
    <div>
      <div className="">
        {posts?.length > 0 ? (
          posts.map((post, el) => {
            return <Card key={el.id} post={post} />;
          })
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}
