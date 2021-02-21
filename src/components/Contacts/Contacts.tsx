import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { IContact } from "../../store/redux/users/usersReducer";
import { uiActions } from "../../store/redux/uiHandling/uiActions";
import { ContactsWrap, EditWrap } from "./ContactsStyles";
import { User } from "../User/User";
import { AppStateType } from "../../store/redux/store";
import { Edit } from "../Edit/Edit";
import { AddUser } from "../AddUser/AddUser";
import { Button } from "../../common/Styles/Styles";

export const Contacts = () => {
  const { users } = useSelector((state: AppStateType) => state.users);
  const { openModal } = useSelector((state: AppStateType) => state.ui);

  const [editUser, setEdit] = useState<IContact | null>();

  const dispatch = useDispatch();

  const openEdit = (user: IContact) => setEdit(user);
  const closeEdit = () => setEdit(null);

  return (
    <>
      {openModal && <AddUser />}
      <ContactsWrap>
        <h2>Your contacts</h2>
        {users.length === 0 ? (
          <h3>
            There is no contacts. Click on "Add new user" for adding first one
          </h3>
        ) : (
          users.map((item) => (
            <User
              user={item}
              key={item.id}
              openEdit={openEdit}
              closeEdit={closeEdit}
            />
          ))
        )}
        <Button onClick={() => dispatch(uiActions.openModal())} >
          Add new user
        </Button>
      </ContactsWrap>
      <EditWrap>
        <h2>Edit contact</h2>
        {editUser && <Edit user={editUser} closeEdit={closeEdit} />}
      </EditWrap>
    </>
  );
};
