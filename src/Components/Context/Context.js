import React, {useContext, createContext, useState } from "react";
import { useEffect } from "react";
const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0)
const fetApi = async () => {
  const url = 'https://course-api.com/react-tabs-project'
  setLoading(true);

try {
  const response = await fetch(url);
  const data = await response.json();
  setData(data);
  setLoading(false);  
} catch (error) {
  console.log(error);
  setLoading(false);

}
  }
useEffect(() => {
fetApi();
}, [])

  return (
    <AppContext.Provider
      value={{
        data,
        value,
        setValue,
        loading
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
