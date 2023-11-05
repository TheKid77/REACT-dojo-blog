import { useState } from "react"
import BlogList from "./Bloglist";

const Home = () => {

    const [name, setName] = useState('Mario');
    const [age, setAge] = useState(25);
    const [blogs, setBlogs] = useState([
        { title : 'My New Website1', body: 'lorem ipsum1...', author: 'Mario', id : 1},
        { title : 'My New Website2', body: 'lorem ipsum2...', author: 'Yoshi', id : 2},
        { title : 'My New Website3', body: 'lorem ipsum3...', author: 'Luigi', id : 3},

    ])

    const handleClick = (e) => {
        setName('Luigi');
        setAge(current => age +1);
    }

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" />
        </div>
      );
}
 
export default Home;