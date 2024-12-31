import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {
  const [inputfillData, setInputfillData] = useState(() => {
    const saveData = JSON.parse(localStorage.getItem("data"));
    return (
      saveData || {
        firstData: { first: "", check: false },
        secondData: { second: "", check: false },
        thirdtData: { third: "", check: false },
      }
    );
  });
  const [showFill, setShowFill] = useState(false);
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(inputfillData));
  }, [inputfillData]);
  // !! all the input fill data
  const handleInputChange = (e) => {
    setShowFill(false);
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
  //! Check if all the fields are filled with non-empty values
  const isFill = Object.values(inputfillData).every((cur) => {
    return Object.values(cur).every((value) =>
      typeof value === "string" ? value.trim() !== "" : true
    );
  });

  const handleToggle = (fieldName) => {
    //! Only toggle if all fields are filled
    if (isFill) {
      setShowFill(false);
      setInputfillData((prev) => {
        const updatedData = { ...prev };
        if (updatedData[fieldName]) {
          updatedData[fieldName] = {
            ...updatedData[fieldName],
            check: !updatedData[fieldName].check,
          };
        }
        return updatedData;
      });
    } else {
      setShowFill(true);
    }
  };

  // ! total is compleated data
  const totalFillData = Object.values(inputfillData).filter(
    (cur) => cur.check
  ).length;

  // ! messege by the total compleated value for motivation
  const information = [
    "Raise the bar by completing your goals!",
    " Well begun is half done!",
    "Just a step away, keep going!",
    " Whoa! You just completed all the goals, time for chill 😃",
  ];

  return (
    <StoreContext.Provider
      value={{
        handleInputChange,
        inputfillData,
        handleToggle,
        showFill,
        isFill,
        totalFillData,
        information,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
