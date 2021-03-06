import * as React from "react";

const SvgHeartwithArrow = ({ title, titleId, ...props }) => (
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
      d="m4.221 12.93.753-.658-.753.658ZM12 20l-.655.755.655.57.655-.57L12 20Zm7.779-7.07-.753-.658.753.658ZM22 2l.949.316L23.58.42l-1.897.632L22 2Zm-1.5.5-.316-.949-1.535.512 1.144 1.144.707-.707Zm1 1-.707.707 1.144 1.144.512-1.535L21.5 3.5ZM3 20l-.707-.707L.586 21H3v-1Zm2-2v-1h-.414l-.293.293L5 18Zm1 1 .707.707.293-.293V19H6Zm-2 2H3v2.414l1.707-1.707L4 21Zm3.75-4.75.667-.744-.668.745ZM18.527 5.473l-.444.896.444-.896ZM4 9.412C4 7.546 5.548 6 7.5 6V4C4.481 4 2 6.404 2 9.412h2ZM7.5 6C9.452 6 11 7.546 11 9.412h2C13 6.404 10.519 4 7.5 4v2Zm-2.526 6.272C4.056 11.222 4 10.312 4 9.412H2c0 1.086.08 2.588 1.468 4.176l1.506-1.316ZM16.5 4C13.481 4 11 6.404 11 9.412h2C13 7.546 14.548 6 16.5 6V4Zm4.032 9.588C21.92 12 22 10.498 22 9.412h-2c0 .9-.056 1.81-.974 2.86l1.506 1.316Zm-1.506-1.316c-.524.6-2.406 2.314-4.234 3.94a409.172 409.172 0 0 1-3.429 3.017c-.006.005-.01.01-.014.012l-.003.003h-.001L12 20l.656.755.005-.004.014-.013.056-.048.213-.186a400.912 400.912 0 0 0 3.178-2.798c1.773-1.578 3.78-3.399 4.41-4.118l-1.506-1.316Zm2.658-11.22-1.5.5.632 1.897 1.5-.5-.632-1.898Zm-1.891 2.155.5.5 1.414-1.414-.5-.5-1.414 1.414Zm.5.5.5.5 1.414-1.414-.5-.5-1.414 1.414Zm2.156.11.5-1.5-1.898-.633-.5 1.5 1.898.632ZM3.293 19.292l-1 1 1.414 1.414 1-1-1.414-1.414ZM4 19H3v2h1v-2Zm-.293 1.707 2-2-1.414-1.414-2 2 1.414 1.414ZM21.293 1.293l-1 1 1.414 1.414 1-1-1.414-1.414Zm-16 16-2 2 1.414 1.414 2-2-1.414-1.414ZM5 19h1v-2H5v2Zm0-1v1h2v-1H5Zm.293.293-2 2 1.414 1.414 2-2-1.414-1.414ZM5 21v-1H3v1h2Zm2.042-5.457-1.75 1.75 1.415 1.414 1.75-1.75-1.415-1.414Zm-3.574-1.955c.543.62 2.09 2.04 3.614 3.407l1.335-1.489c-1.569-1.407-3.001-2.729-3.443-3.234l-1.506 1.316Zm3.614 3.407a366.404 366.404 0 0 0 4.256 3.755l.005.004h.001v.001L12 20l.655-.755-.001-.002-.005-.003-.018-.016-.072-.063a224.416 224.416 0 0 1-1.247-1.09 364.546 364.546 0 0 1-2.895-2.565l-1.335 1.49Zm13.21-14.702-2.471 2.472 1.414 1.414 2.472-2.472-1.414-1.414ZM22 9.412c0-2.124-1.241-3.95-3.028-4.836l-.888 1.792C19.23 6.937 20 8.093 20 9.412h2Zm-3.028-4.836A5.554 5.554 0 0 0 16.5 4v2c.573 0 1.11.133 1.584.368l.888-1.792Z"
      fill="#555770"
    />
  </svg>
);

export default SvgHeartwithArrow;
