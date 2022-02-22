import * as React from "react";

const SvgPetFriendly = ({ title, titleId, ...props }) => (
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
      d="m10.497 11.68.006-.007.006-.006c.368-.41.899-.667 1.491-.667.592 0 1.123.256 1.491.667l.006.006.006.007 3.963 4.276a2.5 2.5 0 0 1-3.24 3.696l-.511.859.51-.86a2.478 2.478 0 0 1-.142-.09l-.03-.021-.031-.019A3.986 3.986 0 0 0 12 18.973c-.725 0-1.439.211-2.016.545l-.035.02-.032.022a2.5 2.5 0 0 1-3.383-3.605l3.963-4.275Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M10.5 5.75a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Zm4.75 1.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM6.5 10.75a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Zm12.75 1.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgPetFriendly;
