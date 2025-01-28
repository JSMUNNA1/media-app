import Like from "../../assets/dislike.svg";
const UndoDisLike = () => {
  return (
    <button className={`like-button `}>
      <img src={Like} alt="" />
    </button>
  );
};

export default UndoDisLike;
