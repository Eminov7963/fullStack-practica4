import React, { useContext } from "react";
import { ProductsContext } from "../../context/productsContext";
import Rating from '@mui/material/Rating';
import styles from "./index.module.scss"
import { FaHeart } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';
const Wishlist = () => {
  const { wish, ToggleWishlist } = useContext(ProductsContext);
  console.log(wish);
  
  return (
    <div className={styles.wish}>
      <Helmet>
                  <title>Wishlist Page</title>
                  <link
                    rel="shortcut icon"
                    href="https://www.tacobell.com/"
                    type="image/x-icon"
                  />
                </Helmet>
      {wish &&
        wish.map((w) => {
          return (
            <div className={styles.cards} key={w._id}>
              {console.log(w)
              }
              <img src={w.image} alt={w.title} />
              <h1>{w.title}</h1>
              <div className={styles.price}>
                <span className={styles.oldprice}>{w.oldprice}</span>
                <span>{w.price}</span>
              </div>
              <Rating
                name="simple-uncontrolled"
                onChange={(event, newValue) => {
                  console.log(newValue);
                }}
                value={w.ratings}
              />
              <button
                className={styles.heart}
                onClick={() => ToggleWishlist(w)}
              >
                <FaHeart />
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Wishlist;
