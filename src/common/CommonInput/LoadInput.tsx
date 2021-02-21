import React from "react";
import { AddPhoto, UserPhoto } from "./CommonInputStyle";

interface IProps {
  loadPhoto: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changePhoto: string | undefined;
}

export const LoadInput: React.FC<IProps> = ({ changePhoto, loadPhoto }) => {
  return (
    <>
      {" "}
      <input
        type="file"
        name="upload files"
        accept="image/*"
        id="file"
        onChange={loadPhoto}
        style={{
          display: "none",
        }}
      />
      <label htmlFor="file">
        {changePhoto ? (
          <UserPhoto imageThumb={changePhoto} />
        ) : (
          <AddPhoto>
            <div>+</div>
            <div>Your photo</div>
          </AddPhoto>
        )}
      </label>
    </>
  );
};
