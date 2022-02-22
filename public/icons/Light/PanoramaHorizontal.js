import * as React from "react";

const SvgPanoramaHorizontal = ({ title, titleId, ...props }) => (
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
      d="m3 5 .217-.56A.6.6 0 0 0 2.4 5H3Zm0 14h-.6a.6.6 0 0 0 .817.56L3 19Zm18 0-.218.56A.6.6 0 0 0 21.6 19H21Zm0-14h.6a.6.6 0 0 0-.818-.56L21 5Zm-1.389.54-.217-.56.217.56Zm-15.222 0 .217-.56-.217.56Zm0 12.92.217.56-.217-.56Zm15.222 0-.217.56.217-.56ZM2.4 5v14h1.2V5H2.4Zm19.2 14V5h-1.2v14h1.2Zm-.818-14.56-1.388.54.435 1.12 1.389-.54-.436-1.12Zm-16.176.54-1.389-.54-.434 1.12 1.388.54.435-1.12ZM3.217 19.56l1.39-.54-.436-1.12-1.388.54.434 1.12Zm16.177-.54 1.389.54.434-1.12-1.388-.54-.435 1.12Zm-14.788 0a20.4 20.4 0 0 1 14.788 0l.435-1.12a21.6 21.6 0 0 0-15.658 0l.435 1.12ZM19.394 4.98a20.4 20.4 0 0 1-14.788 0L4.171 6.1a21.6 21.6 0 0 0 15.658 0l-.435-1.12Z"
      fill="#555770"
    />
  </svg>
);

export default SvgPanoramaHorizontal;
