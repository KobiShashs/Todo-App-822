import "./TodoItem.css";
import moment from 'moment'
interface TodoItemProps{
    id: number;
    title: string;
    description: string;
    group: string;
    when: Date;
}
function TodoItem(props:TodoItemProps): JSX.Element {
    return (
        <div className="card">
            <img src="https://www.w3schools.com/w3images/team2.jpg" alt="{props.title}" />
            <h1>Todo</h1>
            <p className="title">{props.title}</p>
            <p className="desc">{props.description}</p>
            <p>{props.group}</p>
            <p>{moment(props.when).format('DD/MM/YYYY')}</p>
            {/* <div>
                <a><i className="fa fa-dribbble"></i></a>
                <a><i className="fa fa-twitter"></i></a>
                <a><i className="fa fa-linkedin"></i></a>
                <a><i className="fa fa-facebook"></i></a>
            </div> */}
            <p><button>Call to action</button></p>
        </div>
    );
}

export default TodoItem;
