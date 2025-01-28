import { useSelector } from "react-redux";

import Card from "../../Card/Card";

export default function LikedPosts() {
  const { posts } = useSelector((state) => state.posts);
  const likedPosts = posts?.filter((val) => {
    if (val.like) {
      return true;
    } else {
      return false;
    }
  });
  return (
    <div>
      {likedPosts.length > 0 ? (
        likedPosts.map((post, el) => <Card key={el.id} post={post} />)
      ) : (
        <div className="flex justify-center items-center">
          <h1 className="text-2xl">you not like any Post....</h1>
        </div>
      )}
    </div>
  );
}
