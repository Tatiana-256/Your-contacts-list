import { object, string } from "yup";

export const newUser = {
  shape: {
    photo: "",
    name: "",
    surname: "",
    number: "",
    description: "",
  },
  schema: object().shape({
    name: string()
      .matches(/^(?!.* )/, "No space")
      .required("Name is required"),
    surname: string()
      .matches(/^(?!.* )/, "No space")
      .required("Surname is required"),
    number: string()
      .matches(/^(?!.* )/, "No space")
      .matches(/^[0-9]+$/, "Only numbers")
      .required("Number is required"),
    description: string(),
  }),
};
