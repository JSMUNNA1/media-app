import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import LikedPosts from "./components/Layout/LikePostLayout/LikedPosts";
import CreatePost from "./components/Layout/CreatePost/CreatePost";
import ShowPosts from "./components/AllDataShow/ShowPosts";
import UpdatePost from "./components/Layout/UpdatePost/UpdatePost";
import UnLikedPosts from "./components/Layout/UnLikePost/UnLike";

import Home from "./components/Layout/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/like",
        element: <LikedPosts />,
      },
      {
        path: "/create",
        element: <CreatePost />,
      },
      {
        path: "showposts",
        element: <ShowPosts />,
      },
      {
        path: "update",
        element: <UpdatePost />,
      },
      {
        path: "unlike",
        element: <UnLikedPosts />,
      },
    ],
  },
]);
export default function App() {
  return (
    // <div>
    //   <div className="">
    //     <Header></Header>
    //     {posts.length > 0 &&
    //       posts.map((post, el) => <Card key={el.id} post={post} />)}
    //   </div>
    // </div>
    <RouterProvider router={router}></RouterProvider>
  );
}
