import * as S from './styles';

export type ReviewCardProps = {
  cover: string;
  link: string;
};

const ReviewCard = ({ cover, link }: ReviewCardProps) => (
  <S.Wrapper href={link}>
    <S.Image src={cover} alt="review card" />
  </S.Wrapper>
);

export default ReviewCard;
