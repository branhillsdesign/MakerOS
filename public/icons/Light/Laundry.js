import * as React from "react";

const SvgLaundry = ({ title, titleId, ...props }) => (
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
      d="m14 10.535.3-.52-.3.52ZM8.535 16l-.52.3.52-.3ZM4.4 4v16h1.2V4H4.4ZM6 21.6h12v-1.2H6v1.2ZM19.6 20V4h-1.2v16h1.2ZM18 2.4H6v1.2h12V2.4ZM19.6 4A1.6 1.6 0 0 0 18 2.4v1.2c.22 0 .4.18.4.4h1.2ZM18 21.6a1.6 1.6 0 0 0 1.6-1.6h-1.2a.4.4 0 0 1-.4.4v1.2ZM4.4 20A1.6 1.6 0 0 0 6 21.6v-1.2a.4.4 0 0 1-.4-.4H4.4ZM5.6 4c0-.22.18-.4.4-.4V2.4A1.6 1.6 0 0 0 4.4 4h1.2Zm9.8 10a3.4 3.4 0 0 1-3.4 3.4v1.2a4.6 4.6 0 0 0 4.6-4.6h-1.2Zm-6.8 0a3.4 3.4 0 0 1 3.4-3.4V9.4A4.6 4.6 0 0 0 7.4 14h1.2Zm3.4-3.4c.62 0 1.2.166 1.7.455l.6-1.04A4.581 4.581 0 0 0 12 9.4v1.2Zm1.7.455A3.398 3.398 0 0 1 15.4 14h1.2c0-1.703-.926-3.19-2.3-3.984l-.6 1.039ZM12 17.4a3.398 3.398 0 0 1-2.946-1.7l-1.038.6A4.598 4.598 0 0 0 12 18.6v-1.2Zm-2.946-1.7A3.382 3.382 0 0 1 8.6 14H7.4c0 .837.224 1.623.616 2.3l1.038-.6Zm4.522-5.59L8.11 15.577l.848.848 5.465-5.465-.848-.848Zm-2-.534-4 4 .848.848 4-4-.848-.848ZM9 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      fill="#555770"
    />
  </svg>
);

export default SvgLaundry;
