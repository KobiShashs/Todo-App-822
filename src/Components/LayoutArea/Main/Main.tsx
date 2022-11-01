import { Outlet } from "react-router-dom";
import Routing from "../../RoutingArea/Routing/Routing";
import TodoAdd from "../../TodoArea/TodoAdd/TodoAdd";
import TodoDelete from "../../TodoArea/TodoDelete/TodoDelete";
import TodoEdit from "../../TodoArea/TodoEdit/TodoEdit";
import TodoList from "../../TodoArea/TodoList/TodoList";
import "./Main.css";

function Main(): JSX.Element {
    return (
        <div className="Main">
            {/* <TodoList/> */}
            {/* <TodoAdd/> */}
            {/* <TodoEdit/> */}
            {/* <TodoDelete/> */}
            <Routing />
            <Outlet />
        </div>
    );
}

export default Main;
