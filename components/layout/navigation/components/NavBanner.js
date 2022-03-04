import styled from 'styled-components';
import { theme } from '../../../../utils/ThemeConfig';

const NavBannerBox = styled.div`
	margin-left: auto;
  margin-right: auto;
  text-align: center;
	width: fit-content;
	padding: 0.5rem 2rem;
	background-color: ${theme.colors.main};
	color: ${theme.colors.grey90};
	border-radius: 0 0 2rem 2rem;
`;

export const NavBanner = () => {
	return (
		<>
			<NavBannerBox>
				This is a space for something important, like an active webinar.
			</NavBannerBox>
		</>
	);
};
