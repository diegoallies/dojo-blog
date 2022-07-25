import { useState } from "react";

const Home = () => {

    const [name, setName] = useState('luigi');

    const handleClick = (e) => {
        setName('clss');
    }

    
    // const handleClickAgain  = (name, e) => {
    //     console.log('hello ' + name, e.target);
    // }

    return (
        <div className="home">
            <h2 className={name}>Homepage</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click me</button>
            {/* <button onClick={(e) => handleClickAgain("Diego", e)}>Click me again</button> */}
        </div>
    );

}

export default Home;