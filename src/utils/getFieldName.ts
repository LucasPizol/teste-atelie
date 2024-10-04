interface GetFieldNameProps {
  title: string;
  sectionName: string;
  name: string;
}

export const getFieldName = (data: GetFieldNameProps) => {
  return `${data.title}-${data.sectionName}-${data.name}`
    .split(" ")
    .join("-")
    .toLowerCase();
};
