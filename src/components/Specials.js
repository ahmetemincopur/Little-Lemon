import React from "react";

const Specials = () => {
  return (
    <div className="specials">
      <div className="specials-content">
        <h1>This Weeks Specials</h1>
        <button>Online Menu</button>
      </div>
      <div className="specials-card-container">
        <div className="greek-salad-card">
          <img src="" alt="" />
          <h2>Greek Salad</h2>
          <h3>$12.99</h3>
          <p>
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </p>
          <a href="/">Order a delivery</a>
        </div>
        <div className="bruchetta-card">
          <img src="" alt="" />
          <h2>Bruchetta</h2>
          <h3>$5.99</h3>
          <p>
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.{" "}
          </p>
          <a href="/">Order a delivery</a>
        </div>
        <div className="lemon-dessert-card">
          <img src="" alt="" />
          <h2>Lemon Dessert</h2>
          <h3>$5.00</h3>
          <p>
            This comes straight from grandma’s recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.
          </p>
          <a href="/">Order a delivery</a>
        </div>
      </div>
    </div>
  );
};

export default Specials;
