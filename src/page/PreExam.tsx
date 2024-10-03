import { FormService } from "@/api/services/form";
import { FormModel } from "@/interfaces/Form";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const PreExam = () => {
  const [selectedForm, setSelectedForm] = useState<FormModel | null>(null);

  const { id } = useParams();

  useEffect(() => {
    FormService.getForm(Number(id)).then((form) => {
      setSelectedForm(form);
    });
  }, [id]);

  return <></>;
};
