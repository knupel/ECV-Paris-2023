import "./styles.css";

import { Layout } from "./components/Layout.jsx";

export default function App() {
  const style = {
    background: "red",
    height: "300px"
  };

  return (
    <div className="App">
      <Layout>Le beau contenu qui arrive ou il faut</Layout>
      <Layout style={style}>Il fait noir dans cette salle</Layout>
    </div>
  );
}
