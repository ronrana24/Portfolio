import { useEffect, useState } from "react";
import useFetch from "./useFetch";

export default function useVisit() {
  const { data } = useFetch(
    "https://unstop-assessment-backend.onrender.com/api/visitor",
    { method: "GET" }
  );

  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    if (data?.visits) {
      setValue(data.visits);
    }
  }, [data]);

  const sendData = async () => {
    const response = await fetch(
      "https://unstop-assessment-backend.onrender.com/api/visitor",
      {
        method: "PUT",
      }
    );

    if (response.ok) {
      //   setCurrentVisit((prev: number) => prev + 1);
      localStorage.setItem("visit", "1");
    }
  };

  useEffect(() => {
    const currentValue = Number(localStorage.getItem("visit")) || 0;
    if (currentValue === 0) {
      sendData();
    }
  }, []);

  return [value, setValue];
}
