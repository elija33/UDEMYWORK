import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import TicketForms from "./components/TicketForms";

function App() {
  const initialState = { tickets: [] };
  return (
    <div className="App">
      <div className="container">
        <h1>Bug Blast</h1>
        <TicketForms />
      </div>
    </div>
  );
}

export default App;
