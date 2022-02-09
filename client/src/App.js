import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./Routes"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes/>
      </Router>
    </div>
  );
}

export default App;
