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
