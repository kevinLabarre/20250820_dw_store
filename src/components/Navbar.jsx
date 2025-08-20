import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar px-5 shadow-lg navbar bg-primary text-primary-content">
      <nav className="w-full">
        <div className="m-auto w-fit">
          <ul className="flex items-center gap-10">
            <li>
              <Link to="">Accueil</Link>
            </li>
            <li>
              <Link to="/produits">produits</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
