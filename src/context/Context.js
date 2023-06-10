import React, { useState, createContext } from "react";


// Create the context
const MyContext = createContext();

function Context({children}) {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <MyContext.Provider value={{ count, handleCount }}>
      {children}
    </MyContext.Provider>
  );
}

export { Context, MyContext };
