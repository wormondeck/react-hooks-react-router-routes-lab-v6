import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [title, setTitle] = useState([]);
  const params = useParams();
  const titleId = params.id;

  useEffect(() =>{
    fetch(`http://localhost:4000/movies/${titleId}`)
    .then(r => r.json())
    .then(data => setTitle(data))
    .catch(error => console.error(error))
  }, [titleId]);

  if(!title.title){
    return <h1>Loading...</h1>;
  };

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{title.title}</h1>
        <p>{title.time} minutes</p>
        <span>{title.genres.join(', ')}</span>
      </main>
    </>
  );
};

export default Movie;
