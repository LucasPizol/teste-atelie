import { FieldModel } from "@/interfaces/Form";

export const Label = ({ id, name }: FieldModel) => {
  return <label htmlFor={String(id)}>{name}</label>;
};
