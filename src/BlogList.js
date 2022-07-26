import {Link} from 'react-router-dom'

const BlogList = ( { blogs,}) => {
// const blogs = props.blogs;


// console.log(props,blogs)

    return(
        <div className="blog-list">
            {blogs.map(blog => (
            <div className="blog-preview" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                </Link>
                
                {/* <button onClick={() => handleDelete(blog.id)}>delete blog</button> */}
            </div>
              ))}
        </div>
    )


}

export default BlogList;