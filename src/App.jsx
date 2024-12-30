import React from "react";
import MainCard from "./Components/MainCard";
import { StoreContextProvider } from "./Context/Store";

const App = () => {
  return (
    <>
      <StoreContextProvider>
        <div>
          <MainCard />
        </div>
      </StoreContextProvider>
    </>
  );
};

export default App;
