import React from "react";
import "../../../styles/product-card.css";
import { Link } from "react-router-dom";
// If i need create a higher-order functions and returning another function then to call that function and pass dispatch as the first argument it works as like a increment and decrement
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import { showToast } from "../../../store/ui/toastSlice";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
    dispatch(showToast(`${title} added to cart`));
  };

  return (
    <div className="product__item">
      <Link to={`/foods/${id}`} className="product__img">
        <img src={image01} alt={title} loading="lazy" />
      </Link>

      <div className="product__content">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className="d-flex align-items-center justify-content-between gap-2">
          <span className="product__price">${price}</span>
          <button
            type="button"
            className="addTOCart__btn addTOCart__btn--icon"
            aria-label={`Add ${title} to cart`}
            onClick={addToCart}
          >
            <i className="ri-add-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
