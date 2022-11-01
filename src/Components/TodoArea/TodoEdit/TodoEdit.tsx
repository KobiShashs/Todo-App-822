import "./TodoEdit.css";
import { useForm, useFormState } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Todo } from "../../../Models/Todo";
import { editTask } from "../../../Services/TodoApi";
import notify from "../../../Services/Nofifications";
import { schema } from "../../../Services/Schemas";

function TodoEdit(): JSX.Element {


    const item = { "id": 123, "title": "aaa", "description": "bbb", "group": "ccc", "when": new Date() }
    let defaultValuesObj = { ...item };
    const { register, handleSubmit, control, formState: { errors, isDirty, isValid } }
        = useForm<Todo>({ defaultValues: defaultValuesObj, mode: "all", resolver: yupResolver(schema) });

    const { dirtyFields } = useFormState({
        control
    });

    const updateTodo = async (todo: Todo) => {

        return await editTask(123, todo)
            .then(res => notify.success(JSON.stringify(res.data)))
            .catch(err => notify.error(err));
    }


    return (








        <div className="TodoEdit box">
            <h2>Update an exsiting Item : 123</h2>
            <form onSubmit={handleSubmit(updateTodo)} >

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
                {/* TODO : date not grabbed */}
                <input
                    {...register("when")}
                    id="when"
                    name="when"
                    type="date"
                    placeholder="When..." />



                <br />
                <button disabled={isDirty && !isValid}>UPDATE</button>
            </form>
        </div>
    );
}

export default TodoEdit;
