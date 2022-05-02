import styled from "styled-components";

interface alertTextStyled {
  error?: boolean;
}

const AlertTextStyled = styled.ul<alertTextStyled>`
  margin-top: 3rem;
  border-radius: 0.5rem;
  box-sizing: border-box;
  min-width: 100%;
  background-color: ${(props) =>
    props.error === true
      ? "rgb(228, 84, 84); color: #fbd8d8;"
      : "rgb(151, 176, 157); color: #000"};
  padding: 0.8rem 2.5em;
`;

interface alertProps {
  children: React.ReactNode;
  error: boolean;
}

const AlertText = ({ children, error }: alertProps) => (
  <AlertTextStyled error={error}>{children}</AlertTextStyled>
);

export default AlertText;
