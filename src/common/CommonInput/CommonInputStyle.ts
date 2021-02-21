import styled, { css } from "styled-components";
import { Flex } from "../Styles/Styles";

interface IProps {
  usedInput?: boolean;
  error?: boolean;
  width?: number;
}

export const InputStyle = styled.input<IProps>`
  width: 300px;
  height: 27px;
  padding: 3px 10px;
  border: 1px solid gray;
  border-radius: 13px;
  margin: 4px 0;
  outline: none;
  ${({ usedInput }) =>
    usedInput &&
    css`
      border: solid 1px black;
    `}
  ${({ error }) =>
    error &&
    css`
      border: solid 1px darkred;
    `}
  ${({ width }) =>
    width &&
    css`
      width: ${width}%;
    `}
`;

export const AddPhoto = styled(Flex)`
  width: 90px;
  height: 90px;
  border: 1px solid #5d5d5d;
  border-radius: 50%;
  flex-direction: column;
`;

interface IPhoto {
  imageThumb: string;
}

export const UserPhoto = styled(AddPhoto)<IPhoto>`
  background-image: url(${(props) => props.imageThumb});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
`;
