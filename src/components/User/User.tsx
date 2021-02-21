import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { usersActions } from "../../store/redux/users/usersActions";
import { IContact } from "../../store/redux/users/usersReducer";
import { Icon, UserWrap } from "./UserStyles";
import userPhoto from "../../assets/user.png";
import edit from "../../assets/pan.svg";
import trash from "../../assets/trash-icon.png";
import { Confirmation } from "../../common/Confirmation/Confirmation";
import { UserPhoto } from "../../common/CommonInput/CommonInputStyle";

interface IProps {
  user: IContact;
  openEdit: (user: IContact) => void;
  closeEdit: () => void;
}

export const User: React.FC<IProps> = ({ user, openEdit, closeEdit }) => {
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);

  const imageSrc = user.photo ? user.photo : userPhoto;

  const rejectDelete = () => {
    setOpenModal((prevState) => !prevState);
  };

  const submitDelete = () => {
    dispatch(usersActions.deleteUser(user.id));
    rejectDelete();
    closeEdit();
  };

  return (
    <UserWrap>
      {openModal && (
        <Confirmation submit={submitDelete} reject={rejectDelete} />
      )}
      <UserPhoto imageThumb={imageSrc} />
      <div>
        <b>Surname:</b> <br />
        {user.surname}
      </div>
      <div>
        <b>Phone number:</b> <br />
        {user.number}
      </div>
      <Icon src={edit} alt="edit" onClick={() => openEdit(user)} />
      <Icon src={trash} alt="delete" onClick={rejectDelete} />
    </UserWrap>
  );
};
