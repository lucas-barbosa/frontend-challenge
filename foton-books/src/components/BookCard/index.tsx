import * as S from './styles';

export type BookCardProps = {
  id: string;
  title: string;
  author: string;
  image?: string;
};

const BookCard = ({ id, title, author, image }: BookCardProps) => (
  <S.Wrapper>
    <S.Link href={`/book-details/${id}`}>
      <S.Image src={image} alt={`${title} by ${author}`} />
    </S.Link>

    <S.Title>{title}</S.Title>
    <S.Author>by {author}</S.Author>
  </S.Wrapper>
);

export default BookCard;
