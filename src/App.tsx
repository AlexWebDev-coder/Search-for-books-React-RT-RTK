import Home from "./modules/home";
import BooksDetail from "./components/common/books-detail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="home__container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books-detail" element={<BooksDetail />} />
      </Routes>
    </div>
  );
}

export default App;
