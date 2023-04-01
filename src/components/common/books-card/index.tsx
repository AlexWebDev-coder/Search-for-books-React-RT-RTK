import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { IProps } from "./types";

const BooksCard: React.FC<IProps> = ({ book }) => {
  const { volumeInfo } = book;

  return (
    <Card sx={{ maxHeight: "auto" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={volumeInfo?.imageLinks?.smallThumbnail}
          alt="green iguana"
        />
        <CardContent>
          <p className="books__category">{volumeInfo?.categories?.[0]}</p>
          <h1 className="card__title">{volumeInfo?.title}</h1>
          <p className="books__author">{volumeInfo?.authors}</p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BooksCard;
