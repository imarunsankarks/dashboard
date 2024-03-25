import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="container py-3">
      <div className="row">
        <div className="navbar">
          <div className="col-6">
            <h1>Logo</h1>
          </div>
          <div className="col-6 text-end">
            <div className="navs">
              <Link to="/">Home</Link>
              <Link to="/create">Create</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
