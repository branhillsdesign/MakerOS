import * as React from "react";

const SvgChristmasTree = ({ title, titleId, ...props }) => (
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
      d="m12 3 .458-.388-.444-.523-.46.509L12 3ZM6.583 9l-.445-.402L5.233 9.6h1.35V9ZM10 9l.46.384A.6.6 0 0 0 10 8.4V9Zm-5 6-.46-.384-.821.984H5V15Zm4 0 .46.384A.6.6 0 0 0 9 14.4v.6Zm-5 6-.46-.384-.821.984H4V21ZM17.083 9v.6h1.295l-.837-.988-.458.388ZM14 9v-.6a.6.6 0 0 0-.46.984L14 9Zm5 6v.6h1.281l-.82-.984L19 15Zm-4 0v-.6a.6.6 0 0 0-.46.984L15 15Zm5 6v.6h1.281l-.82-.984L20 21ZM11.555 2.598l-5.417 6 .89.804 5.417-6-.89-.804ZM6.583 9.6H10V8.4H6.583v1.2Zm2.956-.984-5 6 .922.768 5-6-.922-.768ZM5 15.6h4v-1.2H5v1.2Zm3.54-.984-5 6 .92.768 5-6-.92-.768Zm3.002-11.228 5.083 6 .916-.776-5.083-6-.916.776ZM17.083 8.4H14v1.2h3.083V8.4Zm-3.544.984 5 6 .922-.768-5-6-.922.768ZM19 14.4h-4v1.2h4v-1.2Zm-4.46.984 5 6 .92-.768-5-6-.92.768ZM4 21.6h16v-1.2H4v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgChristmasTree;
