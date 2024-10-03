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
      onClick={onClick}
      style={{
        cursor: "pointer",
        display: "flex",
        gap: 11,
        background: isSelected ? "#1F46CF" : "transparent",
        padding: "18px 20px",
      }}
    >
      {icon}
      <span>{title}</span>
    </div>
  );
};
