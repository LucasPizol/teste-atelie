interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export const Button = (props: ButtonProps) => {
  return (
    <button
      style={{
        padding: "12px 16px",
        background: "#6D767E",
        color: "#fff",
        borderRadius: "4px",
      }}
      {...props}
    />
  );
};
