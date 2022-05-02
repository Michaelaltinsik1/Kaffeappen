import styled from "styled-components";

const StyledHeading = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  & h1 {
    font-size: 2rem;
    font-weight: normal;
    text-transform: uppercase;
  }
`;

interface sitePropsType {
  children: string;
}
const siteHeading = ({ children }: sitePropsType) => (
  <StyledHeading>
    <h1>{children}</h1>
  </StyledHeading>
);
export default siteHeading;
