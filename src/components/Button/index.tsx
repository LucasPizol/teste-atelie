import styles from "./styles.module.css";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export const Button = (props: ButtonProps) => {
  return <button className={styles.button} {...props} />;
};
