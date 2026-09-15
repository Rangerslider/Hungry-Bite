import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { showToast } from "../store/ui/toastSlice";
import "../styles/contact.css";

const emptyForm = { name: "", email: "", phone: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(emptyForm);
  const dispatch = useDispatch();

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(showToast("Thanks for Contact Us !"));
    setForm(emptyForm);
  };

  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section className="contact" id="contact">
        <div className="container">
          <form className="contact__form reveal" onSubmit={submitHandler}>
            <h3>get in touch</h3>
            <div className="inputBox">
              <i className="ri-user-line"></i>
              <input type="text" name="name" placeholder="Name" value={form.name} onChange={update} required />
            </div>
            <div className="inputBox">
              <i className="ri-mail-line"></i>
              <input type="email" name="email" placeholder="Email" value={form.email} onChange={update} required />
            </div>
            <div className="inputBox">
              <i className="ri-phone-line"></i>
              <input type="tel" name="phone" placeholder="Number" value={form.phone} onChange={update} />
            </div>
            <div className="inputBox">
              <i className="ri-message-2-line"></i>
              <textarea name="message" rows={4} placeholder="Message" value={form.message} onChange={update} />
            </div>
            <button type="submit" className="addTOCart__btn">Contact</button>
          </form>
        </div>
      </section>
    </Helmet>
  );
};

export default Contact;
