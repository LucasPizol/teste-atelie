import { PhysiciansService } from "@/api/services/physicians";

export const Header = () => {
  const user = PhysiciansService.getCurrentPhyisician();

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        height: 60,
      }}
    >
      <span>{user?.name}</span>
    </header>
  );
};
