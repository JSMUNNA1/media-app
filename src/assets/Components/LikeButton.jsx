import Likefill from "../../assets/likefill.svg";

const LikeButton = () => {
  return (
    <button className={`like-button `}>
      <img src={Likefill} alt="" />
    </button>
  );
};

export default LikeButton;
