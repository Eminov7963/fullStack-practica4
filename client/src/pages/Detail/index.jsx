import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./index.module.scss";
import { Base_Url } from "../../constant/services";
import axios from "axios";
import Rating from "@mui/material/Rating";
import { Helmet } from "react-helmet-async";
const Detail = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const getDAtaById = async () => {
    try {
      const resp = await axios.get(`${Base_Url}/products/${id}`);
      console.log(resp);
      setProduct(resp.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDAtaById();
  }, []);

  return (
    <div className={styles.Det}>
      {product && <Helmet>
        <title>{product.title}</title>
        <link
          rel="shortcut icon"
          href="https://www.tacobell.com/"
          type="image/x-icon"
        />
      </Helmet>}
      {product && (
        <div className={styles.DetCard}>
          <img src={product.image} alt={product.title} />
          <h1>{product.title}</h1>
          <div className={styles.price}>
            <span className={styles.oldprice}>{product.oldprice}</span>
            <span>{product.price}</span>
          </div>
          <Rating
            name="simple-uncontrolled"
            onChange={(event, newValue) => {
              console.log(newValue);
            }}
            value={product.ratings}
          />
        </div>
      )}
    </div>
  );
};

export default Detail;
