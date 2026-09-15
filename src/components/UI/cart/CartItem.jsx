import React from "react";
import { ListGroupItem } from "reactstrap";

import "../../../styles/cart-item.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const CartItem = ({ item }) => {
  const { id, title, price, image01, quantity, totalPrice } = item;

  const dispatch = useDispatch();

  const incrementItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id));
  };

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <ListGroupItem className="border-0 cart__item">
      <div className="cart__item-info d-flex align-items-center gap-3">
        <img src={image01} alt="product-img" />

        <div className="cart__product-info w-100 d-flex align-items-center gap-3 justify-content-between">
          <div>
            <h6 className="cart__product-title">{title}</h6>
            <p className=" d-flex align-items-center gap-3 cart__product-price">
              {quantity}x <span>${totalPrice}</span>
            </p>
            <div className=" d-flex align-items-center justify-content-between increase__decrease-btn">
              <button type="button" className="increase__btn" aria-label="Increase" onClick={incrementItem}>
                <i className="ri-add-line"></i>
              </button>
              <span className="quantity">{quantity}</span>
              <button type="button" className="decrease__btn" aria-label="Decrease" onClick={decreaseItem}>
                <i className="ri-subtract-line"></i>
              </button>
            </div>
          </div>

          <button type="button" className="delete__btn" aria-label="Remove item" onClick={deleteItem}>
            <i className="ri-close-line"></i>
          </button>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
