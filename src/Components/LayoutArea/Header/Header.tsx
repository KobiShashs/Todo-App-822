import Menu from "../../RoutingArea/Menu/Menu";
import Nav from "../Nav/Nav";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">
			<h1>Todo App</h1>
            {/* <Nav/> */}
            <Menu/>
        </div>
    );
}

export default Header;
