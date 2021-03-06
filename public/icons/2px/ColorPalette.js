import * as React from "react";

const SvgColorPalette = ({ title, titleId, ...props }) => (
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
      d="M12.637 16.172c-.585.616-.837 1.292-.796 1.958.039.623.326 1.094.53 1.363.136.178.27.373.335.57.054.167.044.269-.026.38l.848.53-.848-.53c-.13.208-.248.323-.358.394-.107.069-.258.13-.505.153-.543.051-1.417-.087-2.898-.563-2.989-.96-6.395-4.614-5.863-9.693.519-4.96 5.1-8.485 10.953-7.598 2.867.434 4.673 1.904 5.733 3.578 1.084 1.71 1.387 3.63 1.211 4.888-.338 2.415-2.073 3.272-3.436 3.667l.229.789-.229-.789c-.457.133-1.032.131-1.773.118h-.04c-.457-.008-.995-.018-1.483.05-.502.07-1.117.242-1.584.735Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.975 11.016c0 .82-.666 1.484-1.488 1.484A1.486 1.486 0 0 1 5 11.016c0-.82.666-1.485 1.487-1.485.822 0 1.488.665 1.488 1.485Zm1.487-2.547a1.486 1.486 0 1 0 0-2.969c-.821 0-1.487.665-1.487 1.484 0 .82.666 1.485 1.487 1.485Zm6.563-1.485c0 .82-.666 1.485-1.487 1.485a1.486 1.486 0 0 1-1.487-1.485c0-.82.666-1.484 1.487-1.484.821 0 1.487.665 1.487 1.484Zm1.488 5.516c.821 0 1.487-.665 1.487-1.484 0-.82-.666-1.485-1.487-1.485a1.486 1.486 0 1 0 0 2.969Z"
      fill="#555770"
    />
  </svg>
);

export default SvgColorPalette;
