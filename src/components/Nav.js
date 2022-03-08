import { Link } from "react-router-dom"

const Nav = (props) => {
  return (
    <nav className="nav">
        <Link to="/">
            <div>Scores</div>
        </Link>    
    </nav>
  );
}

export default Nav