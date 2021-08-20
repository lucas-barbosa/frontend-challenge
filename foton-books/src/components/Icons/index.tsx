type IconProps = {
  title?: string;
};

export const HomeIcon = (props: IconProps) => (
  <svg
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 6.22222L9 0L17 6.22222V16C17 16.9818 16.2041 17.7778 15.2222 17.7778H2.77778C1.79594 17.7778 1 16.9818 1 16V6.22222Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.33331 17.7778V8.88892H11.6666V17.7778"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LibraryIcon = (props: IconProps) => (
  <svg
    width="17"
    height="19"
    viewBox="0 0 17 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 15.75C1 14.5074 2.00736 13.5 3.25 13.5H15.4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.25 0H15.4V18H3.25C2.00736 18 1 16.9926 1 15.75V2.25C1 1.00736 2.00736 0 3.25 0Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ProfileIcon = (props: IconProps) => (
  <svg
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17 18V16C17 13.7909 15.2091 12 13 12H5C2.79086 12 1 13.7909 1 16V18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="9"
      cy="4"
      r="4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SearchIcon = (props: IconProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.6667 6.66668C14.6667 9.6122 12.2789 12 9.33333 12C6.38781 12 4 9.6122 4 6.66668C4 3.72116 6.38781 1.33334 9.33333 1.33334C12.2789 1.33334 14.6667 3.72116 14.6667 6.66668ZM5.33333 6.66668C5.33333 8.87582 7.12419 10.6667 9.33333 10.6667C11.5425 10.6667 13.3333 8.87582 13.3333 6.66668C13.3333 4.45754 11.5425 2.66668 9.33333 2.66668C7.12419 2.66668 5.33333 4.45754 5.33333 6.66668Z"
      fill="#DCD8D8"
    />
    <path
      d="M3.86191 11.1953L1.52858 13.5286C1.26823 13.7889 1.26823 14.2111 1.52858 14.4714C1.78892 14.7318 2.21103 14.7318 2.47138 14.4714L4.80472 12.1381C5.06507 11.8777 5.06507 11.4556 4.80472 11.1953C4.54437 10.9349 4.12226 10.9349 3.86191 11.1953Z"
      fill="#F0F0F0"
    />
    <circle cx="9.33335" cy="6.66667" r="0.666667" fill="#F0F0F0" />
  </svg>
);

export const StatsIcon = (props: IconProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.66667 11.3333V3.66665C2.66667 3.11436 3.11438 2.66665 3.66667 2.66665H12.3333C12.8856 2.66665 13.3333 3.11436 13.3333 3.66665V12.3333C13.3333 12.8856 12.8856 13.3333 12.3333 13.3333H3.33333C2.96514 13.3333 2.66667 13.6318 2.66667 14C2.66667 14.3682 2.96514 14.6666 3.33333 14.6666H12.3333C13.622 14.6666 14.6667 13.622 14.6667 12.3333V3.66665C14.6667 2.37798 13.622 1.33331 12.3333 1.33331H3.66667C2.378 1.33331 1.33333 2.37798 1.33333 3.66665V11.3333C1.33333 11.7015 1.63181 12 2 12C2.36819 12 2.66667 11.7015 2.66667 11.3333Z"
      fill="white"
      fillOpacity="0.653491"
    />
    <path
      d="M4.33333 8.66667V10.6667C4.33333 11.0349 4.63181 11.3333 5 11.3333C5.36819 11.3333 5.66667 11.0349 5.66667 10.6667V8.66667C5.66667 8.29848 5.36819 8 5 8C4.63181 8 4.33333 8.29848 4.33333 8.66667Z"
      fill="#C8C8C8"
    />
    <path
      d="M10.3333 7.33335V10.6667C10.3333 11.0349 10.6318 11.3334 11 11.3334C11.3682 11.3334 11.6667 11.0349 11.6667 10.6667V7.33335C11.6667 6.96516 11.3682 6.66669 11 6.66669C10.6318 6.66669 10.3333 6.96516 10.3333 7.33335Z"
      fill="#C8C8C8"
    />
    <path
      d="M7.33333 5.33335V10.6667C7.33333 11.0349 7.63181 11.3334 8 11.3334C8.36819 11.3334 8.66667 11.0349 8.66667 10.6667V5.33335C8.66667 4.96516 8.36819 4.66669 8 4.66669C7.63181 4.66669 7.33333 4.96516 7.33333 5.33335Z"
      fill="#C8C8C8"
    />
    <circle cx="11" cy="5.33335" r="0.666667" fill="#C8C8C8" />
  </svg>
);

export const CircleWaves = (props: IconProps) => (
  <svg
    width="102"
    height="114"
    viewBox="0 0 102 114"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="38.5" cy="63.5" r="63.5" fill="url(#pattern0)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="0.319742"
        height="0.056425"
      >
        <use xlinkHref="#image0" transform="scale(0.00940417)" />
      </pattern>
      <image
        id="image0"
        width="34"
        height="6"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAGCAYAAACmekziAAAABGdBTUEAALGOfPtRkwAAAY5JREFUKBW9Uj1IQlEUPuf6pCQofI9+CLMhaynInwyKfrYgGgxRCyEICpyaImh0aomaJKjFagjhUVRDRJNNDv61tLokgRROiZV6T/cFwitsKjpwOYfvnPN9H/deA/xjdM4stTS19W81dw+VN0OBfDwep7o81gt9DofDTByux35bK3afh4BHAPGMgKYByIKElwjswmTCmy9G2p1+G6fqOgHaEPGItbLzp7j68pMJ2+xaU7Hw6AGiVTFTIYQ7JMhKzJgtpGI5wUFml98KvBZBogGGUug5q95qfBrOeHVeaGn77k8jst03LtxuANIkAu4hwwyv8RVEmALAK4Z40ovKdTp9UNFIlBH/KK/VloFgQcxkBLSPxCqCw05IDrHjEMJmIZISvWHGcLerj23fq+q7tv89rBNBM8oOb4IIOhjAjslkiOYTark+aBnzy6VXHgDgQSAcFKJR0ZsTDysJc4dkMB4Xk7GH+rw+a+Sl0ptLkiBXSJ7m9L2GteL0ebU/0bCpA2X3Yo/s9Ia129PBf1Z+AO3ViTcdfWOLAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
);

export const BookIcon = () => (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Book Icon"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 0H4.8C6.56731 0 8 1.59188 8 3.55556V16C8 14.5272 6.92548 13.3333 5.6 13.3333H0V0Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 0H11.2C9.43269 0 8 1.59188 8 3.55556V16C8 14.5272 9.07452 13.3333 10.4 13.3333H16V0Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HeadphoneIcon = () => (
  <svg
    width="18"
    height="16"
    viewBox="0 0 18 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Headphone Icon"
  >
    <path
      d="M0 13.3333V8C6.58375e-08 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8V13.3333"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 10.7778H16C16 10.2255 15.5523 9.77783 15 9.77783V10.7778ZM1 10.7778V9.77783C0.447715 9.77783 0 10.2255 0 10.7778H1ZM13.5556 11.5556C13.5556 11.6783 13.4561 11.7778 13.3333 11.7778V9.77783C12.3515 9.77783 11.5556 10.5738 11.5556 11.5556H13.5556ZM13.5556 14.2223V11.5556H11.5556V14.2223H13.5556ZM13.3333 14.0001C13.4561 14.0001 13.5556 14.0995 13.5556 14.2223H11.5556C11.5556 15.2041 12.3515 16.0001 13.3333 16.0001V14.0001ZM14.2222 14.0001H13.3333V16.0001H14.2222V14.0001ZM14 14.2223C14 14.0995 14.0995 14.0001 14.2222 14.0001V16.0001C15.2041 16.0001 16 15.2041 16 14.2223H14ZM14 10.7778V14.2223H16V10.7778H14ZM13.3333 11.7778H15V9.77783H13.3333V11.7778ZM13.3333 7.77783C11.2469 7.77783 9.55556 9.4692 9.55556 11.5556H11.5556C11.5556 10.5738 12.3515 9.77783 13.3333 9.77783V7.77783ZM16 7.77783H13.3333V9.77783H16V7.77783ZM18 9.77783C18 8.67326 17.1046 7.77783 16 7.77783V9.77783H18ZM18 14.2223V9.77783H16V14.2223H18ZM14.2222 18.0001C16.3086 18.0001 18 16.3087 18 14.2223H16C16 15.2041 15.2041 16.0001 14.2222 16.0001V18.0001ZM13.3333 18.0001H14.2222V16.0001H13.3333V18.0001ZM9.55556 14.2223C9.55556 16.3087 11.2469 18.0001 13.3333 18.0001V16.0001C12.3515 16.0001 11.5556 15.2041 11.5556 14.2223H9.55556ZM9.55556 11.5556V14.2223H11.5556V11.5556H9.55556ZM0 7.77783C-1.10457 7.77783 -2 8.67326 -2 9.77783H0V7.77783ZM2.66667 7.77783H0V9.77783H2.66667V7.77783ZM6.44444 11.5556C6.44444 9.4692 4.75308 7.77783 2.66667 7.77783V9.77783C3.64851 9.77783 4.44444 10.5738 4.44444 11.5556H6.44444ZM6.44444 14.2223V11.5556H4.44444V14.2223H6.44444ZM2.66667 18.0001C4.75308 18.0001 6.44444 16.3087 6.44444 14.2223H4.44444C4.44444 15.2041 3.64851 16.0001 2.66667 16.0001V18.0001ZM1.77778 18.0001H2.66667V16.0001H1.77778V18.0001ZM-2 14.2223C-2 16.3087 -0.308631 18.0001 1.77778 18.0001V16.0001C0.795938 16.0001 0 15.2041 0 14.2223H-2ZM-2 9.77783V14.2223H0V9.77783H-2ZM2 14.2223V10.7778H0V14.2223H2ZM1.77778 14.0001C1.90051 14.0001 2 14.0995 2 14.2223H0C0 15.2041 0.795938 16.0001 1.77778 16.0001V14.0001ZM2.66667 14.0001H1.77778V16.0001H2.66667V14.0001ZM2.44444 14.2223C2.44444 14.0995 2.54394 14.0001 2.66667 14.0001V16.0001C3.64851 16.0001 4.44444 15.2041 4.44444 14.2223H2.44444ZM2.44444 11.5556V14.2223H4.44444V11.5556H2.44444ZM2.66667 11.7778C2.54394 11.7778 2.44444 11.6783 2.44444 11.5556H4.44444C4.44444 10.5738 3.64851 9.77783 2.66667 9.77783V11.7778ZM1 11.7778H2.66667V9.77783H1V11.7778Z"
      fill="currentColor"
    />
  </svg>
);

export const ShareIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Share Icon"
  >
    <path
      d="M0 8V14.4C0 15.2837 0.716344 16 1.6 16H11.2C12.0837 16 12.8 15.2837 12.8 14.4V8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.60001 3.2L6.40001 0L3.20001 3.2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.40002 0V10.4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BackIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 8H1"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 15L1 8L8 1"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
