import styles from "./styles.module.css";
interface MenuItemProps {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
  isSelected: boolean;
}

export const MenuItem = ({
  icon,
  title,
  onClick,
  isSelected,
}: MenuItemProps) => {
  return (
    <div
      className={`${styles.menu_item} ${isSelected ? styles.selected : ""}`}
      onClick={onClick}
    >
      {icon}
      <span>{title}</span>
    </div>
  );
};
