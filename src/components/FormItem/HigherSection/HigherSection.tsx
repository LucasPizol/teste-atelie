import { CommonInputChangeEvent } from "@/interfaces/CommonInput";
import { HigherSectionModel } from "@/interfaces/Form";
import { LowerSection } from "../LowerSection/LowerSection";

interface HigherSectionProps {
  handleChange: (e: CommonInputChangeEvent) => void;
  formFields: any;
}

export const HigherSection = ({
  fields,
  section,
  handleChange,
  formFields,
}: HigherSectionModel & HigherSectionProps) => {
  return (
    <div>
      <h2>{section}</h2>
      {fields?.map((field, index) => (
        <LowerSection
          key={index}
          fields={field.fields}
          section={field.section}
          handleChange={handleChange}
          formFields={formFields}
        />
      ))}
    </div>
  );
};
