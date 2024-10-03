import { FieldModel } from "@/interfaces/Form";

export const InputText = ({ id, value, type }: FieldModel) => {
  return <input type={type} id={String(id)} value={value} />;
};
