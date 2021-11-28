import React from "react";
import routes from "../../routes"
import { NavLink } from "react-router-dom"
import style from "../Navigation/Navigation.module.css"


const Navigation = () => {
    return (
        <nav>
        <NavLink className={style.Link} activeClassName={style.Link_active} exact to={routes.home}>Home</NavLink>
        <NavLink className={style.Link} activeClassName={style.Link_active} to={routes.movies}>Movies</NavLink>
       </nav>
    )
}
export default Navigation;