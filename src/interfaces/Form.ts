export type FormType = "text" | "select" | "checkbox" | "radio" | "textarea";

export interface FormModel {
  id: number;
  name: string;
  patient_id: number;
  content: SectionWrapperModel[];
}

export interface SectionWrapperModel {
  title: string;
  sections: SectionModel[];
}

export interface SectionModel {
  sectionName: string;
  sectionFields: FieldModel[];
}

export interface FieldModel {
  id: number;
  name: string;
  type: FormType;
  value: string;
  checked: boolean;
  options: string[] | null;
  sectionName: string;
}
