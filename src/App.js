import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <h1>Great Deals Ahead</h1>
      <Link to="/shop">Go Shopping!</Link>
    </div>
  );
}

export default App;
