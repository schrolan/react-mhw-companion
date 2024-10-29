import { MdClear } from "react-icons/md";
import Container from "./container";

const SearchForm = ({
  searchTerm,
  handleInputChange,
  handleFormSubmit,
  reset
}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Container>
          <form className="d-flex" onSubmit={handleFormSubmit}>
            <input
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="Search here..."
              className="form-control me-2"
              aria-label="Search"
              required
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
            {searchTerm && (
              <button
                className="btn btn-success"
                type="button"
                onClick={reset}
              >
                <MdClear />
              </button>
            )}
          </form>
        </Container>
      </div>
    </nav>
  );
};

export default SearchForm;