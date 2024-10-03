import { Aside } from "./Aside";
import { Header } from "./Header";

export const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
      }}
    >
      <Aside />
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <main>{children}</main>
      </main>
    </div>
  );
};
