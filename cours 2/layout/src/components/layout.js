import React from "react";

import "./layout.css";

export function Layout({ children }) {
  return (
    <div className="outside">
      <header>Here it's my famous amazing awesome menu</header>
      <div className="inside">{children}</div>
      <footer>BigFoot make a peace here</footer>
    </div>
  );
}
