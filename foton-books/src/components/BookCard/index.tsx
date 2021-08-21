import Link from 'next/link';
import * as S from './styles';

export type BookCardProps = {
  id: string;
  title: string;
  author?: string;
  cover?: string;
};

const BookCard = ({
  id,
  title,
  cover = '/images/generic-cover.png',
  author = 'unknown author'
}: BookCardProps) => (
  <S.Wrapper>
    <Link href={`/book/${id}`} passHref>
      <S.Link>
        <S.Image src={cover} alt={`${title} by ${author}`} />
      </S.Link>
    </Link>

    <S.Title>{title}</S.Title>
    <S.Author>by {author}</S.Author>
  </S.Wrapper>
);

export default BookCard;
