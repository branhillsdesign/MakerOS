import * as React from "react";

const SvgSimCard3 = ({ title, titleId, ...props }) => (
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
      d="M19 7h1a1 1 0 0 0-.293-.707L19 7Zm-4-4 .707-.707A1 1 0 0 0 15 2v1ZM6 22h12v-2H6v2ZM4 4v16h2V4H4Zm16 16V7h-2v13h2ZM15 2H6v2h9V2Zm4.707 4.293-4-4-1.414 1.414 4 4 1.414-1.414ZM18 22a2 2 0 0 0 2-2h-2v2ZM6 20H4a2 2 0 0 0 2 2v-2ZM6 4V2a2 2 0 0 0-2 2h2ZM9.5 16h-1v1h1v-1Zm1.029-3.072-.486-.874.486.874ZM12.11 7H9v2h3.111V7ZM8.5 14.677V16h2v-1.323h-2ZM9.5 17H15v-2H9.5v2Zm3.043-6.335-2.5 1.39.971 1.748 2.5-1.39-.971-1.748ZM10.5 14.677a1 1 0 0 1 .514-.874l-.97-1.749A3 3 0 0 0 8.5 14.677h2ZM13 9.889c0 .322-.175.62-.457.777l.971 1.748A2.889 2.889 0 0 0 15 9.889h-2ZM12.111 9c.491 0 .889.398.889.889h2A2.889 2.889 0 0 0 12.111 7v2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgSimCard3;
