import { useSelector } from "react-redux";
import Card from "../Card/Card";
export default function ShowPosts() {
  const { posts } = useSelector((state) => state.posts);
  console.log("====================================");
  console.log(posts, "show");
  console.log("====================================");
  return (
    <div>
      <div className="">
        {posts.length > 0 ? (
          posts.map((post, el) => <Card key={el.id} post={post} />)
        ) : (
          <h1>Not available</h1>
        )}
      </div>
    </div>
  );
}
