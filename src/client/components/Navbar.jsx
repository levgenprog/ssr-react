import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/price">Price</Link>
    </div>
  );
}

export default Navbar;