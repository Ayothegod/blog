import "../styles/CreatePost.css"
import Footer from "../components/Footer";
import Header from "../components/Header";
import { MdCancel } from "react-icons/md";

export default function CreatePost() {
  return (
    <>
    <Header/>
    <div className="createpost">
        <div className="createpost-container">
            <h2>Create a post</h2>

            <div className="createpost-details">
                <input type="text" placeholder="Enter your title" className="title-input" />
                <input type="file" name="image"  />

                <div className="create-category">
                    <input type="text" placeholder="Enter your category" className="category-input" />
                    <button className="category-button">Add</button>
                </div>

                <div className="create-categories">
                    <div className="category">
                        <p>Tech</p>
                        <MdCancel className="category-icon" />
                    </div>
                    <div className="category">
                        <p>Tech</p>
                        <MdCancel className="category-icon" />
                    </div>
                </div>

                <textarea name="description" cols="30" rows="10" placeholder="Enter your description" className="description-input"></textarea>
                <button className="create-button">Create</button>
            </div>
        </div>
    </div>

    <Footer/>
    </>
  )
}
