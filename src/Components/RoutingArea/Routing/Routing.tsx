import "./Routing.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../../../App";
import Home from "../Home/Home";
import TodoList from "../../TodoArea/TodoList/TodoList";
import About from "../About/About";
import Page404 from "../Page404/Page404";
function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="home" element={<Home />} />
                <Route index element={<Home />} />
                <Route path="todo" element={<TodoList />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}

export default Routing;
