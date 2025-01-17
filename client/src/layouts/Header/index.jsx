import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./index.module.scss"
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { GrBasket } from "react-icons/gr";

const Header = () => {
  return (
    <header>
        <div className={styles.headContain}>
        <div className={styles.left}>
          <h1>COLO <span className={styles.shop}>Shop</span></h1>
        </div>
        <div className={styles.middle}>
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/add">Add</NavLink></li>
                <li><NavLink to="/wishlist">Wishlist</NavLink></li>
            </ul>
        </nav>
        </div>
        <div className={styles.right}>
        <FaSearch className={styles.search}/>
        <FaUser className={styles.user}/>
        <GrBasket className={styles.bask}/>
        </div>
        </div>
    </header>
  )
}

export default Header