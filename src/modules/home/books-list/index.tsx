import { FC } from "react";
import { useNavigate } from "react-router-dom";
import BooksCard from "src/components/common/books-card";
import { observer } from "mobx-react-lite";
import BookStore from "src/store";
import store from "src/store";
import IsLoading from "src/components/common/loading";

interface IProps {
  bookStore: typeof BookStore;
}

const BooksList: FC<IProps> = observer(({ bookStore }) => {
  const navigate = useNavigate();

  const handleCardDetail = (id: string) => {
    navigate(`/books-detail/${id}`);
  };

  const handleLoadMore = () => {
    store.setFlagLoadMore(true);
    store.loadMoreBooks();
  };

  if (bookStore.isLoading) {
    return <IsLoading isLoading={bookStore.isLoading} />;
  }

  if (!bookStore.books.items.length) {
    return <div>No books found!</div>;
  }

  return (
    <>
      <div className="books__container">
        <div className="books__container_card">
          {bookStore.books.items?.map((book) => (
            <div
              key={book.id}
              className="book__card"
              onClick={() => handleCardDetail(book.id)}
            >
              <BooksCard book={book} key={book.id} />
            </div>
          ))}
        </div>
      </div>
      <div className="pagination" onClick={handleLoadMore}>
        <h1 className="pagination__title">Load more...</h1>
      </div>
    </>
  );
});

export default BooksList;
