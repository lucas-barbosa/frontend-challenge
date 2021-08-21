import { CircleWaves, StatsIcon } from 'components/Icons';
import { OutlinedCircle, Rectangle, Triangle } from 'components/Symbols';
import Link from 'next/link';

import * as S from './styles';

export type NewBookCardProps = {
  id: string;
  title: string;
  author?: string;
  count?: number;
  cover?: string;
  active?: boolean;
};

const NewBookCard = ({
  id,
  title,
  count = 120,
  author = 'unknown author',
  cover = '/images/generic-cover.png',
  active = false
}: NewBookCardProps) => (
  <Link href={`/book/${id}`} passHref>
    <S.Wrapper active={active} title={`${title} by ${author}`}>
      <S.Content>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Author>{author || 'unknown author'}</S.Author>
        </S.Info>

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
  </Link>
);

export default NewBookCard;
