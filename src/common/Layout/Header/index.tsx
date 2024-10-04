import { PhysiciansService } from "@/api/services/physicians";
import styles from "./styles.module.css";

export const Header = () => {
  const user = PhysiciansService.getCurrentPhyisician();

  return (
    <header className={styles.header}>
      <span>{user?.name}</span>
    </header>
  );
};
