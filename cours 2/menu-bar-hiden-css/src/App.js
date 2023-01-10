import "./styles.css";
import { Haut } from "./haut.js";
import { Milieu } from "./milieu.js";
import { Bas } from "./bas.js";

export default function App() {
  return (
    <div className="page">
      <Haut className="haut" />
      <Milieu className="milieu" />
      <Bas className="bas" />
    </div>
  );
}
