import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    loading,
    data: blogs,
  } = useFetch("/api/routes/" + id);

  const history = useHistory()

  console.log(blogs);

  const handleClick = () => {
    fetch('/api/routes/' + id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/')
    })
  }

  return (
    <div className="container product-details">
      {loading && <p>Loading...</p>}
      {blogs && (
        <div className="row">
          <div className="col-6">
            <div className="all-imgs">
              <img src={blogs.image1} alt="" className="img1" />
              <div className="inner-imgs">
                <img src={blogs.image2} alt="" className="img2" />
                <img src={blogs.image3} alt="" className="img3" />

              </div>
            </div>
          </div>
          <div className="col-6">
            <h2>{blogs.name}</h2>
            <h6>Price: {blogs.price}</h6>
            <p>Category: {blogs.category}</p>
            <p>Color: {blogs.color}</p>
            <p>Material: {blogs.material}</p>
            <p>Size: {blogs.size}</p>
            <button onClick={handleClick}>Delete</button>
          </div>
        </div>

      )}
    </div>
  );
};

export default BlogDetails;
