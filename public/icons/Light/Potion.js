import * as React from "react";

const SvgPotion = ({ title, titleId, ...props }) => (
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
      d="m10 10.341.2.566.4-.141v-.425H10ZM10 3.5h.6v-.249l-.176-.175L10 3.5ZM8.5 2v-.6a.6.6 0 0 0-.424 1.024L8.5 2Zm5.5 8.341h-.6v.425l.4.141.2-.566ZM14 3.5l-.424-.424-.176.175V3.5h.6ZM15.5 2l.424.424A.6.6 0 0 0 15.5 1.4V2Zm1.9 14a5.4 5.4 0 0 1-5.4 5.4v1.2a6.6 6.6 0 0 0 6.6-6.6h-1.2ZM12 21.4A5.4 5.4 0 0 1 6.6 16H5.4a6.6 6.6 0 0 0 6.6 6.6v-1.2ZM6.6 16a5.402 5.402 0 0 1 3.6-5.093l-.4-1.131A6.603 6.603 0 0 0 5.4 16h1.2Zm4-5.659V3.5H9.4v6.841h1.2Zm-.176-7.265-1.5-1.5-.848.848 1.5 1.5.848-.848Zm3.376 7.831A5.403 5.403 0 0 1 17.4 16h1.2a6.602 6.602 0 0 0-4.4-6.224l-.4 1.131Zm.8-.566V3.5h-1.2v6.841h1.2Zm-.176-6.417 1.5-1.5-.848-.848-1.5 1.5.848.848ZM15.5 1.4h-7v1.2h7V1.4Z"
      fill="#555770"
    />
    <path
      d="M15.347 16.6a3.401 3.401 0 0 1-6.694 0H15.348Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgPotion;
