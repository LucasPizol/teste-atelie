interface FormGroupProps {
  children: React.ReactNode;
}

export const FormGroup = ({ children }: FormGroupProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      FormGroup
    </div>
  );
};
