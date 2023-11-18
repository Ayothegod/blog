import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

export default function Comment() {
  return (
    <div className="comment">
      <div className="comment-container">
        <p>@Ayomide</p>
        <div>
          <p>18/11/23 10-45</p>
          <FiEdit className="action-icon" />
          <MdDelete className="action-icon" />
        </div>
      </div>
    </div>
  );
}
