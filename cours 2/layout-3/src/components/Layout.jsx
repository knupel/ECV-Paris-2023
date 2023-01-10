import "./layout.css";

export function Layout({ style, children }) {
  return (
    <div className="global">
      <div>haut de page</div>
      <div className="inside" style={style}>
        {children}
      </div>
      <div>bas de page</div>
    </div>
  );
}
