import * as React from "react";

const SvgMedicalFile5 = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4Zm-2 0v17H6V4h12Zm-6-.248a.752.752 0 1 0 0-1.504.752.752 0 0 0 0 1.503Z"
      fill="#555770"
    />
    <mask id="Medical_File_5_svg__a" fill="#fff">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 2v4H8V2h2.268a2 2 0 0 1 3.464 0H16Zm-4 1.752a.752.752 0 1 0 0-1.504.752.752 0 0 0 0 1.503Z"
      />
    </mask>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 2v4H8V2h2.268a2 2 0 0 1 3.464 0H16Zm-4 1.752a.752.752 0 1 0 0-1.504.752.752 0 0 0 0 1.503Z"
      fill="currentColor"
    />
    <path
      d="M16 6v1h1V6h-1Zm0-4h1V1h-1v1ZM8 6H7v1h1V6Zm0-4V1H7v1h1Zm2.268 0v1h.576l.29-.5-.866-.5Zm3.464 0-.865.5.289.5h.576V2ZM17 6V2h-2v4h2ZM8 7h8V5H8v2ZM7 2v4h2V2H7Zm3.268-1H8v2h2.268V1ZM12 0a3 3 0 0 0-2.598 1.5l1.731 1A1 1 0 0 1 12 2V0Zm2.598 1.5A3 3 0 0 0 12 0v2a1 1 0 0 1 .867.5l1.731-1ZM16 1h-2.268v2H16V1Zm-4.248 2c0-.137.11-.248.248-.248v2c.967 0 1.752-.785 1.752-1.752h-2Zm.248.248A.249.249 0 0 1 11.752 3h2c0-.967-.785-1.752-1.752-1.752v2ZM12.248 3a.249.249 0 0 1-.248.248v-2c-.967 0-1.752.785-1.752 1.752h2ZM12 2.752c.137 0 .248.11.248.248h-2c0 .967.785 1.752 1.752 1.752v-2Z"
      fill="currentColor"
      mask="url(#Medical_File_5_svg__a)"
    />
    <path d="M12 10v6m-3-3h6" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgMedicalFile5;
