import { useState } from "react";
import BlogList from './BlogList';
// import {useRef} from 'react';

const Home = () => {

    // const inputRef = useRef(null);
    
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'nvm vue hs', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        {title: 'react course', body: 'lorem ipsum...', author: 'diego', id: 3}

    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs);
    }

    // const [valuee, setValue] = useState('diego');

    // const handleChange = event => {
    //     document.getElementById('searchDta')
    // }

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

            <BlogList blogs={blogs} handleDelete={handleDelete}/>


            <BlogList blogs={blogs.filter((blog) => blog.author === 'diego')}  />
            {/* {valuee} */}
{/* 
            <div id="searchDta">your searched for - {valuee}</div> */}
            {/* {blogs.map((blog) =>  (
                
            ))} */}

            {/* <p>{name}</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain("Diego", e)}>Click me again</button> */}

{/* 
           search <input type="text"  ref={inputRef} onChange={handleChange}/>  */}

        </div>
    );

}

export default Home;