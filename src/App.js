import "./App.css";
import Nav from "./Components/Nav/Nav";

import MainHeader from "./Components/MainHeader/MainHeader";
import Balance from "./Components/Balance/Balance";
import Filter from "./Components/Filter/Filter";
import Table from "./Components/Table/Table";

function App() {
    return (
        <div className="page">
            <Nav />
            <div className="page__main">
                <MainHeader />
                <div className="main container">
                    <Balance />
                    <Filter />
                    <Table />
                </div>
            </div>
        </div>
    );
}

export default App;
