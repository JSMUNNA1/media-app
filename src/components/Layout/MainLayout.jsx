import { useDispatch, useSelector } from "react-redux";

import Header from "../../components/Layout/Header/Header";
import { fetchPost } from "../../Redux/Action";
import { useEffect, useState } from "react";

import { Outlet } from "react-router-dom";

export default function MainLayout() {
  const { posts } = useSelector((state) => state.posts);
  const [untilPost, setUntilPost] = useState([]);

  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const handelInfiniteScroll = async () => {
    // console.log("scrollHeight" + document.documentElement.scrollHeight);
    // console.log("innerHeight" + window.innerHeight);
    // console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
        console.log(untilPost);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(fetchPost(page));
    setUntilPost((prev) => [...prev, posts]);
    console.log("datasHai=", posts);
  }, [page]);
  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);
  return (
    <div>
      <div className="">
        <Header></Header>

        <Outlet></Outlet>
      </div>
    </div>
  );
}
