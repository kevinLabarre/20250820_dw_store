import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../features/cartSlice";

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleShowDetail = () => {
    navigate(`produits/${product.id}`);
  };

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="flex shadow-xl card bg-base-100 w-96">
      <figure>
        <div className="h-40">
          <img src={product.image} alt={product.title} />
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>{product.category}</p>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <div className="justify-end card-actions">
          <Link className="btn btn-primary" to={`produits/${product.id}`}>
            Voir
          </Link>
        </div>
        <div className="justify-end card-actions">
          <button onClick={handleShowDetail} className="btn btn-primary">
            Voir
          </button>
        </div>
        <div>
          <button onClick={handleAddToCart} className="btn">
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
};
