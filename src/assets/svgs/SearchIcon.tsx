type SearchIconProps = {
  className?: string;
  tabIndex?: string;
  onClick?: () => void;
  onKeyUp?: () => void;
};

export default function SearchIcon(props: SearchIconProps) {
  return (
    // @ts-ignore
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 21 21"
      fill="none"
      {...props}
    >
      <path
        d="M17.6153 17.9231L14.0519 14.3596M14.0519 14.3596C14.6614 13.75 15.1449 13.0264 15.4748 12.23C15.8047 11.4336 15.9745 10.58 15.9745 9.71796C15.9745 8.85593 15.8047 8.00233 15.4748 7.20592C15.1449 6.40951 14.6614 5.68587 14.0519 5.07632C13.4423 4.46677 12.7187 3.98325 11.9223 3.65336C11.1258 3.32348 10.2723 3.15369 9.41022 3.15369C8.54819 3.15369 7.6946 3.32348 6.89818 3.65336C6.10177 3.98325 5.37813 4.46677 4.76858 5.07632C3.53754 6.30736 2.84595 7.97701 2.84595 9.71796C2.84595 11.4589 3.53754 13.1286 4.76858 14.3596C5.99962 15.5906 7.66927 16.2822 9.41022 16.2822C11.1512 16.2822 12.8208 15.5906 14.0519 14.3596Z"
        stroke="currentColor"
        strokeWidth="0.820513"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
