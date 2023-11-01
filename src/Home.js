const Home = () => {

    const handleClick = (e) => {
        console.log('Hello Ninjas ', e, e.target);
    }

    const handleClickAgain = (name, e) => {
        console.log('Hello ' + name, e);
    }


    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => handleClickAgain('The Kid', e)}>Click Me Again</button>

        </div>
      );
}
 
export default Home;