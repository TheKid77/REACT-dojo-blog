import logo from './logo.svg';
import './App.css';

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const web_address="http://www.google.co.uk"


  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <a href={web_address}>This is the google website</a>
      </div>
    </div>
  );
}

export default App;
