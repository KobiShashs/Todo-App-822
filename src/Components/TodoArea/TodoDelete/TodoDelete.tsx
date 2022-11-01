import "./TodoDelete.css";

function TodoDelete(): JSX.Element {
    return (
        <div className="TodoDelete box">
			Are you sure you want to delete todo item #123?
            <br/>
            <div>
                <button>YES</button>
                <button className="button-danger">No</button>
            </div>
            
        </div>
    );
}

export default TodoDelete;
