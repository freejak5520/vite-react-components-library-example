import { styled } from "styled-components";

export function Input({
  children,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return <StyledInput {...props}>{children}</StyledInput>;
}

const StyledInput = styled.input`
  background-color: red;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;
