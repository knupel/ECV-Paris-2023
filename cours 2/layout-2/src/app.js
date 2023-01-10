import "./styles.css";

import { Layout } from "./components/Layout.jsx";

export default function App() {
  return (
    <div className="App">
      <Layout>Le beau contenu qui arrive ou il faut</Layout>
      <Layout style={{ background: "red" }}>
        Il fait noir dans cette salle
      </Layout>
    </div>
  );
}
