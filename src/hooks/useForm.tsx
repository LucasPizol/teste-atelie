import { CommonInputChangeEvent } from "@/interfaces/CommonInput";
import { useState } from "react";

export const useForm = <T extends Record<string, any>>(initialValues: T) => {
  const [fields, setFields] = useState<T>(initialValues);

  const handleChange = (e: CommonInputChangeEvent) => {
    const { id, value } = e.target;

    setFields((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return {
    fields,
    handleChange,
  };
};
