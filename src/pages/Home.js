import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar"

function Home() {
  const [titles, setTitles] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:4000/movies")
    .then(r => r.json())
    .then(data => setTitles(data))
    .catch(error => console.error(error))
  }, [])

  const titleList = titles.map(title =>{
    return <MovieCard key={title.id} title={title} />
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {titleList}
      </main>
    </>
  );
};

export default Home;
