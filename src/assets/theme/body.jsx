import styled from 'styled-components';
import theme from "styled-theming";


export const backgroundColor = theme("theme", {
    default: "#DADAEA",
    dark: "linear-gradient(#1e1e2f, #1e1e24)",
});

export const textColor = theme("theme", {
    default: "#000",
    dark: "#fff",
});

export const Container = styled.div`
  background:  ${backgroundColor};
  position: relative;
  min-height: 100vh;
`;