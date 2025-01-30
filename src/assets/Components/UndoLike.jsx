import { Tooltip } from "react-tooltip";
import Like from "../../assets/like.svg";
const UndoLike = () => {
  // State to keep track of the like status

  return (
    <div>
      <button className={`like-button `}>
        <img id="like-123" src={Like} alt="" />
      </button>
      <Tooltip anchorSelect="#like-123" place="top">
        like!
      </Tooltip>
    </div>
  );
};

export default UndoLike;
