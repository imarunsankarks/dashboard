import { Link } from 'react-router-dom'

const BlogList = ({ blogs, title }) => {
    // const blogs = props.blogs;
    // const title = props.title;
    return (
        <div className="row g-4">
            <h1>{title}</h1>
            {blogs.map((blog) => {
                return (
                    <div className="col-3" key={blog._id}>
                        <Link to={`/${blog._id}`} >
                            <div className="blog-card">
                                <img src={blog.image1} alt={blog.title} />
                                <div className="content">
                                    <h6 className="id">{blog.id}</h6>
                                    <h5 className="name">{blog.name}</h5>
                                    {/* <p>{blog.category}</p> */}
                                    <h6 className="price">Rs. {blog.price}</h6>
                                </div>
                            </div>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export default BlogList;