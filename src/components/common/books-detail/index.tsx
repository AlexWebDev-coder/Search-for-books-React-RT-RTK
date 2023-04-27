import { FC } from "react";
import { useParams } from "react-router-dom";

const BooksDetail: FC = () => {
  const { id } = useParams();

  // const book = store.books.items.find((item) => item.id === id);

  return (
    <div className="books__container">
      <div className="books__container_image">
        {/* <img
          width={300}
          height={300}
          className="books__detail_image"
          src={book?.volumeInfo.imageLinks.smallThumbnail}
          alt={book?.volumeInfo.title}
        /> */}
      </div>
      <div className="books__container_info">
        {/* <p className="subtitle__category">{book?.volumeInfo.categories}</p>
        <h1 className="books__detail_title">{book?.volumeInfo.title}</h1>
        <p className="books__author">{book?.volumeInfo.authors || ""}</p>
        <div className="books__dec_block">
          <p className="books_description">{book?.volumeInfo.description}</p>
        </div> */}
      </div>
    </div>
  );
};

export default BooksDetail;
