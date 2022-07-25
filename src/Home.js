import { useState, useEffect } from "react";
import BlogList from './BlogList';
// import {useRef} from 'react';

const Home = () => {

    // const inputRef = useRef(null);
    
    const [blogs, setBlogs] = useState(null);

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlogs);
    // };

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setBlogs(data);
            })
    }, [] );

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

           {blogs &&  <BlogList blogs={blogs}/>}

{/* 
            <BlogList blogs={blogs.filter((blog) => blog.author === 'diego')}  /> */}
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