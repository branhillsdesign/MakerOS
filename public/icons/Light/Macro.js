import * as React from "react";

const SvgMacro = ({ title, titleId, ...props }) => (
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
      d="m8.267 3.545.429-.419a.6.6 0 0 0-1.03.42h.6Zm1.6 1.637-.43.42a.6.6 0 0 0 .859 0l-.43-.42ZM12 3l.429-.42a.6.6 0 0 0-.858 0L12 3Zm2.133 2.182-.429.42a.6.6 0 0 0 .858 0l-.429-.42Zm1.6-1.637h.6a.6.6 0 0 0-1.029-.419l.43.42Zm-3.905 17.397.078.594a.6.6 0 0 0 .507-.464l-.585-.13Zm-7.656-8.61-.078-.596a.6.6 0 0 0-.507.465l.585.13Zm8 8.61-.585.13a.6.6 0 0 0 .507.464l.078-.595Zm7.656-8.61.585-.131a.6.6 0 0 0-.507-.465l-.078.595Zm-4.695-4.968c0 1.79-1.415 3.218-3.133 3.218v1.2c2.406 0 4.333-1.991 4.333-4.418h-1.2ZM12 10.582c-1.718 0-3.133-1.428-3.133-3.218h-1.2c0 2.427 1.927 4.418 4.333 4.418v-1.2ZM8.867 7.364V3.545h-1.2v3.819h1.2Zm-1.03-3.4 1.6 1.637.859-.839-1.6-1.636-.858.839Zm2.459 1.637 2.133-2.182-.858-.838-2.133 2.181.858.84ZM11.57 3.42l2.133 2.182.858-.839-2.133-2.181-.858.838Zm2.991 2.182 1.6-1.636-.858-.839-1.6 1.636.858.84Zm.571-2.056v3.819h1.2V3.545h-1.2ZM11.4 11.182v8.727h1.2v-8.727h-1.2Zm-.467 9.218c-3.485 0-6.333-2.893-6.333-6.49H3.4c0 4.234 3.36 7.69 7.533 7.69v-1.2Zm-5.866-7.527c3.485 0 6.333 2.893 6.333 6.49h1.2c0-4.234-3.36-7.69-7.533-7.69v1.2Zm6.333 6.49c0 .499-.055.983-.158 1.448l1.171.26c.123-.55.187-1.121.187-1.707h-1.2Zm.35.984c-.268.035-.54.053-.817.053v1.2c.33 0 .654-.022.973-.064l-.157-1.19Zm-7.5-7.421c.268-.035.54-.053.817-.053v-1.2c-.33 0-.654.021-.973.063l.157 1.19Zm.35.983c0-.498.055-.983.158-1.448l-1.171-.26a7.87 7.87 0 0 0-.187 1.708h1.2Zm8.467 7.691c4.173 0 7.533-3.456 7.533-7.69h-1.2c0 3.597-2.848 6.49-6.333 6.49v1.2Zm5.866-9.927c-4.173 0-7.533 3.456-7.533 7.69h1.2c0-3.597 2.848-6.49 6.333-6.49v-1.2Zm-7.533 7.69c0 .587.064 1.159.187 1.709l1.171-.26a6.669 6.669 0 0 1-.158-1.448h-1.2Zm.694 2.173c.319.042.643.064.973.064v-1.2c-.277 0-.55-.018-.816-.053l-.157 1.19Zm7.812-9.8a7.443 7.443 0 0 0-.973-.063v1.2c.277 0 .55.018.816.053l.157-1.19Zm.694 2.173c0-.586-.064-1.158-.187-1.708l-1.171.26c.103.465.158.95.158 1.448h1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMacro;
