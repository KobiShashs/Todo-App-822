import * as yup from "yup";

export const schema = yup.object().shape({
    title:
        yup.string()
            .required("Title is required"),
    description:
        yup.string()
            .required("Description is required"),
    group:
        yup.string()
            .required("Group is required"),
    when:
        yup.date()
            //.max(new Date(),'Umm... future dob? come on!')
            // .default(new Date())
            .typeError("You must specify a date")
            .required("date is required")
            .nullable().default(() => new Date()),

});