import { Tooltip } from "react-tooltip";
import Like from "../../assets/dislike.svg";
const UndoDisLike = () => {
  return (
    <button className={`like-button `}>
      <img id="unlike-123" src={Like} alt="" />
      <Tooltip anchorSelect="#unlike-123" place="top">
        unlike!
      </Tooltip>
    </button>
  );
};

export default UndoDisLike;
