import { Link } from "react-router-dom";
import React from "react";
import styles from "./Navbar.module.css"

function Navbar() {

    return(

        <nav className={styles.Nav}>

            <Link to='/'>Home</Link>

        </nav>
        
    )
}

export default Navbar;
