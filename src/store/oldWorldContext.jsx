import React, { useState, createContext } from "react";

export const OldWorldContext = createContext([]);

export const OldWorldContextProvider = ({ children }) => {
  const [oldWorld, setOldWorld] = useState([]);
  const [errorOldWorld, setErrorOldWorld] = useState();

  const readFileOnUpload = uploadedFile => {
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      try {
        setOldWorld(fileReader.result);
        setErrorOldWorld(null);
      } catch (e) {
        setErrorOldWorld("**Not valid JSON file!**");
      }
    };
    if (uploadedFile !== undefined) fileReader.readAsText(uploadedFile);
  };

  const providerValue = {
    oldWorld,
    setOldWorld,
    errorOldWorld,
    readFileOnUpload,
  };

  return <OldWorldContext.Provider value={providerValue}>{children}</OldWorldContext.Provider>;
};
