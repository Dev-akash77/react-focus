import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {
  const [inputfillData, setInputfillData] = useState(() => {
    const saveData=JSON.parse(localStorage.getItem("data"));
    return saveData || {
      firstData: { first: "", check: false },
      secondData: { second: "", check: false },
      thirdtData: { third: "", check: false },
    } 
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(inputfillData));
  }, [inputfillData]);
  
  // !! all the input fill data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputfillData((prev) => {
      const { firstData, secondData, thirdtData } = prev;
      if (name in firstData) {
        return {
          ...prev,
          firstData: { [name]: value, check: false },
        };
      }
      if (name in secondData) {
        return {
          ...prev,
          secondData: { [name]: value, check: false },
        };
      }
      if (name in thirdtData) {
        return {
          ...prev,
          thirdtData: { [name]: value, check: false },
        };
      }
    });
  };

  return (
    <StoreContext.Provider value={{ handleInputChange,inputfillData }}>
      {children}
    </StoreContext.Provider>
  );
};
