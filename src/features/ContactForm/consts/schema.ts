import * as yup from "yup";

export const schema = yup.object().shape({
    userName: yup.string().required("Name is required!"),
    email: yup.string().email("Invalid email").required("Email is required"),
    query: yup.string().required("Query is required"),
    message: yup.string().required("Write your message")
});