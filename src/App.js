import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import MoviesPage from "./Pages/MoviesPage";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";

function App() {
  return (
    <Fragment>
      <NavigationBar />
      <MoviesPage />
      <Footer />
    </Fragment>
  );
}

export default App;
