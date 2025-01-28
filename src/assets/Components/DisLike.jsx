import Likefill from "../../assets/Dislikefill.svg";
const DisLike = () => {
  return (
    <button className={`like-button `}>
      <img src={Likefill} alt="" />
    </button>
  );
};

export default DisLike;
