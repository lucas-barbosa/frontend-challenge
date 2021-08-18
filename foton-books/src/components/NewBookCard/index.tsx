import { CircleWaves, StatsIcon } from 'components/Icons';
import { OutlinedCircle, Rectangle, Triangle } from 'components/Symbols';

import * as S from './styles';

export type NewBookCardProps = {
  title: string;
  author?: string;
  count: number;
  cover?: string;
};

const NewBookCard = ({ title, author, count, cover }: NewBookCardProps) => (
  <S.Wrapper active>
    <S.Content>
      <div>
        <S.Title>{title}</S.Title>
        <S.Author>{author}</S.Author>
      </div>

      <S.Count aria-label={`${count}+ Read Now`}>
        <StatsIcon />
        <strong>{count}+</strong>
        &nbsp;
        <span>Read Now</span>
      </S.Count>
    </S.Content>

    <S.Cover src={cover} alt={title} />

    <Triangle />
    <OutlinedCircle />
    <Rectangle />

    <S.WavesWrapper>
      <CircleWaves />
    </S.WavesWrapper>
  </S.Wrapper>
);

export default NewBookCard;
