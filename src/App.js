import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ErrorScreen from "./screens/ErrorScreen";
import { ThemeProvider } from "@mui/styles";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { OldWorldContextProvider } from "./store/oldWorldContext";
import NickNavigator from "./screens/NickNavigator";
import MainGameScreen from "./screens/MainGameScreen";
import { LoginContextProvider } from "./store/loginContext";
import { GameContextProvider } from "./store/gameContexts";

const App = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <BrowserRouter>
      <LoginContextProvider>
        <OldWorldContextProvider>
          <GameContextProvider>
            <ThemeProvider theme={theme}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "100vh",
                }}>
                <Routes>
                  <Route exact path="/" element={<HomeScreen />} />
                  <Route exact path="/nick" element={<NickNavigator />} />
                  <Route exact path="/main-game" element={<MainGameScreen />} />
                  <Route path="*" element={<ErrorScreen />} />
                </Routes>
              </Box>
            </ThemeProvider>
          </GameContextProvider>
        </OldWorldContextProvider>
      </LoginContextProvider>
    </BrowserRouter>
  );
};

export default App;
