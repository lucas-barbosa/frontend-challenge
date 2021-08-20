import * as S from './styles';

export const Circle = (props: React.ComponentPropsWithoutRef<'svg'>) => (
  <S.CircleWrapper
    width="116"
    height="116"
    viewBox="0 0 116 116"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="58" cy="58" r="58" fill="currentColor" />
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

export const OutlinedCircle = (
  props: React.ComponentPropsWithoutRef<'svg'>
) => (
  <S.OutlinedCircleWrapper
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
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

export const Waves = (props: React.ComponentPropsWithoutRef<'svg'>) => (
  <S.WavesWrapper
    width="69"
    height="69"
    viewBox="0 0 69 69"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="34.5" cy="34.5" r="34.5" fill="url(#pattern0)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="0.58851"
        height="0.103855"
      >
        <use xlinkHref="#image0" transform="scale(0.0173091)" />
      </pattern>
      <image
        id="image0"
        width="34"
        height="6"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAGCAYAAACmekziAAAABGdBTUEAALGOfPtRkwAAAY5JREFUKBW9Uj1IQlEUPuf6pCQofI9+CLMhaynInwyKfrYgGgxRCyEICpyaImh0aomaJKjFagjhUVRDRJNNDv61tLokgRROiZV6T/cFwitsKjpwOYfvnPN9H/deA/xjdM4stTS19W81dw+VN0OBfDwep7o81gt9DofDTByux35bK3afh4BHAPGMgKYByIKElwjswmTCmy9G2p1+G6fqOgHaEPGItbLzp7j68pMJ2+xaU7Hw6AGiVTFTIYQ7JMhKzJgtpGI5wUFml98KvBZBogGGUug5q95qfBrOeHVeaGn77k8jst03LtxuANIkAu4hwwyv8RVEmALAK4Z40ovKdTp9UNFIlBH/KK/VloFgQcxkBLSPxCqCw05IDrHjEMJmIZISvWHGcLerj23fq+q7tv89rBNBM8oOb4IIOhjAjslkiOYTark+aBnzy6VXHgDgQSAcFKJR0ZsTDysJc4dkMB4Xk7GH+rw+a+Sl0ptLkiBXSJ7m9L2GteL0ebU/0bCpA2X3Yo/s9Ia129PBf1Z+AO3ViTcdfWOLAAAAAElFTkSuQmCC"
      />
    </defs>
  </S.WavesWrapper>
);

export const Oval = () => (
  <S.OvalWrapper
    width="202"
    height="73"
    viewBox="0 0 202 73"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_f)">
      <ellipse cx="101" cy="36.5" rx="73" ry="8.5" fill="#D8D8D8" />
    </g>
    <defs>
      <filter
        id="filter0_f"
        x="0.817183"
        y="0.817183"
        width="200.366"
        height="71.3656"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="13.5914"
          result="effect1_foregroundBlur"
        />
      </filter>
    </defs>
  </S.OvalWrapper>
);
