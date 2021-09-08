import Topbar from "./components/topbar/Topbar";
import Invoicing from "./components/invoicing/Invoicing";
import Savings from "./components/savings/Savings";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Invoicing/>
        <Savings/>
      </div>
    </div>
  );
}

export default App;
