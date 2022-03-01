import { createGlobalStyle, keyframes, ThemeProvider } from 'styled-components';
import { theme } from '../utils/ThemeConfig';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&display=swap');
*, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    line-height: calc(1em + 0.5rem);
  }
  html, body, #__next {
    height: 100%;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    background: ${theme.colors.background.bg00};
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #root, #__next {
    isolation: isolate;
  }
`;

// Insert breakpoints here
const queries = {
	xs: '(max-width: 575.98px)',
	sm: '(max-width: 767.98px)',
	md: '(max-width: 991.98px)',
	lg: '(max-width: 1199.98px)',
	xl: '(max-width: 1919.98px)',
};

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
					<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
