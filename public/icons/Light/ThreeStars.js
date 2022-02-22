import * as React from "react";

const SvgThreeStars = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M19.54 10.585 20 9.517l.46 1.068a.9.9 0 0 0 .743.54l1.159.108-.874.767a.9.9 0 0 0-.284.874l.255 1.135-1-.594a.9.9 0 0 0-.918 0l-1 .594.255-1.135a.9.9 0 0 0-.284-.874l-.873-.767 1.158-.108a.9.9 0 0 0 .743-.54ZM11.54 10.585 12 9.517l.46 1.068a.9.9 0 0 0 .743.54l1.159.108-.874.767a.9.9 0 0 0-.284.874l.255 1.135-1-.594a.9.9 0 0 0-.918 0l-1 .594.255-1.135a.9.9 0 0 0-.284-.874l-.874-.767 1.159-.108a.9.9 0 0 0 .743-.54ZM3.54 10.585 4 9.517l.46 1.068a.9.9 0 0 0 .743.54l1.159.108-.874.767a.9.9 0 0 0-.284.874l.255 1.135-1-.594a.9.9 0 0 0-.918 0l-1 .594.255-1.135A.9.9 0 0 0 2.512 12l-.874-.767 1.159-.108a.9.9 0 0 0 .743-.54Z"
      stroke="#555770"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgThreeStars;
