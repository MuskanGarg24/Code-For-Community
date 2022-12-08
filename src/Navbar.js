import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Code For Community
      </Link>
      <ul>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/blogs">Blogs</CustomLink>
        <CustomLink to="/mentorship">Mentorship</CustomLink>
        <CustomLink to="/resources">Resources</CustomLink>
        <a href="https://github.com/Code-For-Comm">Join</a>
        <a href="https://www.youtube.com/@iashishkhanagwal">
          <button>YouTube</button>
        </a>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
