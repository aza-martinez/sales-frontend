import Filter from "./components/Filter";
import Header from "./components/header";
import GridSalesByUser from "./components/Sales/GridSalesByUser";
import StateUser from "./context/UserContext/StateUser";
import StateTeam from "./context/TeamContext/StateTeam";
import GridSalesByTeam from "./components/Sales/GridSalesByTeam";
import "./assets/styles/_global.scss";

function App() {
  return (
    <div className="App">
      <StateUser>
        <StateTeam>
          <Header />
          <Filter />
          <GridSalesByUser />
          <GridSalesByTeam />
        </StateTeam>
      </StateUser>
    </div>
  );
}

export default App;
