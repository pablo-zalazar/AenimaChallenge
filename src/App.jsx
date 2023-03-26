import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Trends from "./components/trends/Trends";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Trends />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
