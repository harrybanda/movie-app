import "./movies-page-styles.css";
import MovieList from "../../Components/MovieList";
import { Container, Row } from "react-bootstrap";
import useFetch from "../../Hooks/useFetch";
import { MOVIES_BASE_URL } from "../../Constants";

function MoviesPage() {
  const { data, isPending, Error } = useFetch(MOVIES_BASE_URL);
  return (
    <Container>
      <Row className="my-4">
        {!isPending && <MovieList movies={data.data.results} />}
      </Row>
    </Container>
  );
}

export default MoviesPage;
