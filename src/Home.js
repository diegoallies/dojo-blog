import { useState } from "react";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'nvm vue hs', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        {title: 'react course', body: 'lorem ipsum...', author: 'diego', id: 3}

    ]);

    // const [name, setName] = useState('luigi');

    // const handleClick = (e) => {
    //     setName('clss');
    // }

    
    // const handleClickAgain  = (name, e) => {
    //     console.log('hello ' + name, e.target);
    // }

    return (
        <div className="home">
            <h2>Homepage</h2>

            {blogs.map((blog) =>  (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Writtem by {blog.author}</p>
                </div>
            ))}

            {/* <p>{name}</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain("Diego", e)}>Click me again</button> */}


        </div>
    );

}

export default Home;