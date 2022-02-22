import * as React from "react";

const SvgRestaurant = ({ title, titleId, ...props }) => (
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
      d="M20 3h1V2h-1v1Zm-3 10h-1v1h1v-1ZM3 2v8h2V2H3Zm1 9h4V9H4v2Zm4 0h4V9H8v2Zm5-1V2h-2v8h2ZM7 2v8h2V2H7Zm-4 8c0 .89.468 1.697 1.36 2.232C5.205 12.74 6.413 13 8 13v-2c-1.413 0-2.205-.24-2.61-.482C5.032 10.303 5 10.11 5 10H3Zm5 3c1.587 0 2.795-.26 3.64-.768C12.531 11.697 13 10.89 13 10h-2c0 .11-.032.303-.39.518C10.206 10.76 9.413 11 8 11v2Zm-1-1v10h2V12H7Zm14 10v-9h-2v9h2Zm0-9V3h-2v10h2Zm-3 0V6h-2v7h2Zm2-1h-1.5v2H20v-2Zm-1.5 0H17v2h1.5v-2ZM18 6c0-.152.065-.47.258-.834.188-.353.456-.674.785-.887L17.957 2.6a4.383 4.383 0 0 0-1.465 1.63C16.185 4.804 16 5.444 16 6h2Zm1.043-1.72c.264-.171.577-.28.957-.28V2a3.72 3.72 0 0 0-2.043.6l1.086 1.68ZM19.5 13V3.44h-2V13h2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgRestaurant;
