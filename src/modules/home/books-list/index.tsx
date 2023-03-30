import { useNavigate } from "react-router-dom";
import BooksCard from "src/components/common/books-card";

const BooksList = () => {
  const navigate = useNavigate();

  const handleCardDetail = () => {
    navigate("/books-detail");
  };

  return (
    <div className="books__container">
      <div className="books__container_card">
        <div className="card" onClick={handleCardDetail}>
          <BooksCard />
        </div>
      </div>
    </div>
  );
};

export default BooksList;
