import * as S from './styles';

export const Circle = () => (
  <S.CircleWrapper
    width="116"
    height="116"
    viewBox="0 0 116 116"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="58" cy="58" r="58" fill="#D6D1B1" fillOpacity="0.09" />
  </S.CircleWrapper>
);

export const Triangle = () => (
  <S.TriangleWrapper
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
  </S.TriangleWrapper>
);

export const OutlinedCircle = () => (
  <S.OutlinedCircleWrapper
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" r="9" stroke="#4550A7" strokeWidth="2" />
  </S.OutlinedCircleWrapper>
);

export const Rectangle = () => (
  <S.RectangleWrapper
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
  </S.RectangleWrapper>
);