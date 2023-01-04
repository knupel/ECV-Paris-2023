import "./styles.css";

function Cell(props) {
  let text = "ECV";
  return (
    <div className="cell">
      <h1>{text + " " + props.annee}</h1>
    </div>
  );
}

export default function App() {
  let annees = [];
  let start = 2022;
  let max = 5;
  for (let i = 0; i < max; i++) {
    let temp = start++;
    annees.push(temp);
  }
  return (
    <div className="App">
      {annees.map((elem, index) => {
        return <Cell annee={elem + " " + index} />;
      })}
    </div>
  );
}
