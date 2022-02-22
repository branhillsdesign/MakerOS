import * as React from "react";

const SvgBow = ({ title, titleId, ...props }) => (
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
      d="m15 7.482 3.661-2.197a2 2 0 0 1 2.443.3l.31.31A2 2 0 0 1 22 7.31v.313c0 .236-.055.468-.16.68-.214.427-.214.93 0 1.358.105.21.16.443.16.68v.312a2 2 0 0 1-.586 1.414l-.31.31a2 2 0 0 1-2.443.301l-3.854-2.338M15 7.482v2a2 2 0 0 1-1 1.732m1-3.732a1.99 1.99 0 0 0-.323-1.09M9 7.481v2a2 2 0 0 0 1 1.732M9 7.482 5.339 5.285a2 2 0 0 0-2.443.3l-.31.31A2 2 0 0 0 2 7.31v.313c0 .236.055.468.16.68.214.427.214.93 0 1.358-.105.21-.16.443-.16.68v.312a2 2 0 0 0 .586 1.414l.31.31a2 2 0 0 0 2.443.301l3.854-2.338M9 7.482c0-.403.119-.777.323-1.09"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M10 11.214c.294.17.636.268 1 .268h2a1.99 1.99 0 0 0 1-.268m-4 0a2 2 0 0 1-1-1.732v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-1 1.732m-4 0L6 20m8-8.786L18 20"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBow;
