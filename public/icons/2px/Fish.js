import * as React from "react";

const SvgFish = ({ title, titleId, ...props }) => (
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
      d="m2 15-.465-.886A1 1 0 0 0 2 16v-1Zm0-7V7a1 1 0 0 0-.465 1.886L2 8Zm10.5-4 .259-.966a1 1 0 0 0-1.23 1.209L12.5 4Zm0 15-.97-.242a1 1 0 0 0 1.229 1.208L12.5 19ZM1.535 8.886c.622.326.963.706 1.164 1.1.208.408.301.906.301 1.514h2c0-.799-.12-1.639-.519-2.422-.406-.798-1.065-1.464-2.016-1.964l-.93 1.772ZM3 11.5c0 .608-.093 1.106-.301 1.514-.2.394-.542.775-1.164 1.1l.93 1.771c.951-.499 1.61-1.165 2.016-1.963C4.88 13.139 5 12.299 5 11.5H3ZM2 9c1.375 0 2.63.213 3.642.562 1.03.354 1.723.82 2.078 1.262l1.56-1.251c-.678-.847-1.761-1.48-2.987-1.902C5.05 7.242 3.571 7 2 7v2Zm7 2.5c0-.188.07-.413.28-.676L7.72 9.573C7.286 10.114 7 10.768 7 11.5h2Zm-1.28.676c-.355.442-1.049.908-2.078 1.262C4.63 13.788 3.375 14 2 14v2c1.571 0 3.05-.242 4.293-.67 1.226-.423 2.309-1.056 2.987-1.903l-1.56-1.251ZM15 14c-1.375 0-2.63-.213-3.642-.562-1.03-.354-1.723-.82-2.078-1.262l-1.56 1.251c.678.847 1.761 1.48 2.987 1.902C11.95 15.758 13.429 16 15 16v-2Zm-5.72-1.824c-.21-.263-.28-.488-.28-.676H7c0 .732.286 1.386.72 1.927l1.56-1.251Zm0-1.352c.458-.571 1.467-1.162 2.951-1.514l-.462-1.946c-1.687.4-3.194 1.142-4.05 2.209l1.561 1.251Zm2.951-1.514A12.07 12.07 0 0 1 15 9V7c-1.147 0-2.242.129-3.231.364l.462 1.946Zm.688-.58a9.727 9.727 0 0 0 .592-2.087c.145-.858.206-1.9-.04-2.886l-1.941.486c.154.614.13 1.351.01 2.066a7.759 7.759 0 0 1-.46 1.634l1.84.787ZM15 9c.316 0 .626.011.929.033l.142-1.995C15.721 7.013 15.363 7 15 7v2Zm.929.033c1.585.113 2.931.509 3.847 1.033C20.73 10.61 21 11.152 21 11.5h2c0-1.415-1.034-2.485-2.231-3.17-1.237-.708-2.891-1.163-4.698-1.292l-.142 1.995ZM12.24 4.966c.56.15 1.385.506 1.998 1.047.593.522.9 1.12.775 1.856l1.972.333c.276-1.636-.502-2.877-1.425-3.69-.903-.796-2.03-1.271-2.802-1.478l-.518 1.932ZM21 11.5c0 .348-.27.889-1.224 1.434-.916.524-2.262.92-3.847 1.033l.142 1.995c1.807-.13 3.461-.584 4.698-1.291C21.967 13.985 23 12.915 23 11.5h-2Zm-5.071 2.467A13 13 0 0 1 15 14v2c.363 0 .72-.013 1.071-.038l-.142-1.995Zm-.686-6.585c-1.073 1.242-2.358 4.453-.093 8.11l1.7-1.054c-1.735-2.8-.687-5.062-.093-5.749l-1.514-1.307Zm-4.162 7.675c.136.317.338.925.458 1.634.121.715.145 1.452-.01 2.067l1.941.485c.246-.986.186-2.028.04-2.886a9.727 9.727 0 0 0-.59-2.087l-1.84.787Zm1.678 4.909c.772-.207 1.899-.682 2.802-1.478.923-.813 1.7-2.054 1.425-3.69l-1.972.333c.124.736-.181 1.334-.775 1.856-.613.54-1.437.897-1.998 1.047l.518 1.932Z"
      fill="#555770"
    />
  </svg>
);

export default SvgFish;