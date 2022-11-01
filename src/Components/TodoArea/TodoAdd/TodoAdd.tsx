import "./TodoAdd.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Todo } from "../../../Models/Todo";
import { addTask } from "../../../Services/TodoApi";
import notify from "../../../Services/Nofifications";
import { schema } from "../../../Services/Schemas";
function TodoAdd(): JSX.Element {

    // const schema = yup.object().shape({
    //     title:
    //         yup.string()
    //             .required("Title is required"),
    //     description:
    //         yup.string()
    //             .required("Description is required"),
    //     group:
    //         yup.string()
    //             .required("Group is required"),
    //     when:
    //         yup.date()
    //             //.max(new Date(),'Umm... future dob? come on!')
    //             .default(new Date())
    //             .typeError("You must specify a date")
    //             .required("date is required")
    //             .nullable().default(() => new Date()),

    // });

    const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
        useForm<Todo>({ mode: "all", resolver: yupResolver(schema) });

    const addTodo = async (todo: Todo) => {

        return await addTask(todo)
            .then(res => notify.success(JSON.stringify(res.data)))
            .catch(err => notify.error(err));
    }


    return (
        <div className="TodoAdd box">
            <h2>Add new Todo Item</h2>
            <form onSubmit={handleSubmit(addTask)} >

                {
                    errors.title?.message ?
                        <>
                            <span>{errors?.title?.message}</span>
                        </> :
                        <>
                            <label htmlFor="title">Title</label>
                        </>
                }
                <input
                    {...register("title")}
                    id="title"
                    name="title"
                    type="text"
                    placeholder="Title ..." />




                {
                    errors.description?.message ?
                        <>
                            <span>{errors?.description?.message}</span>
                        </> :
                        <>
                            <label htmlFor="title">Description</label>
                        </>
                }

                <input
                    {...register("description")}
                    id="description"
                    name="description"
                    type="text"
                    placeholder="Description ..." />



                {
                    errors.group?.message ?
                        <>
                            <span>{errors?.group?.message}</span>
                        </> :
                        <>
                            <label htmlFor="title">Group</label>
                        </>
                }



                <input
                    {...register("group")}
                    id="group"
                    name="group"
                    type="text"
                    placeholder="Group ..." />


                {
                    errors.when?.message ?
                        <>
                            <span>{errors?.when?.message}</span>
                        </> :
                        <>
                            <label htmlFor="when">When</label>
                        </>
                }
                <input
                    {...register("when")}
                    id="when"
                    name="when"
                    type="date"
                    placeholder="When..." />



                <br/>
                <button disabled={!isValid}>ADD</button>
            </form>
        </div>
    );
}

export default TodoAdd;
