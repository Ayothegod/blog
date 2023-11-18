import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

export default function Comment() {
  return (
    <div className="comment">
      <div className="comment-container">
        <div className="comment-details">
          <p>@Ayomide</p>
          <div className="details-action">
            <p className="action-date">18/11/23 10-45</p>
            <FiEdit className="action-icon" />
            <MdDelete className="action-icon" />
          </div>
        </div>
        <p className="comment-text">This is a nice read!. Thank author</p>
      </div>
    </div>
  );
}
