import React from "react";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";

const SetTheme = ({ children, theme }) => {
    let SelectedTheme = localStorage.getItem("dark");
    return (
        <ThemeProvider theme={{ theme: SelectedTheme ? SelectedTheme : theme }}>
            {children}
        </ThemeProvider>
    );
};

export default connect(state => ({
    theme: state.themeReducer.theme
}))(SetTheme);