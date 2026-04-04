import JogoDados from "../components/JogoDados";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#1e1e2f",
        color: "white",
      }}
    >
      <JogoDados />
    </main>
  );
}