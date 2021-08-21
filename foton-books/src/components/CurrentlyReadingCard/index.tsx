import { Circle, OutlinedCircle, Rectangle, Waves } from 'components/Symbols';
import * as S from './styles';

export type CurrentlyReadingCardProps = {
  id: string;
  title: string;
  author?: string;
  currentlyChapter?: number;
  totalChapters: number;
  cover?: string;
};

const CurrentlyReadingCard = ({
  title,
  currentlyChapter = 2,
  totalChapters = 9,
  author = 'unknown author',
  cover = '/images/generic-cover.png'
}: CurrentlyReadingCardProps) => (
  <S.Wrapper title={`${title} by ${author}`}>
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Author>by {author || 'unknown author'}</S.Author>

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
