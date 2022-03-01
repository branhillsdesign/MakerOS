import styled from 'styled-components';
import { theme } from '../../../../utils/ThemeConfig';

const NavBannerBox = styled.div`
	max-width: 1440px;
	padding: 0.5rem 0;
	display: flex;
	flex-shrink: 0;
	justify-content: center;
	gap: 1rem;
	margin-left: auto;
	margin-right: auto;
	background-color: ${theme.colors.main};
	color: ${theme.colors.grey90};
	border-radius: 0 0 2rem 2rem;
`;

export const NavBanner = () => {
	return (
		<>
			<NavBannerBox>
				This is a big space for a very important CTA, like an active webinar.
			</NavBannerBox>
		</>
	);
};
