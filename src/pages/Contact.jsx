import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <>
      <section class="contact" id="contact">
        <div class="row">
          <form action="">
            <h3>get in touch</h3>
            <div class="inputBox">
              <span class="fas fa-user"></span>
              <input type="text" placeholder="name" />
            </div>
            <div class="inputBox">
              <span class="fas fa-envelope"></span>
              <input type="email" placeholder="email" />
            </div>
            <div class="inputBox">
              <span class="fas fa-phone"></span>
              <input type="number" placeholder="number" />
            </div>
            <button onClick={() => alert('Thanks for Contuct Us !')} type="submit" className="addTOCart__btn"> Contact </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;