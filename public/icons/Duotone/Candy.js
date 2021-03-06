import * as React from "react";

const SvgCandy = ({ title, titleId, ...props }) => (
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
      d="M19 12c0 .283-.017.563-.05.838M12 19a6.98 6.98 0 0 0 5.036-2.139M12 5c-.283 0-.563.017-.838.05M5 12a6.98 6.98 0 0 1 2.139-5.037m0 0a8.5 8.5 0 0 0 9.898 9.898M7.138 6.963a6.977 6.977 0 0 1 4.023-1.913m0 0a6.5 6.5 0 0 0 7.788 7.788m0 0a6.977 6.977 0 0 1-1.914 4.024"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M16 6.255a6.968 6.968 0 0 0-4.837-1.205 6.977 6.977 0 0 0-4.024 1.913A6.98 6.98 0 0 0 5 12c0 1.487.464 2.866 1.255 4M16 6.255A7.04 7.04 0 0 1 17.746 8M16 6.255l1.742-4.576c.112-.295.522-.362.768-.165a3.38 3.38 0 0 0 2.591.729c.349-.049.705.308.657.656a3.38 3.38 0 0 0 .728 2.592c.197.246.13.655-.164.767L17.746 8m0 0a6.968 6.968 0 0 1 1.205 4.838 6.976 6.976 0 0 1-1.914 4.024A6.98 6.98 0 0 1 12 19a6.968 6.968 0 0 1-4-1.255m0 0A7.037 7.037 0 0 1 6.255 16M8 17.745 6.26 22.321c-.112.295-.522.362-.768.165a3.38 3.38 0 0 0-2.592-.729c-.348.049-.704-.308-.656-.656a3.38 3.38 0 0 0-.728-2.592c-.197-.246-.13-.655.164-.767L6.255 16"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCandy;
