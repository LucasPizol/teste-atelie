import {
  CommonInputChangeEvent,
  CommonInputProps,
} from "@/interfaces/CommonInput";
import { FieldModel, FieldSectionModel, FormType } from "@/interfaces/Form";
import { Checkbox } from "../Checkbox/Checkbox";
import { InputText } from "../Input/Input";
import { Radio } from "../Radio";
import { Select } from "../Select/Select";
import { TextArea } from "../TextArea/TextArea";

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
}

export const LowerSection = ({
  fields,
  section,
  formFields,
  handleChange,
}: FieldSectionModel & LowerSectionProps) => {
  return (
    <div>
      <p>{section}</p>

      <div
        style={{
          display: "flex",
          gap: 11,
          alignItems: "flex-start",
        }}
      >
        {fields?.map((field) => {
          const FormItemComponent = FormItemSelector[field.type];
          return (
            <FormItemComponent
              key={field.id}
              {...field}
              onChange={handleChange}
              value={formFields[field.form_name]}
            />
          );
        })}
      </div>
    </div>
  );
};
