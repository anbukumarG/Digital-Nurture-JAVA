import { CalculateScore } from "./Components/CalculateScore";

function App() {
  return (
    <div>
      <CalculateScore
        Name="Anbu Kumar"
        School="SNR HR Sec School"
        total={284}
        goal={3}
      />
    </div>
  );
}

export default App;