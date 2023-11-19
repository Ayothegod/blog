import "../styles/PostDetail.css"
import Footer from "../components/Footer";
import Header from "../components/Header";
import testImage from "../assets/forest-2-unsplash.jpg";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import Comment from "../components/Comment";

export default function PostDetail() {
  return (
    <>
      <Header />

      <div className="post-main">
        <div className="post-details">
          <div className="details-header">
            <h2>The Advantages of living in Nature</h2>
            <div className="details-header-action">
              <FiEdit className="action-icon"/>
              <MdDelete className="action-icon"/>
            </div>
          </div>
          <div className="post-query">
            <p>@AdebisiAyomide</p>
            <p>18/11/23 10-45</p>
          </div>

          <div className="post-image">
            <img className="post-image-img" src={testImage} alt="post-image" />
          </div>

          <div className="post-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolores magni quasi nam alias saepe blanditiis eaque deleniti, quidem, aliquid atque sunt tenetur maiores laboriosam beatae praesentium! Voluptatem, placeat, iure officia quis minima autem earum suscipit rerum nulla quasi ipsum. Modi quod cumque perferendis delectus necessitatibus minima molestias mollitia sed unde tempora quibusdam deserunt, doloremque ullam quos veniam veritatis quam?</p>
          </div>

          <div className="post-category">
            <p>Categories</p>
            <ul className="categories">
                <li>Nature</li>
                <li>Wildlife</li>
            </ul>
          </div>
        </div>

        <div className="post-comments">
            <p>Comments:</p>

            <div className="comments-div">
                <Comment/>
                <Comment/>
            </div>

            <div className="create-comment">
                <input type="text" className="create-comment-input" placeholder="add a comment" />
                <button className="create-comment-button">Add Comment</button>
            </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
