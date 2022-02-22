import * as React from "react";

const SvgAmericanFootball = ({ title, titleId, ...props }) => (
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
      d="M20.547 3.453C20.843 4.586 21 5.775 21 7c0 1.574-.26 3.088-.739 4.5a14.037 14.037 0 0 1-8.761 8.761c-1.412.48-2.926.739-4.5.739-1.225 0-2.414-.157-3.547-.453M20.547 3.453A14.023 14.023 0 0 0 17 3c-1.574 0-3.088.26-4.5.739A14.037 14.037 0 0 0 3.739 12.5 13.983 13.983 0 0 0 3 17c0 1.225.157 2.414.453 3.547M20.547 3.453C16.333 4.5 7.016 9.384 3.453 20.547M20.547 3.453C19 8.333 13.416 18.584 3.453 20.547"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgAmericanFootball;
