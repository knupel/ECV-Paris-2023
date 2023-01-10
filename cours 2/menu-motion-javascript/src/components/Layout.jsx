import "./layout.css";
import { useState } from "react";
// onMouseEnter
// onMouseLeave
export function Layout({ style, children }) {
  const [is, setIs] = useState(false);

  function mouse_in() {
    setIs(true);
  }

  function mouse_out() {
    setIs(false);
  }

  function mouse_is() {
    is ? setIs(false) : setIs(true);
  }

  const style_bar = {
    opacity: is ? 1 : 0,
    height: is ? "30px" : "0px",
    transition: "all 1s"
  };

  return (
    <div className="global">
      <div
        onMouseLeave={mouse_is}
        onMouseEnter={mouse_is}
        style={style_bar}
        className="haut"
      >
        haut de page
      </div>
      <div style={style}>{children}</div>
      <div>bas de page</div>
    </div>
  );
}
