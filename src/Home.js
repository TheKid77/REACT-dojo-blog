import { useState } from "react"

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
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title}</h2>
                    <p>Written By {blog.author}</p>
                </div>
                

            ))}
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button>

        </div>
      );
}
 
export default Home;