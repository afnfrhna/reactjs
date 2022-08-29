import React from "react";

import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered to your doorstep!</h2>
      <p>
        Browse our website and find all the delicious meals you would like to
        have from our broad selection and enjoy a delicious and hassle free meal
        at home!
      </p>
      <p>
        Cooked and served to you hot with high-quality ingredients by our
        experienced chefs.
      </p>
    </section>
  );
};

export default MealsSummary;
