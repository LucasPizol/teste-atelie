import { CommonInputChangeEvent } from "@/interfaces/CommonInput";
import { SectionWrapperModel } from "@/interfaces/Form";
import { LowerSection } from "./LowerSection/LowerSection";

import styles from "./style.module.css";

interface HigherSectionProps {
  handleChange: (e: CommonInputChangeEvent) => void;
  formFields: any;
}

export const HigherSection = ({
  title,
  sections,
  handleChange,
  formFields,
}: SectionWrapperModel & HigherSectionProps) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      {sections?.map((field, index) => (
        <LowerSection
          key={index}
          sectionFields={field.sectionFields}
          sectionName={field.sectionName}
          handleChange={handleChange}
          formFields={formFields}
          contentName={title}
        />
      ))}
    </div>
  );
};
