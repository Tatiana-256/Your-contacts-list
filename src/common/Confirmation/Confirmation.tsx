import React from "react";

import Portal from "../Modal/Modal";
import { ModalWrapper } from "../ModalsWrapper/ModalsWrapper";
import { Button, Flex } from "../Styles/Styles";

interface IProps {
  submit: () => void;
  reject: () => void;
}

export const Confirmation: React.FC<IProps> = ({ submit, reject }) => {
  return (
    <Portal>
      <ModalWrapper headline="Are you sure?">
        <Flex>
          <Button onClick={submit}>yes</Button>
          <Button onClick={reject}>no</Button>
        </Flex>{" "}
      </ModalWrapper>
    </Portal>
  );
};
