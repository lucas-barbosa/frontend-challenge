import { Circle, OutlinedCircle, Rectangle, Waves } from 'components/Symbols';
import * as S from './styles';

export type CurrentlyReadingCardProps = {
  title: string;
  author: string;
  currentlyChapter: number;
  totalChapters: number;
  cover: string;
};

const CurrentlyReadingCard = ({
  title,
  author,
  currentlyChapter,
  totalChapters,
  cover
}: CurrentlyReadingCardProps) => (
  <S.Wrapper>
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Author>by {author}</S.Author>

      <S.Chapters
        aria-label={`Chapter ${currentlyChapter} From ${totalChapters}`}
      >
        Chapter <strong>{currentlyChapter}</strong> From {totalChapters}
      </S.Chapters>
    </S.Content>

    <S.Cover src={cover} alt={title} />

    <S.SymbolsGroup>
      <Circle />
      <OutlinedCircle />
      <Rectangle />
      <Waves />
    </S.SymbolsGroup>
  </S.Wrapper>
);

export default CurrentlyReadingCard;
