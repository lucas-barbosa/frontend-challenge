import { CircleWaves, StatsIcon } from 'components/Icons';
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

    <S.Triangle
      width="34"
      height="30"
      viewBox="0 0 34 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.81349 0.795898L0.5 29.0133L33.3682 7.67883L3.81349 0.795898Z"
        fill="#FCBC48"
      />
    </S.Triangle>

    <S.Circle
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="9" stroke="#4550A7" strokeWidth="2" />
    </S.Circle>

    <S.Retangle
      width="46"
      height="16"
      viewBox="0 0 46 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.16704"
        y="0.495239"
        width="46"
        height="4"
        transform="rotate(14 1.16704 0.495239)"
        fill="#EC6374"
      />
    </S.Retangle>

    <S.WavesWrapper>
      <CircleWaves />
    </S.WavesWrapper>
  </S.Wrapper>
);

export default NewBookCard;
