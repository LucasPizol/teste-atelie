export type FormType = "text" | "select" | "checkbox" | "radio" | "textarea";

export interface FormModel {
  id: number;
  name: string;
  patient_id: number;
  fields: HigherSectionModel[];
}

export interface HigherSectionModel {
  section: string;
  fields: FieldSectionModel[];
}

export interface FieldSectionModel {
  section: string;
  fields: FieldModel[];
}

export interface FieldModel {
  id: number;
  name: string;
  type: FormType;
  value: string;
  checked: boolean;
  options: string[] | null;
  form_name: string;
}
