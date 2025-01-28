import Like from "../../assets/like.svg";
const UndoLike = () => {
  // State to keep track of the like status

  return (
    <button className={`like-button `}>
      <img src={Like} alt="" />
    </button>
  );
};

export default UndoLike;
