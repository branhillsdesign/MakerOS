import * as React from "react";

const SvgRugby = ({ title, titleId, ...props }) => (
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
      d="m3.739 12.5 7.76 7.761m1-16.522 7.762 7.761M9.5 14.5l5-5"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M21 7c0-1.225-.157-2.414-.453-3.547A14.023 14.023 0 0 0 17 3c-1.574 0-3.088.26-4.5.739A14.037 14.037 0 0 0 3.739 12.5 13.983 13.983 0 0 0 3 17c0 1.225.157 2.414.453 3.547C4.586 20.843 5.775 21 7 21c1.574 0 3.088-.26 4.5-.739a14.037 14.037 0 0 0 8.761-8.761c.48-1.412.739-2.926.739-4.5Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgRugby;
