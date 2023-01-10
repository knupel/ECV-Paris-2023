import { useState } from "react";

export function Haut(props) {
  const [is, set_is] = useState(false);

  function mouse_is() {
    is ? set_is(false) : set_is(true);
  }

  const effect_bar = {
    opacity: is ? 1 : 0,
    height: is ? "30px" : "0px",
    transition: "all 1s"
  };

  return (
    <div
      onMouseEnter={mouse_is}
      onMouseLeave={mouse_is}
      className={props.className}
      style={effect_bar}
    >
      Haut de page, c'est souvent le menu
    </div>
  );
}
