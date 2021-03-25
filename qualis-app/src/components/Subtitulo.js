import styled from "styled-components/native";

export default styled.Text`
  color: ${({ reverse }) => (reverse ? "#f9a826" : "#2f2f2f")};
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
  text-align: center;
`;
