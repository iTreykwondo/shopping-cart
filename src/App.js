import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <h1>Home Page</h1>
    </div>
  );
}

export default App;
