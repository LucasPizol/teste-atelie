import eye from "@/assets/eye.svg";
import logo from "@/assets/logo.svg";

import { useNavigate } from "react-router-dom";
import { MenuItem } from "./MenuItem";
export const Aside = () => {
  const navigate = useNavigate();

  return (
    <aside
      style={{
        width: 222,
        height: "100%",
        background: "#2E56E4",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          padding: "24px 20px",
        }}
      >
        <img src={logo} />
      </div>

      <nav style={{ paddingTop: "68px" }}>
        <MenuItem
          icon={<img src={eye} />}
          title="Atendimentos"
          onClick={() => navigate("/appointments")}
          isSelected={true}
        />
      </nav>
    </aside>
  );
};
