import { MdClear } from "react-icons/md";
import Container from "./container";

const SearchForm = ({
  searchTerm,
  handleInputChange,
  handleFormSubmit,
  reset,
  entityType,
  handleEntityChange,
}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Container>
          <form className="d-flex" onSubmit={handleFormSubmit}>
            <input
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="Enter ID or Slug"
              className="form-control me-2"
              aria-label="Search"
              required
            />
            <select
              className="btn btn-success"
              id="entityType"
              value={entityType}
              onChange={handleEntityChange}
            >
              <option value="ailments">Ailments</option>
              <option value="armor">Armor</option>
              <option value="armor/sets">Armor Sets</option>
              <option value="charms">Charms</option>
              <option value="decorations">Decorations</option>
              <option value="events">Events</option>
              <option value="items">Items</option>
              <option value="locations">Locations</option>
              <option value="monsters">Monsters</option>
              <option value="skills">Skills</option>
              <option value="weapons">Weapons</option>
            </select>
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