import "./movies-page-styles.css";
import MovieList from "../../Components/MovieList";
import { Container, Row } from "react-bootstrap";
import useFetch from "../../Hooks/useFetch";
import { MOVIES_BASE_URL } from "../../Constants";
import Heading from "../../Components/Heading";
import useLocalStorage from "../../Hooks/useLocalStorage";

function MoviesPage() {
  const [likedMovies, setLikedMovies] = useLocalStorage("liked", []);
  const { data, isPending, Error } = useFetch(MOVIES_BASE_URL, (response) =>
    checkLiked(response)
  );

  const checkLiked = (response) => {
    response.data.results.forEach(function (movie) {
      const movieExists = likedMovies.some((element) => {
        if (element.id === movie.id) {
          return true;
        }
        return false;
      });
      if (movieExists) {
        movie.liked = "true";
      } else {
        movie.liked = "false";
      }
    });
    return response;
  };

  const handleLikeMovie = (movie) => {
    movie.liked = "true";
    const newLikedList = [...likedMovies, movie];
    setLikedMovies(newLikedList);
  };

  return (
    <Container>
      <Row className="my-4 justify-content-start">
        <Heading text="All Movies" />
        {!isPending && (
          <MovieList
            movies={data.data.results}
            isAllMovies={true}
            handleLikeMovie={handleLikeMovie}
          />
        )}
      </Row>
    </Container>
  );
}

export default MoviesPage;
