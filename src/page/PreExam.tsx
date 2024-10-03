import { FormService } from "@/api/services/form";
import { HigherSection } from "@/components/FormItem/HigherSection/HigherSection";
import { useForm } from "@/hooks/useForm";
import { FormModel } from "@/interfaces/Form";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const PreExam = () => {
  const [selectedForm, setSelectedForm] = useState<FormModel | null>(null);

  const { fields: formFields, handleChange, setFields } = useForm<any>({});

  const { id } = useParams();

  useEffect(() => {
    FormService.getForm(Number(id)).then((form) => {
      if (!form) return;

      setSelectedForm(form);

      const fields = form.fields.reduce((acc, field) => {
        field.fields.forEach((field) => {
          field.fields.map((field) => {
            acc[field.form_name] = field.value;
          });
        });

        return acc;
      }, {} as any);

      setFields(fields);
    });
  }, [id]);

  return (
    <main>
      {selectedForm?.fields.map((field, index) => (
        <HigherSection
          key={index}
          fields={field.fields}
          section={field.section}
          handleChange={handleChange}
          formFields={formFields}
        />
      ))}
    </main>
  );
};
