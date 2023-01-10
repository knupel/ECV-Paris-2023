import "./layout.css";
import { Menu } from "./Menu";

export function Layout({ style, children }) {
  return (
    <div className="global">
      <Menu />
      <div style={style}>{children}</div>
      <div>bas de page</div>
    </div>
  );
}
