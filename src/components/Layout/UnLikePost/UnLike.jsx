import { useSelector } from "react-redux";

import Card from "../../Card/Card";

export default function UnLikedPosts() {
  const { posts } = useSelector((state) => state.posts);
  const likedPosts = posts?.filter((val) => {
    if (val.unlike) {
      return true;
    } else {
      return false;
    }
  });
  return (
    <div>
      {likedPosts?.length > 0 &&
        likedPosts.map((post, el) => <Card key={el.id} post={post} />)}
    </div>
  );
}
