import "./styles.css";

export default function App() {
  let text = "Ensad";
  let an = [2022, 2023, 2024];
  return (
    <div className="App">
      <div className="cell">
        <h1>{text + " " + an[0]}</h1>
      </div>
      <div className="cell">
        <h1>{text + " " + an[1]}</h1>
      </div>
      <div className="cell">
        <h1>{text + " " + an[2]}</h1>
      </div>
    </div>
  );
}
/*

*/
