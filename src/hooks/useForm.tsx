import { CommonInputChangeEvent } from "@/interfaces/CommonInput";
import { useState } from "react";

export const useForm = <T extends Record<string, any>>(initialValues: T) => {
  const [fields, setFields] = useState<T>(initialValues);

  const handleChange = (e: CommonInputChangeEvent) => {
    const { name, value } = e.target;

    setFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    fields,
    handleChange,
    setFields,
  };
};
