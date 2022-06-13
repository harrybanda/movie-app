import "./liked-page-styles.css";
import MovieList from "../../Components/MovieList";
import { Container, Row } from "react-bootstrap";
import useLocalStorage from "../../Hooks/useLocalStorage";
import Heading from "../../Components/Heading";
import Breadcrumb from "react-bootstrap/Breadcrumb";

function LikedPage() {
  const [likedMovies, setLikedMovies] = useLocalStorage("liked", []);

  const handleRemoveMovie = (movie) => {
    let saved = JSON.parse(localStorage.getItem("liked"));
    const newLikedList = saved.filter((item) => item.id !== movie.id);
    setLikedMovies(newLikedList);
  };

  return (
    <Container>
      <Row className="my-4 justify-content-start">
        <Heading text="Liked Movies" />
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Liked</Breadcrumb.Item>
        </Breadcrumb>
        {
          <MovieList
            movies={likedMovies}
            isAllMovies={false}
            handleRemoveMovie={handleRemoveMovie}
          />
        }
      </Row>
    </Container>
  );
}

export default LikedPage;
