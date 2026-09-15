import React, { useRef, useEffect, useState } from "react";

import { Container } from "reactstrap";
import logo from "../../assets/images/res1-logo.png";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

import "../../styles/header.css";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shrink, setShrink] = useState(false);
  const [badgeBump, setBadgeBump] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isFirstRender = useRef(true);

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  // close the mobile menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    if (!menuOpen) return;

    const onKeyDown = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  // bounce the cart badge when the quantity changes
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setBadgeBump(true);
    const timer = setTimeout(() => setBadgeBump(false), 450);
    return () => clearTimeout(timer);
  }, [totalQuantity]);

  return (
    <header className={`header ${shrink ? "header__shrink" : ""}`}>
      <Container>
        {/* ======= website logo ======= */}
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <Link to="/home" className="logo">
            <img src={logo} alt="logo" />
            <h5>Hungry Bite</h5>
          </Link>

          {/* ======= menu ber  ======= */}
          <div
            className={`navigation ${menuOpen ? "show__menu" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            <nav className="menu" onClick={(e) => e.stopPropagation()}>
              <div className="menu__head">
                <span>Menu</span>
                <button
                  type="button"
                  className="menu__close"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                >
                  <i className="ri-close-line"></i>
                </button>
              </div>
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  style={{ "--i": index }}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* ======== nav rightside er  icon ========= */}
          <div className="nav__right d-flex align-items-center">
            <button
              type="button"
              className="cart__icon"
              aria-label="Open cart"
              onClick={toggleCart}
            >
              <i className="ri-shopping-basket-line"></i>
              <span className={`cart__badge ${badgeBump ? "cart__badge--bump" : ""}`}>
                {totalQuantity}
              </span>
            </button>

            <span className="user">
              <Link to="/login" aria-label="Login">
                <i className="ri-user-line"></i>
              </Link>
            </span>

            <button
              type="button"
              className="mobile__menu"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <i className="ri-menu-line"></i>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
