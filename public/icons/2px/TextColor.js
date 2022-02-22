import * as React from "react";

const SvgTextColor = ({ title, titleId, ...props }) => (
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
    <path d="M3 20h18" stroke="#555770" strokeWidth={2} />
    <path
      d="m16.83 9.79.86.511a1 1 0 0 0-.35-1.37l-.51.86Zm-3.971 6.696-.51.86a1 1 0 0 0 1.37-.35l-.86-.51Zm-8.462-5.019-.86-.51a1 1 0 0 0 .35 1.37l.51-.86Zm.35-7.681 3.112 1.846 1.02-1.72-3.112-1.846-1.02 1.72Zm3.112 1.846 8.461 5.019 1.02-1.72-8.46-5.02-1.021 1.72Zm5.86 11.365L17.69 10.3l-1.72-1.02-3.972 6.695 1.72 1.02Zm-9.832-4.67 8.462 5.02 1.02-1.72-8.461-5.02-1.02 1.72Zm1.37-.35L9.23 5.282l-1.72-1.02-3.972 6.695 1.72 1.02ZM14.762 10.203l-8.13.809 5.63 3.343 2.5-4.152ZM20.583 13.822a1.75 1.75 0 1 1-3.502 0c0-.967 1.751-2.898 1.751-2.898s1.751 1.93 1.751 2.898Z"
      fill="#555770"
    />
  </svg>
);

export default SvgTextColor;
