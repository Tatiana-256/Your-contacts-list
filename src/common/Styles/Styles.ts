import styled, { css } from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

interface IButton {
  width?: string | undefined;
  height?: string | undefined;
  disabled?: boolean;
  fontSize?: string | undefined;
}

export const Button = styled.button<IButton>`
  background-color: #363b4d;
  outline: none;
  width: ${({ width }) => width || "50%"};
  height: ${({ height }) => height || "40px"};
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  color: #cfcfcf;
  border-radius: 13px;
  border: none;
  margin: 1rem 0.4rem;
  box-shadow: 5px 6px 7px #00000080;

  &:hover {
    color: white;
    background-color: #2f3445;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      &:disabled {
        background-color: #a0a0a0;
      }
    `}
`;
