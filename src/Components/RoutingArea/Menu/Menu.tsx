import "./Menu.css";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <CustomLink to="home">Home</CustomLink>
            <CustomLink to="todo">Tasks</CustomLink>
            <CustomLink to="about">About</CustomLink>
        </div>
    );
}

export default Menu;
