import "./styles.css";

export default function App() {
  const entree_style = {
    position: "relative",
    top: "10px",
    background: "yellow"
  };

  const plat_style = {
    background: "cyan"
  };

  const dessert_style = {
    background: "magenta"
  };

  return (
    <div className="App">
      <h1 style={entree_style}>Entrée</h1>
      <h1 style={plat_style}>Plat</h1>
      <h1 style={dessert_style}>Dessert</h1>
    </div>
  );
}
