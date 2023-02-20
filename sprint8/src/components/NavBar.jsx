import { NavBarStyle } from "./styled";
import { Link } from "react-router-dom";
export const NavBar = () => {

    return (
        <NavBarStyle>
            <li>
                <a className="home-link" href="/Welcome">HOME<Link to="/Welcome"></Link></a>
                <a className="starships-link" href="">STARSHIPS</a>
            </li>
        </NavBarStyle>)
}