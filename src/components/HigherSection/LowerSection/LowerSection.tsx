import {
  CommonInputChangeEvent,
  CommonInputProps,
} from "@/interfaces/CommonInput";
import { FieldModel, FormType, SectionModel } from "@/interfaces/Form";

import { getFieldName } from "@/utils/getFieldName";
import { useMemo } from "react";
import { Checkbox } from "./FormItem/Checkbox/Checkbox";
import { InputText } from "./FormItem/Input/Input";
import { Radio } from "./FormItem/Radio";
import { Select } from "./FormItem/Select/Select";
import { TextArea } from "./FormItem/TextArea/TextArea";
import styles from "./styles.module.css";

const FormItemSelector: Record<
  FormType,
  React.FC<FieldModel & CommonInputProps>
> = {
  checkbox: Checkbox,
  select: Select,
  text: InputText,
  textarea: TextArea,
  radio: Radio,
};

interface LowerSectionProps {
  handleChange: (e: CommonInputChangeEvent) => void;
  formFields: any;
  contentName: string;
}

export const LowerSection = ({
  formFields,
  handleChange,
  sectionFields,
  sectionName,
  contentName,
}: SectionModel & LowerSectionProps) => {
  return (
    <div className={styles.lower_section}>
      <p>{sectionName}</p>

      <div className={styles.lower_section__fields_container}>
        {sectionFields?.map((field) => {
          const FormItemComponent = FormItemSelector[field.type];

          if (!FormItemComponent) {
            return <p>Elemento não encontrado</p>;
          }

          const fieldName = useMemo(() => {
            return getFieldName({
              name: field.name,
              sectionName,
              title: contentName,
            });
          }, []);

          return (
            <FormItemComponent
              key={field.id}
              {...field}
              onChange={handleChange}
              value={formFields[fieldName]}
              sectionName={sectionName}
              name={fieldName}
            />
          );
        })}
      </div>
    </div>
  );
};
