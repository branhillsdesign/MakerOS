import * as React from "react";

const SvgAxe = ({ title, titleId, ...props }) => (
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
      d="m6.32 15.671.707.707-.708-.707Zm10.92-8.863-.708.706.708-.706ZM9.502 9.713l-.708-.706.708.706Zm3.592 1.248-.708.707.708-.707Zm8.638-3.807.97-.242-.284-1.14-1.08.463.394.919ZM13.44 15.46l-.92-.393-.46 1.079 1.137.285.243-.97Zm-5.528-2.769.98.196-.98-.196Zm-2.3 2.273L.293 20.294l1.416 1.412 5.32-5.328-1.416-1.413Zm9.885-12.671-1.382 1.384 1.415 1.413 1.382-1.385-1.415-1.412ZM14.114 5.09l2.418 2.423 1.416-1.413-2.419-2.423-1.415 1.413Zm0-1.413L9.967 7.832l1.416 1.413 4.146-4.154-1.415-1.413ZM9.967 7.832 8.794 9.007l1.416 1.413 1.173-1.175-1.416-1.413Zm3.835 2.423-2.42-2.423-1.415 1.413 2.419 2.423 1.416-1.413Zm2.73-2.74c.467.466 1.164.928 2.132 1.1.965.17 2.114.037 3.463-.542l-.79-1.838c-1.07.46-1.821.499-2.325.41-.5-.088-.84-.319-1.064-.544l-1.416 1.413Zm-4.146 4.153c.225.225.455.565.544 1.068.089.505.049 1.26-.41 2.332l1.839.787c.577-1.35.71-2.5.54-3.466a3.956 3.956 0 0 0-1.097-2.134l-1.416 1.413Zm8.376-4.272c.617 2.474-.017 4.523-1.293 5.801-1.275 1.278-3.319 1.913-5.787 1.295l-.486 1.94c3.06.766 5.854.016 7.689-1.822 1.834-1.837 2.582-4.634 1.817-7.698l-1.94.484Zm-13.832 5.1a4.833 4.833 0 0 1-1.318 2.469l1.415 1.413a6.833 6.833 0 0 0 1.864-3.49l-1.96-.392Zm1.961.392a4.833 4.833 0 0 1 1.319-2.468L8.794 9.007a6.833 6.833 0 0 0-1.864 3.49l1.961.391Z"
      fill="#555770"
    />
  </svg>
);

export default SvgAxe;
