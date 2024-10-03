import { FieldModel } from "@/interfaces/Form";

export const Checkbox = ({ checked, id }: FieldModel) => {
  return <input type="checkbox" checked={checked} id={String(id)} />;
};
