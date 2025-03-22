"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getServerSideData } from "@/services";
import { ApiEndpoints } from "@/utils";

const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchGlobalData = async () => {
      try {
        const response = await getServerSideData(
          ApiEndpoints.getGlobalEndpoint()
        );
        setData(response);
      } catch (error) {
        console.error("Failed to fetch global data:", error);
      }
    };

    fetchGlobalData();
  }, []);

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};
export const useGlobalContext = () => useContext(GlobalContext);
