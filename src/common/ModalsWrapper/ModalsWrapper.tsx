import React, { ReactNode } from "react";

import { Wrapper } from "./ModalStyles";

interface IProps {
  headline: string;
  children: ReactNode;
  handler?: () => void;
}

export const ModalWrapper: React.FC<IProps> = ({ headline, children }) => {
  return (
    <Wrapper>
      <h2> {headline}</h2>
      {children}
    </Wrapper>
  );
};
