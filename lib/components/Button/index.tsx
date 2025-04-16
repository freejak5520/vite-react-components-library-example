import { styled } from "styled-components";

export function Button({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <Container {...props}>{children}</Container>;
}

const Container = styled.button`
  background-color: red;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;
