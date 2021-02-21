import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";

import { IContact } from "../../store/redux/users/usersReducer";
import { usersActions } from "../../store/redux/users/usersActions";
import Portal from "../../common/Modal/Modal";
import { ModalWrapper } from "../../common/ModalsWrapper/ModalsWrapper";
import { ContactForm } from "../../common/ContactForm/ContactForm";
import { uiActions } from "../../store/redux/uiHandling/uiActions";
import { newUser } from "./userValidation";
import { uniqueID } from "../../utils/utils";
import { Button, Flex } from "../../common/Styles/Styles";

export const AddUser = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: newUser.shape,
    validationSchema: newUser.schema,
    onSubmit: () => {
      const newUser: IContact = {
        id: uniqueID(),
        photo: formik.values.photo,
        name: formik.values.name,
        surname: formik.values.surname,
        number: formik.values.number,
        description: formik.values.description,
      };
      dispatch(uiActions.closeModal());
      dispatch(usersActions.addNewUser(newUser));
    },
  });

  return (
    <Portal>
      <ModalWrapper headline="Add new contact">
        <ContactForm formik={formik}>
          <Flex>
            <Button>Add</Button>
            <Button onClick={() => dispatch(uiActions.closeModal())}>
              Cancel
            </Button>
          </Flex>
        </ContactForm>
      </ModalWrapper>
    </Portal>
  );
};
