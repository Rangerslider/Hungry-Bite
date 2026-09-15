import React, { useEffect } from "react";

import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../../store/shopping-cart/cartUiSlice";

import "../../../styles/shopping-cart.css";

const Carts = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.cartUi.cartIsVisible);
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const closeCart = () => {
    dispatch(cartUiActions.hide());
  };

  useEffect(() => {
    document.body.classList.toggle("cart-open", isOpen);
    if (!isOpen) return;

    const onKeyDown = (e) => e.key === "Escape" && dispatch(cartUiActions.hide());
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, dispatch]);

  return (
    <div
      className={`cart__container ${isOpen ? "cart__container--open" : ""}`}
      onClick={closeCart}
      aria-hidden={!isOpen}
    >
      <ListGroup className="cart" onClick={(e) => e.stopPropagation()}>
        <div className="cart__close">
          <h6 className="mb-0">
            Your Cart <span>({totalQuantity})</span>
          </h6>
          <button type="button" aria-label="Close cart" onClick={closeCart}>
            <i className="ri-close-fill"></i>
          </button>
        </div>

        <div className="cart__item-list">
          {cartProducts.length === 0 ? (
            <div className="empty__state">
              <i className="ri-shopping-basket-2-line"></i>
              <h6>No item added to the cart</h6>
              <Link to="/foods" className="cart__browse" onClick={closeCart}>
                Browse foods
              </Link>
            </div>
          ) : (
            cartProducts.map((item) => <CartItem item={item} key={item.id} />)
          )}
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6 className="mb-0">
            Subtotal : <span>${totalAmount}</span>
          </h6>
          <Link to="/checkout" className="cart__checkout" onClick={closeCart}>
            Checkout
          </Link>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
