import { useState } from "react";

export function Menu() {
  const [is, setIs] = useState(false);

  function mouse_is() {
    is ? setIs(false) : setIs(true);
  }

  const style_bar = {
    opacity: is ? 1 : 0,
    height: is ? "30px" : "0px",
    transition: "all 1s"
  };

  return (
    <div
      onMouseLeave={mouse_is}
      onMouseEnter={mouse_is}
      style={style_bar}
      className="haut"
    >
      haut de page
    </div>
  );
}
