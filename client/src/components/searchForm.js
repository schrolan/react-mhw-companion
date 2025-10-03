import { MdClear } from "react-icons/md";
import Container from "./container";

const SearchForm = ({
  searchTerm,
  handleInputChange,
  handleFormSubmit,
  reset
}) => {
  return (
    <nav className="navbar">
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
            {searchTerm && (
              <button
                className="btn"
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