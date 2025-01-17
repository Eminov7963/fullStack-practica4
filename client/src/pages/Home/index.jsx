import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Base_Url } from "../../constant/services";
import Rating from "@mui/material/Rating";
import styles from "./index.module.scss";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaInfoCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../context/productsContext";
import TextField from "@mui/material/TextField";
import { Helmet } from "react-helmet-async";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [productscopy, setProductsCopy] = useState([]);
  const [searchquery, setSearchQuery] = useState("");

  const getAlldata = async () => {
    try {
      const resp = await axios(`${Base_Url}/products`);
      console.log(resp.data.data);
      setProducts(resp.data.data);
      setProductsCopy(resp.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const { ToggleWishlist } = useContext(ProductsContext);
  const filtered = [...products].filter((q) =>
    q.title.toLowerCase().includes(searchquery.toLowerCase().trim())
  );
  const deleteData = async (id) => {
    try {
      const deleted = await axios.delete(`${Base_Url}/products/${id}`);
      if (deleted.status === 200) {
        setProducts([...products].filter((c) => c._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCange = (e) => {
    let sorted = null;
    if (e.target.value === "asc") {
      sorted = [...products].toSorted((a, b) => a.price - b.price);
    } else if (e.target.value === "desc") {
      sorted = [...products].toSorted((a, b) => b.price - a.price);
    } else {
      sorted = [...productscopy];
    }
    setProducts(sorted);
  };
  useEffect(() => {
    getAlldata();
  }, []);
  return (
    <main>
      <Helmet>
        <title>Home Page</title>
        <link
          rel="shortcut icon"
          href="https://www.tacobell.com/"
          type="image/x-icon"
        />
      </Helmet>

      <section className={styles.mainSection}>
        <div className={styles.text}>
          <div className={styles.text2}>
            <p>Spring / Summer Collection 2017</p>
            <h1>Get up to 30% Off New Arrivals</h1>
            <button> Shop Now </button>
          </div>
        </div>
      </section>
      <section id={styles.human}>
        <div className="container">
          <div className={styles.human}>
            <div className={styles.card1}>
              <div className={styles.box}>
                <h1>Womens's</h1>
              </div>
            </div>
            <div className={styles.card1}>
              <div className={styles.card1}>
                <div className={styles.box}>
                  <h1>Womens's</h1>
                </div>
              </div>
            </div>
            <div className={styles.card1}>
              <div className={styles.card1}>
                <div className={styles.box}>
                  <h1>Womens's</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.products}>
        <div className={styles.search}>
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select name="" id="" onChange={handleCange}>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
            <option value="default">Default</option>
          </select>
        </div>
        <div className={styles.contain}>
          {products &&
            filtered.map((q) => {
              return (
                <div className={styles.cards} key={q._id}>
                  <img src={q.image} alt={q.title} />
                  <h1>{q.title}</h1>
                  <div className={styles.price}>
                    <span className={styles.oldprice}>{q.oldprice}</span>
                    <span>{q.price}</span>
                  </div>
                  <Rating
                    name="simple-uncontrolled"
                    onChange={(event, newValue) => {
                      console.log(newValue);
                    }}
                    value={q.ratings}
                  />
                  <div className={styles.icons}>
                    <button
                      className={styles.delete}
                      onClick={() => deleteData(q._id)}
                    >
                      <RiDeleteBin5Line />
                    </button>
                    <Link to={`/product/${q._id}`} className={styles.info}>
                      <FaInfoCircle />
                    </Link>
                    <button
                      className={styles.heart}
                      onClick={() => ToggleWishlist(q)}
                    >
                      <FaHeart />
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </section>

      <section className={styles.latest}>
        <div className="container">
          <div className={styles.text}><h1>Latest Blogs</h1></div>
          <div className={styles.cards}>
              <div className={styles.card}>
                <img src="https://preview.colorlib.com/theme/coloshop/images/blog_1.jpg" alt="" />
              </div>
              <div className={styles.card}>
                <img src="https://preview.colorlib.com/theme/coloshop/images/blog_2.jpg" alt="" />
              </div>
              <div className={styles.card}>
                <img src="https://preview.colorlib.com/theme/coloshop/images/blog_3.jpg" alt="" />
              </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
