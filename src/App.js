import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Category from "./SideBar/Category/Category";

function App() {
  return (
    <>
      <Navigation />
      <Products />
      <Recommended />
      <Category />
    </>
  );
}

export default App;
