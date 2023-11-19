import testImage from "../assets/forest-2-unsplash.jpg"
export default function HomePosts() {
  return (
    <div className="post">

      {/* left */}
      <div className="post-image">
        <img src={testImage} alt="test-image" className="textImage" />
      </div>

      {/* right */}
      <div className="post-content">
        <h2>The Advantages of living in Nature</h2>
        <div className="post-tag">
          <p>@AdebisiAyomide</p>
          <p>18/11/23 10-45</p>
        </div>
        <p className="post-detail">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde reiciendis quam architecto, necessitatibus quidem libero quaerat labore debitis ad pariatur, eligendi corrupti, laborum eaque molestiae quae laudantium aut ut nihil.
        </p>

      </div>
    </div>
  )
}
