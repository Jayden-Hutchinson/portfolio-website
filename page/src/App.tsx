import Products from "./components/Products";
import OrderForm from "./components/OrderForm";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col gap-50">
      <Header />
      <Products />
      <OrderForm />
      <Footer />
    </div>
  );
}

export default App;
