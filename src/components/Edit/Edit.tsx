import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";

import { IContact } from "../../store/redux/users/usersReducer";
import { usersActions } from "../../store/redux/users/usersActions";
import { ContactForm } from "../../common/ContactForm/ContactForm";
import { newUser } from "../AddUser/userValidation";
import { Button, Flex } from "../../common/Styles/Styles";

interface IProps {
  user: IContact;
  closeEdit: () => void;
}

export const Edit: React.FC<IProps> = ({ user, closeEdit }) => {
  const dispatch = useDispatch();

  const { photo, name, surname, number, description, id } = user;

  const formik = useFormik({
    initialValues: {
      photo,
      name,
      surname,
      number,
      description,
    },
    validationSchema: newUser.schema,
    onSubmit: (values) => {
      const editUser: IContact = {
        id,
        photo: formik.values.photo,
        name: formik.values.name,
        surname: formik.values.surname,
        number: formik.values.number,
        description: formik.values.description,
      };
      dispatch(usersActions.changeUserInfo(editUser));
      closeEdit();
    },
  });

  return (
    <ContactForm formik={formik} userPhoto={photo}>
      <Flex>
        {" "}
        <Button>Save</Button>
        <Button onClick={closeEdit}>Cancel</Button>
      </Flex>
    </ContactForm>
  );
};
