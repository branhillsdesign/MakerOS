import * as React from "react";

const SvgBottleBeer = ({ title, titleId, ...props }) => (
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
      d="M12 18.5H7.5V14l.062-.042a8 8 0 0 1 8.876 0L16.5 14v4.5H12Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="m9.874 8.227-1.87 3.367a4 4 0 0 0-.504 1.943V21a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7.463a4 4 0 0 0-.503-1.943l-1.871-3.367A1 1 0 0 1 14 7.74V3.677c0-.113.045-.222.126-.303.229-.229.31-.569.207-.876l-.149-.446a.808.808 0 0 0-.766-.552h-2.836a.808.808 0 0 0-.766.553l-.149.445a.857.857 0 0 0 .207.876c.08.08.126.19.126.303v4.064a1 1 0 0 1-.126.486Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBottleBeer;
