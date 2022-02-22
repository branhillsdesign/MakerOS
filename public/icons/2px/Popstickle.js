import * as React from "react";

const SvgPopstickle = ({ title, titleId, ...props }) => (
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
      d="m7.732 3.175-.512-.859.512.859Zm8.536 0 .512-.859-.512.859ZM16 4.46v10.582h2V4.46h-2ZM8 15.042V4.46H6v10.582h2Zm3.5-.006H8v2h3.5v-2Zm-1 1v5.467h2v-5.467h-2Zm5.5-1h-3.5v2H16v-2Zm-3.5 0h-1v2h1v-2Zm1 6.467v-5.467h-2v5.467h2ZM12 23c.823 0 1.5-.665 1.5-1.497h-2c0-.284.23-.503.5-.503v2Zm-1.5-1.497c0 .832.677 1.497 1.5 1.497v-2c.27 0 .5.22.5.503h-2ZM8.244 4.033a7.338 7.338 0 0 1 7.512 0l1.024-1.717a9.338 9.338 0 0 0-9.56 0l1.024 1.718ZM6 15.044c0 1.106.901 1.993 2 1.993v-2h-.002v.002L8 15.04v.001H6Zm10 0v-.002l.001-.003.001-.002H16v2c1.099 0 2-.887 2-1.994h-2ZM18 4.46c0-.88-.465-1.694-1.22-2.144l-1.024 1.718A.497.497 0 0 1 16 4.46h2Zm-10 0c0-.172.091-.335.244-.426L7.22 2.316A2.497 2.497 0 0 0 6 4.46h2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgPopstickle;
