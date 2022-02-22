import * as React from "react";

const SvgSalt = ({ title, titleId, ...props }) => (
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
      d="m18.837 19.849.997-.076-.997.076ZM5.664 9.669l.896-.445-.896.445ZM18.1 5.524H5.9v2h12.2v-2Zm-13.095.554-.236.474 1.79.89.236-.473-1.79-.89Zm-.236 4.037.236.473 1.79-.89-.235-.474-1.79.89Zm12.436-3.146.235.474 1.791-.89-.236-.474-1.79.89Zm.235 2.255-.235.474 1.79.89.236-.473-1.79-.891Zm.66-.081H5.9v2h12.2v-2Zm-13.197.924-.737 9.706 1.994.151.737-9.705-1.994-.152ZM7.158 23h9.684v-2H7.158v2Zm12.676-3.227-.737-9.706-1.994.152.737 9.705 1.994-.151ZM14.5 12h-3v2h3v-2Zm-3 5h1v-2h-1v2Zm1 1h-3v2h3v-2ZM6.894 6.634c.11-.987.7-1.92 1.68-2.608L7.426 2.39c-1.36.953-2.336 2.366-2.52 4.025l1.988.22Zm1.68-2.608c.374-.262.8-.484 1.268-.654l-.684-1.88c-.626.228-1.21.53-1.732.897l1.148 1.637Zm1.268-.654A6.32 6.32 0 0 1 12 3V1a8.319 8.319 0 0 0-2.842.492l.684 1.88Zm-2.243.752c.338.148.958.333 1.58.178a1.67 1.67 0 0 0 .973-.657c.255-.36.348-.787.348-1.213h-2c0 .146-.032.13.02.058a.358.358 0 0 1 .097-.093.271.271 0 0 1 .078-.036c.012-.003.01 0-.008 0a.482.482 0 0 1-.079-.008.916.916 0 0 1-.207-.062l-.802 1.833ZM12 3a6.32 6.32 0 0 1 2.158.372l.684-1.88A8.319 8.319 0 0 0 12 1v2Zm2.158.372c.468.17.894.392 1.268.654l1.148-1.637a7.455 7.455 0 0 0-1.732-.897l-.684 1.88Zm1.268.654c.98.687 1.57 1.621 1.68 2.608l1.988-.22c-.184-1.659-1.16-3.072-2.52-4.025l-1.148 1.637ZM13.5 2.432c0 .376.103 1.052.63 1.528.643.58 1.501.527 2.297.152l-.854-1.809c-.1.047-.172.071-.22.083-.046.011-.063.01-.055.01.009 0 .036.003.074.018a.336.336 0 0 1 .098.06c.049.045.053.076.044.05a.271.271 0 0 1-.014-.092h-2ZM13 17.5a.5.5 0 0 1-.5.5v2a2.5 2.5 0 0 0 2.5-2.5h-2Zm-.5-.5a.5.5 0 0 1 .5.5h2a2.5 2.5 0 0 0-2.5-2.5v2ZM9 14.5a2.5 2.5 0 0 0 2.5 2.5v-2a.5.5 0 0 1-.5-.5H9Zm-4.834 5.273A3 3 0 0 0 7.158 23v-2a1 1 0 0 1-.998-1.076l-1.994-.151ZM11.5 12A2.5 2.5 0 0 0 9 14.5h2a.5.5 0 0 1 .5-.5v-2Zm5.94-4.557a2 2 0 0 1 0 1.78l1.791.892a4 4 0 0 0 0-3.563l-1.79.89ZM16.842 23a3 3 0 0 0 2.992-3.227l-1.994.151A1 1 0 0 1 16.842 21v2ZM4.77 6.552a4 4 0 0 0 0 3.563l1.79-.891a2 2 0 0 1 0-1.781l-1.79-.891Z"
      fill="#555770"
    />
  </svg>
);

export default SvgSalt;