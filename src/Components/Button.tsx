import styled from "styled-components";

interface StyledbuttonChildren {
  children: React.ReactNode;
  fullWidth?: boolean;
}

const StyledButton = styled.button<StyledbuttonChildren>`
  background-color: ${(children) =>
    children.children === "Sign in" ? "#DDB63E" : "#97B09D"};
  border: none;
  font-size: 1.5rem;
  margin: 0.5rem 0rem;
  padding: 0.8rem 2rem;
  border-radius: 2rem;
  width: ${(props) => (props.fullWidth === true ? "100%" : "auto")};
  &:first-of-type {
    margin-top: 4rem;
  }
`;

interface ButtonChildren {
  children: React.ReactNode;
  fullWidth?: boolean;
  handleClick: Function;
}

const button = ({
  children,
  fullWidth = false,
  handleClick,
}: ButtonChildren) => {
  function emitButtonClicked(children: React.ReactNode) {
    handleClick(children);
  }

  return (
    <StyledButton
      fullWidth={fullWidth}
      onClick={() => {
        emitButtonClicked(children);
      }}
    >
      {children}
    </StyledButton>
  );
};

export default button;
