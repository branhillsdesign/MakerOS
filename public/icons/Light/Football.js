import * as React from "react";

const SvgFootball = ({ title, titleId, ...props }) => (
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
      d="m12 7 4.755 3.455M12 7l-4.755 3.455M12 7V5m4.755 5.455-1.816 5.59m1.816-5.59 1.873-.71m-3.69 6.3H9.062m5.878 0 1.28 1.54m-7.158-1.54-1.816-5.59m1.816 5.59-1.106 1.668m-.71-7.258-1.873-.71m10.848 7.84-.22 2.48m.22-2.48 2.734.128m-10.998 0L8 20.064m-.045-2.35h-2.91m.327-7.97-1.02-2.49m1.02 2.49L3.055 11M12 5l-1.817-1.817M12 5l1.817-1.817m4.81 6.562 1.022-2.49m-1.021 2.49L20.945 11M10.183 3.183a9.04 9.04 0 0 1 3.634 0m-3.634 0a9.01 9.01 0 0 0-5.832 4.072m9.466-4.072a9.01 9.01 0 0 1 5.832 4.072m0 0A8.96 8.96 0 0 1 20.945 11m0 0a8.963 8.963 0 0 1-1.99 6.713M16 20.064A8.963 8.963 0 0 1 12 21a8.963 8.963 0 0 1-4-.936m8 0a9.035 9.035 0 0 0 2.954-2.35M8 20.063a8.993 8.993 0 0 1-2.954-2.35m0 0A8.963 8.963 0 0 1 3 12c0-.338.019-.672.055-1M4.35 7.255A8.96 8.96 0 0 0 3.055 11"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgFootball;