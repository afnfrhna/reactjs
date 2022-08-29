import React, { Fragment } from "react";

import mealsImage from "../../assets/meal.jpeg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>GoFood</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
