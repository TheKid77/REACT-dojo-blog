import { useState, useEffect} from "react"
import BlogList from "./Bloglist";

const Home = () => {

    const [name, setName] = useState('Mario');
    
    const [blogs, setBlogs] = useState([
        { title : 'My New Website1', body: 'lorem ipsum1...', author: 'Mario', id : 1},
        { title : 'My New Website2', body: 'lorem ipsum2...', author: 'Yoshi', id : 2},
        { title : 'My New Website3', body: 'lorem ipsum3...', author: 'Luigi', id : 3},

    ]);



    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log("use effect ran");
        console.log(name);
    }, [name, blogs]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter((blog) => blog.author==="Mario")} title="Mario's Blogs" handleDelete={handleDelete}/>
            <button onClick={() => setName('Luigi')}>change name</button>
            <p>{name}</p>
        </div>
      );
}
 
export default Home;