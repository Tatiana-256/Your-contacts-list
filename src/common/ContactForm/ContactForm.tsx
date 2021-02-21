import React, { ReactNode, useState } from "react";

import { Input } from "../CommonInput/CommonInput";
import { LoadInput } from "../CommonInput/LoadInput";
import { FormStyle } from "./ContactFormStyle";

interface IProps {
  closeFunk?: () => void;
  headline?: string;
  children?: ReactNode;
  formik?: any;
  userPhoto?: string;
}

export const ContactForm: React.FC<IProps> = ({
  formik,
  children,
  userPhoto,
}) => {
  const [photo, setPhoto] = useState<string>();

  const changePhoto = photo ? photo : userPhoto;

  const loadPhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    const photo = URL.createObjectURL(
      event.target.files !== null && event.target.files[0]
    );
    formik.setFieldValue("photo", photo);
    setPhoto(photo);
  };

  return (
    <FormStyle onSubmit={formik.handleSubmit}>
      <LoadInput loadPhoto={loadPhoto} changePhoto={changePhoto} />
      <label>
        <div>User name</div>
        <Input
          type="text"
          name="name"
          onBlur={formik.handleBlur}
          placeholder="Name"
          error={formik.errors.name}
          value={formik.values.name}
          onChange={formik.handleChange}
          touched={formik.touched.name}
        />
      </label>
      <label>
        <div>User Surname</div>
        <Input
          type="text"
          name="surname"
          onBlur={formik.handleBlur}
          placeholder="Surname"
          error={formik.errors.surname}
          value={formik.values.surname}
          onChange={formik.handleChange}
          touched={formik.touched.surname}
        />
      </label>
      <label>
        <div>Phone number</div>
        <Input
          type="number"
          name="number"
          onBlur={formik.handleBlur}
          placeholder="Number"
          error={formik.errors.number}
          value={formik.values.number}
          onChange={formik.handleChange}
          touched={formik.touched.number}
        />
      </label>
      <label>
        <div>Description</div>
        <Input
          type="text"
          name="description"
          onBlur={formik.handleBlur}
          placeholder="Description"
          error={formik.errors.description}
          value={formik.values.description}
          onChange={formik.handleChange}
          touched={formik.touched.description}
        />
      </label>
      {children}
    </FormStyle>
  );
};
