import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ErrorScreen from "./screens/ErrorScreen";
import { ThemeProvider } from "@mui/styles";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const App = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
   <BrowserRouter>
     <ThemeProvider theme={theme}>
       <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}>
         <Routes>
           <Route exact path="/" element={<HomeScreen />} />
           <Route path="*" element={<ErrorScreen />} />
         </Routes>
       </Box>
     </ThemeProvider>
   </BrowserRouter>
  );
};

export default App;
