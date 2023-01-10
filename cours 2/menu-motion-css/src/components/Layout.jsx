import "./layout.css";

export function Layout({ style, children }) {
  return (
    <div className="global">
      <div className="haut">haut de page</div>
      <div style={style}>{children}</div>
      <div>bas de page</div>
    </div>
  );
}
