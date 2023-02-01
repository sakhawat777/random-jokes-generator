import React, {useEffect, useState} from "react";
import spinner from '../assets/spinner1.jpg';

const Jokes = () => {
  const [joke, setJoke] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const url = "https://api.chucknorris.io/jokes/random";
  const handleJokes = () => {
    setIsLoading(true)
    fetch(url)
    .then((res) =>{
      return res.json()
    })
    .then((data) => 
    setJoke(data))
    setIsLoading(false)
  };
  useEffect(() =>{
    handleJokes()
  },[])
  return (
    <section className="--flex-center --100vh --bg-primary">
      <div className="container --card --bg-light --p">
        <h2>Random Jokes Generator</h2>
        <div className="--line"></div>
        {isLoading? (
          <div className="--center-all">
            <img src={spinner} alt="loading" width={100} />
          </div>
        ) : (
          <>
          <h4>Joke id: {joke.id}</h4>
        <p>
          {joke.value}
        </p>
          </>
        )}
        
        <br />
        <button className="--btn --btn-primary" onClick={() => handleJokes()}>Generate Joke</button>
      </div>
    </section>
  );
};

export default Jokes;
