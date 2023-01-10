import "./layout.css";

export function Layout(props) {
  return (
    <div className="global">
      <div>haut de page</div>
      <div>{props.children}</div>
      <div>bas de page</div>
    </div>
  );
}
