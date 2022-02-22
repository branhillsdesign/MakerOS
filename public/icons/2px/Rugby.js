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
      d="M3.739 12.5A13.983 13.983 0 0 0 3 17c0 1.225.157 2.414.453 3.547C4.586 20.843 5.775 21 7 21c1.574 0 3.088-.26 4.5-.739M3.739 12.5l7.761 7.761M3.739 12.5A14.037 14.037 0 0 1 12.5 3.739m-1 16.522a14.037 14.037 0 0 0 8.761-8.761M12.5 3.739A13.983 13.983 0 0 1 17 3c1.225 0 2.414.157 3.547.453C20.843 4.586 21 5.775 21 7c0 1.574-.26 3.088-.739 4.5M12.5 3.739l7.761 7.761M9.5 14.5l5-5"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgRugby;
