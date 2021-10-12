import Filter from "./components/Filter";
import Header from "./components/header";
import GridSalesByUser from "./components/Sales/GridSalesByUser";
import StateUser from "./context/UserContext/StateUser";
import StateTeam from "./context/TeamContext/StateTeam";
import GridSalesByTeam from "./components/Sales/GridSalesByTeam";
import "./assets/styles/_global.scss";
import "./App.scss";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <StateUser>
        <StateTeam>
          <Header />
          <div class="app__content">
            <Filter />
            <GridSalesByUser />
            <GridSalesByTeam />
          </div>
        </StateTeam>
      </StateUser>
      <Footer />
    </div>
  );
}

export default App;
