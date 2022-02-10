const theme = {
  headings: {
    h1: 'font-weight: 700; font-size: 2.5rem;',
    h2: 'font-weight: 700; font-size: 2rem;',
    h3: 'font-weight: 700; font-size: 1.75rem;',
    h4: 'font-weight: 700; font-size: 1.5rem;',
    h5: 'font-weight: 700; font-size: 1.25rem;',
    h6: 'font-weight: 700; font-size: 1rem;',
  },
  body: {
    p1: 'font-size: 1.125rem;',
    p2: 'font-size: 1rem;',
  },
  label: {
    small: '0.75rem',
    medium: '0.875rem',
    large: '1rem',
  },
  display: {
    display1: 'font-weight: 700; font-size: 4rem;',
    display2: 'font-weight: 700; font-size: 3.5rem;',
  },
  stylized: {
    allCaps:
      'text-transform: uppercase; letter-spacing: 0.125rem; font-size: 0.875rem;',
    blockQuote:
      'font-weight: 600; font-size: 1.25rem; letter-spacing: 0.004em;',
    lead: 'font-weight: 700; font-size: 1rem; letter-spacing: 0.016em;',
    small: 'font-weight: 500; font-size: 0.875rem;',
    tiny: 'font-weight: 600; font-size: 0.75rem; letter-spacing: 0.016em;',
  },
  colors: {
    text: {
      highContrast: 'hsla(240, 18%, 13%) /*#1C1C28*/',
      vivid: 'hsla(237, 21%, 20%) /*#28293D*/',
      dim: 'hsla(236, 14%, 39%) /*#555770*/',
      subtle: 'hsla(236, 12%, 60%) /*#8F90A6*/',
      disabled: 'hsla(236, 12%, 80%) /*#C6C7D2*/',
    },
    background: {
      bg00: 'hsla(240, 11%, 96%) /*#F2F2F5*/',
      bg10: 'hsla(240, 17%, 98%) /*#F8F8FA*/',
      bg20: 'hsla(240, 11%, 98%) /*#FAFAFB*/',
      bg30: 'hsla(240, 14%, 99%) /*#FBFBFC*/',
      bg40: 'hsla(240, 20%, 99%) /*#FCFCFD*/',
      surface100: 'hsla(0, 0%, 100%) /*#f0f0f0*/',
    },
    /* Change Primary Brand Colors here */
    main: 'hsla(221, 95%, 61%) /*#3E7BFA*/',
    vivid: 'hsla(221, 65%, 52%) /*#3568D4*/',
    dim: 'hsla(220, 91%, 67%) /*#5E91F7*/',
    subtle: 'hsla(220, 100%, 90%) /*#CCDDFF*/',

    /* Greys */
    white100: 'hsla(221, 0%, 100%) /*#FFFFFF*/',
    grey90: 'hsla(221, 0%, 90%) /*#F1F1F1*/',
    grey80: 'hsla(221, 0%, 80%) /*#E5E5E5*/',
    grey70: 'hsla(221, 0%, 70%) /*#B2B2B2*/',
    grey60: 'hsla(221, 0%, 60%) /*#999999*/',
    grey50: 'hsla(221, 0%, 50%) /*#807F7F*/',
    grey40: 'hsla(221, 0%, 40%) /*#666666*/',
    grey30: 'hsla(221, 0%, 30%) /*#4D4D4D*/',
    grey20: 'hsla(221, 0%, 20%) /*#333333*/',
    grey10: 'hsla(221, 0%, 10%) /*#1A1A1A*/',
    black00: 'hsla(221, 0%, 0%) /*#000000*/',

    /* Reds */
    red00: 'hsla(0, 78%, 48%) /*#D91B1B*/',
    red10: 'hsla(0, 100%, 60%) /*#FF3333*/',
    red20: 'hsla(0, 100%, 68%) /*#FF5C5C*/',
    red30: 'hsla(0, 100%, 75%) /*#FF8080*/',
    red40: 'hsla(0, 100%, 95%) /*#FFE5E5*/',

    /* Oranges */
    orange00: 'hsla(32, 100%, 45%) /*#E57A00*/',
    orange10: 'hsla(32, 100%, 50%) /*#FF8800*/',
    orange20: 'hsla(34, 98%, 63%) /*#FDAC42*/',
    orange30: 'hsla(39, 96%, 72%) /*#FCCC75*/',
    orange40: 'hsla(44, 100%, 95%) /*#FFF8E5*/',

    /* Yellows */
    yellow00: 'hsla(48, 100%, 45%) /*#E5B800*/',
    yellow10: 'hsla(48, 100%, 50%) /*#FFCC00*/',
    yellow20: 'hsla(49, 98%, 64%) /*#FDDD48*/',
    yellow30: 'hsla(53, 97%, 72%) /*#FDED72*/',
    yellow40: 'hsla(58, 100%, 95%) /*#FFFEE5*/',

    /* Greens */
    green00: 'hsla(154, 94%, 34%) /*#05A660*/',
    green10: 'hsla(154, 94%, 39%) /*#06C270*/',
    green20: 'hsla(151, 68%, 54%) /*#39D98A*/',
    green30: 'hsla(150, 78%, 63%) /*#57EBA1*/',
    green40: 'hsla(150, 100%, 95%) /*#E3FFF1*/',

    /* Teals */
    teal00: 'hsla(184, 100%, 38%) /*#00B7C4*/',
    teal10: 'hsla(184, 100%, 44%) /*#00CFDE*/',
    teal20: 'hsla(184, 71%, 68%) /*#73DFE7*/',
    teal30: 'hsla(182, 74%, 81%) /*#A9EFF2*/',
    teal40: 'hsla(180, 100%, 95%) /*#E5FFFF*/',

    /* Blues */
    blue00: 'hsla(216, 100%, 38%) /*#004FC4*/',
    blue10: 'hsla(216, 100%, 38%) /*#0063F7*/',
    blue20: 'hsla(220, 82%, 65%) /*#5B8DEF*/',
    blue30: 'hsla(218, 88%, 80%) /*#9DBFF9*/',
    blue40: 'hsla(215, 100%, 95%) /*#E5F0FF*/',

    grape00: 'hsla(270, 100%, 30%) /*#4D0099*/',
    grape10: 'hsla(270, 100%, 40%) /*#6600CC*/',
    grape20: 'hsla(278, 62%, 61%) /*#AC5DD9*/',
    grape30: 'hsla(289, 61%, 78%) /*#DDA5E9*/',
    grape40: 'hsla(300, 100%, 95%) /*#FFE5FF*/',
  },
  elevation: {
    inset01: 'box-shadow: 0px 0.5px 4px 0px hsla(237, 18%, 23%, 0.32) inset;',
    shadow10:
      'box-shadow: 0px 1px 2px 0px hsla(0, 0%, 0%, 0.32); box-shadow: 0px 0px 1px 0px hsla(237, 21%, 20%, 0.08);',
    shadow20:
      'box-shadow: 0px 2px 4px 0px hsla(0, 0%, 0%, 0.32); box-shadow: 0px 0px 1px 0px hsla(0, 0%, 0%, 0.04);',
    shadow30:
      'box-shadow: 0px 4px 8px 0px hsla(0, 0%, 0%, 0.32); box-shadow: 0px 0px 2px 0px hsla(0, 0%, 0%, 0.04);',
    shadow40:
      'box-shadow: 0px 8px 16px 0px hsla(0, 0%, 0%, 0.32); box-shadow: 0px 2px 4px 0px hsla(0, 0%, 0%, 0.04);',
    shadow50:
      'box-shadow: 0px 16px 24px 0px hsla(0, 0%, 0%, 0.32); box-shadow: 0px 2px 8px 0px hsla(0, 0%, 0%, 0.04);',
    shadow60:
      'box-shadow: 0px 20px 32px 0px hsla(0, 0%, 0%, 0.32); box-shadow: 0px 2px 8px 0px hsla(0, 0%, 0%, 0.08);',
    focus: 'box-shadow: 0px 0px 0px 4px hsla(221, 95%, 40%);',
    hover: 'box-shadow: 0px 0px 0px 4px hsla(221, 95%, 61%, 0.3);',
  },
};

const darkTheme = {
  colors: {
    text: {
      highContrast: 'hsla(240, 18%, 13%) /*#1C1C28*/',
      vivid: 'hsla(237, 21%, 20%) /*#28293D*/',
      dim: 'hsla(236, 14%, 39%) /*#555770*/',
      subtle: 'hsla(236, 12%, 60%) /*#8F90A6*/',
      disabled: 'hsla(236, 12%, 80%) /*#C6C7D2*/',
    },
    background: {
      bg00: 'hsla(240, 11%, 96%) /*#F2F2F5*/',
      bg10: 'hsla(240, 17%, 98%) /*#F8F8FA*/',
      bg20: 'hsla(240, 11%, 98%) /*#FAFAFB*/',
      bg30: 'hsla(240, 14%, 99%) /*#FBFBFC*/',
      bg40: 'hsla(240, 20%, 99%) /*#FCFCFD*/',
      surface100: 'hsla(0, 0%, 100%) /*#f0f0f0*/',
    },
    /* Change Primary Brand Colors here */
    main: 'hsla(221, 95%, 61%) /*#3E7BFA*/',
    vivid: 'hsla(221, 65%, 52%) /*#3568D4*/',
    dim: 'hsla(220, 91%, 67%) /*#5E91F7*/',
    subtle: 'hsla(220, 100%, 90%) /*#CCDDFF*/',

    /* Greys */
    white100: 'hsla(221, 0%, 100%) /*#FFFFFF*/',
    grey90: 'hsla(221, 0%, 90%) /*#F1F1F1*/',
    grey80: 'hsla(221, 0%, 80%) /*#E5E5E5*/',
    grey70: 'hsla(221, 0%, 70%) /*#B2B2B2*/',
    grey60: 'hsla(221, 0%, 60%) /*#999999*/',
    grey50: 'hsla(221, 0%, 50%) /*#807F7F*/',
    grey40: 'hsla(221, 0%, 40%) /*#666666*/',
    grey30: 'hsla(221, 0%, 30%) /*#4D4D4D*/',
    grey20: 'hsla(221, 0%, 20%) /*#333333*/',
    grey10: 'hsla(221, 0%, 10%) /*#1A1A1A*/',
    black00: 'hsla(221, 0%, 0%) /*#000000*/',

    /* Reds */
    red00: 'hsla(0, 78%, 48%) /*#D91B1B*/',
    red10: 'hsla(0, 100%, 60%) /*#FF3333*/',
    red20: 'hsla(0, 100%, 68%) /*#FF5C5C*/',
    red30: 'hsla(0, 100%, 75%) /*#FF8080*/',
    red40: 'hsla(0, 100%, 95%) /*#FFE5E5*/',

    /* Oranges */
    orange00: 'hsla(32, 100%, 45%) /*#E57A00*/',
    orange10: 'hsla(32, 100%, 50%) /*#FF8800*/',
    orange20: 'hsla(34, 98%, 63%) /*#FDAC42*/',
    orange30: 'hsla(39, 96%, 72%) /*#FCCC75*/',
    orange40: 'hsla(44, 100%, 95%) /*#FFF8E5*/',

    /* Yellows */
    yellow00: 'hsla(48, 100%, 45%) /*#E5B800*/',
    yellow10: 'hsla(48, 100%, 50%) /*#FFCC00*/',
    yellow20: 'hsla(49, 98%, 64%) /*#FDDD48*/',
    yellow30: 'hsla(53, 97%, 72%) /*#FDED72*/',
    yellow40: 'hsla(58, 100%, 95%) /*#FFFEE5*/',

    /* Greens */
    green00: 'hsla(154, 94%, 34%) /*#05A660*/',
    green10: 'hsla(154, 94%, 39%) /*#06C270*/',
    green20: 'hsla(151, 68%, 54%) /*#39D98A*/',
    green30: 'hsla(150, 78%, 63%) /*#57EBA1*/',
    green40: 'hsla(150, 100%, 95%) /*#E3FFF1*/',

    /* Teals */
    teal00: 'hsla(184, 100%, 38%) /*#00B7C4*/',
    teal10: 'hsla(184, 100%, 44%) /*#00CFDE*/',
    teal20: 'hsla(184, 71%, 68%) /*#73DFE7*/',
    teal30: 'hsla(182, 74%, 81%) /*#A9EFF2*/',
    teal40: 'hsla(180, 100%, 95%) /*#E5FFFF*/',

    /* Blues */
    blue00: 'hsla(216, 100%, 38%) /*#004FC4*/',
    blue10: 'hsla(216, 100%, 38%) /*#0063F7*/',
    blue20: 'hsla(220, 82%, 65%) /*#5B8DEF*/',
    blue30: 'hsla(218, 88%, 80%) /*#9DBFF9*/',
    blue40: 'hsla(215, 100%, 95%) /*#E5F0FF*/',

    grape00: 'hsla(270, 100%, 30%) /*#4D0099*/',
    grape10: 'hsla(270, 100%, 40%) /*#6600CC*/',
    grape20: 'hsla(278, 62%, 61%) /*#AC5DD9*/',
    grape30: 'hsla(289, 61%, 78%) /*#DDA5E9*/',
    grape40: 'hsla(300, 100%, 95%) /*#FFE5FF*/',
  },
  elevation: {
    inset01: 'box-shadow: 0px 0.5px 4px 0px hsla(240, 26%, 9%, 1) inset;',
    shadow10:
      'box-shadow: 0px 1px 2px 0px hsla(0, 0%, 0%, 0.32); box-shadow: 0px 0px 1px 0px hsla(237, 21%, 20%, 0.08);',
    shadow20:
      'box-shadow: 0px 2px 4px 0px hsla(0, 0%, 0%, 0.32); box-shadow: 0px 0px 1px 0px hsla(0, 0%, 0%, 0.04);',
    shadow30:
      'box-shadow: 0px 4px 8px 0px hsla(0, 0%, 0%, 0.32); box-shadow: 0px 0px 2px 0px hsla(0, 0%, 0%, 0.04);',
    shadow40:
      'box-shadow: 0px 8px 16px 0px hsla(0, 0%, 0%, 0.32); box-shadow: 0px 2px 4px 0px hsla(0, 0%, 0%, 0.04);',
    shadow50:
      'box-shadow: 0px 16px 24px 0px hsla(0, 0%, 0%, 0.32); box-shadow: 0px 2px 8px 0px hsla(0, 0%, 0%, 0.04);',
    shadow60:
      'box-shadow: 0px 20px 32px 0px hsla(0, 0%, 0%, 0.32); box-shadow: 0px 2px 8px 0px hsla(0, 0%, 0%, 0.08);',
    focus: 'box-shadow: 0px 0px 0px 2px hsla(240, 19%, 16%, 1);',
    focusInset:
      'box-shadow: 0px 0px 0px 2px hsla(240, 19%, 16%, 1); box-shadow: 0px 0.5px 4px 1px hsla(237, 17%, 23%, 0.32) inset;',
  },
};

export { theme };
