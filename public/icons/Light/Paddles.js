import * as React from "react";

const SvgPaddles = ({ title, titleId, ...props }) => (
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
      d="m9.083 6.833.425-.424-.425.424Zm-4.25 4.25-.424.425.424-.425ZM2 8.25l-.424-.424-.425.424.425.424L2 8.25ZM6.25 4l.424-.424-.424-.425-.424.425L6.25 4Zm8.667 2.833.424.425-.424-.425Zm4.25 4.25-.425-.424.425.424ZM22 8.25l.424.424.425-.424-.425-.424L22 8.25ZM17.75 4l.424-.424-.424-.425-.424.425.424.424ZM8.66 7.258c.938.939.938 2.462 0 3.401l.848.849a3.605 3.605 0 0 0 0-5.099l-.849.849Zm0 3.401c-.94.94-2.463.94-3.402 0l-.849.849a3.605 3.605 0 0 0 5.099 0l-.849-.849Zm-3.402 0L2.424 7.826l-.848.848 2.833 2.834.849-.849ZM2.424 8.674l4.25-4.25-.848-.848-4.25 4.25.848.848Zm3.402-4.25 2.833 2.834.849-.849-2.834-2.833-.848.848Zm2.833 7.084 8.5 8.5.849-.849-8.5-8.5-.849.849Zm8.5 7.651-1.417 1.417.849.848 1.417-1.416-.849-.849Zm.849.849 1.416-1.417-.848-.849-1.417 1.417.849.849ZM14.492 6.409a3.605 3.605 0 0 0 0 5.099l.849-.849a2.405 2.405 0 0 1 0-3.401l-.849-.849Zm0 5.099a3.605 3.605 0 0 0 5.099 0l-.849-.849c-.939.94-2.462.94-3.401 0l-.849.849Zm5.099 0 2.833-2.834-.848-.848-2.834 2.833.849.849Zm2.833-3.682-4.25-4.25-.848.848 4.25 4.25.848-.848Zm-5.098-4.25-2.834 2.833.849.849 2.833-2.834-.848-.848Zm-2.834 7.083-8.5 8.5.849.849 8.5-8.5-.849-.849Zm-8.5 9.349 1.417 1.416.849-.848-1.417-1.417-.849.849Zm.849-.849-1.417-1.417-.848.849 1.416 1.417.849-.849Z"
      fill="#555770"
    />
  </svg>
);

export default SvgPaddles;
