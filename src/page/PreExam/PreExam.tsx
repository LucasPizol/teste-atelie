import { FormService } from "@/api/services/form";
import { Button } from "@/components/Button";
import { HigherSection } from "@/components/HigherSection";
import { useForm } from "@/hooks/useForm";
import { FormModel } from "@/interfaces/Form";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getFieldName } from "@/utils/getFieldName";
import styles from "./styles.module.css";

export const PreExam = () => {
  const [selectedForm, setSelectedForm] = useState<FormModel | null>(null);

  const { fields: formFields, handleChange, setFields } = useForm<any>({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    FormService.getForm(Number(id)).then((form) => {
      if (!form) return;

      setSelectedForm(form);

      const fields = form.content.reduce((acc, { sections, title }) => {
        sections.forEach(({ sectionName, sectionFields }) => {
          sectionFields.forEach((field) => {
            acc[
              getFieldName({
                title,
                sectionName,
                name: field.name,
              })
            ] = field.value;
          });
        });

        return acc;
      }, {} as any);

      setFields(fields);
    });
  }, [id]);

  return (
    <main className={styles.main_container} style={{}}>
      <section className={styles.main_container__section}>
        {selectedForm?.content.map((field, index) => (
          <HigherSection
            key={index}
            sections={field.sections}
            title={field.title}
            handleChange={handleChange}
            formFields={formFields}
          />
        ))}
      </section>
      <Button
        onClick={() => {
          alert("Formulário enviado com sucesso!");

          navigate(`/appointments`);
        }}
      >
        Enviar
      </Button>
    </main>
  );
};
