import { Link } from "react-router-dom";
import { HeaderItem } from "./HeaderItem";

export const Navbar = () => {
  return (
    <div className="navbar px-5 shadow-lg navbar bg-primary text-primary-content">
      <nav className="w-full">
        <div className="m-auto w-fit">
          <ul className="flex items-center gap-10">
            <li>
              <HeaderItem href="/">Accueil</HeaderItem>
            </li>
            <li>
              <HeaderItem href="/produits">Produits</HeaderItem>
            </li>
            <li>
              <HeaderItem href="/cart">Mon panier Redux</HeaderItem>
            </li>
            <li>
              <HeaderItem href="/connexion">Connexion</HeaderItem>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
