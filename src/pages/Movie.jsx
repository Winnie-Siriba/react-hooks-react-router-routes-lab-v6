import { useEffect, useState } from "react";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
     fetch(`http://localhost:4000/movies/${id}`)
       .then((r) => r.json())
       .then(setMovie);
  }, [id]);

if (!movie) return <div>Loading...</div>;

  return (
    <>
       <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time} minutes</p>
      {movie.genres.map((genre, index) => (
        <span key={index}>{genre} </span>
      ))}

  
    </>
  );
};

export default Movie;
