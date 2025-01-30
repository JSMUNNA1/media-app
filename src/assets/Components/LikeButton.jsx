import { Tooltip } from "react-tooltip";
import Likefill from "../../assets/likefill.svg";

const LikeButton = () => {
  return (
    <div>
      <button className={`like-button `}>
        <img id="like-123" src={Likefill} alt="" />
      </button>
      <Tooltip anchorSelect="#like-123" place="top">
        Unlike!
      </Tooltip>
    </div>
  );
};

export default LikeButton;
