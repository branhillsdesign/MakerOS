import styled from 'styled-components';
import Facebook from '../../../../public/assets/Social/Facebook.svg';
import Twitter from '../../../../public/assets/Social/twitter.svg';
import Instagram from '../../../../public/assets/Social/instagram.svg';
import LinkedIn from '../../../../public/assets/Social/linkedin.svg';
import TikTok from '../../../../public/assets/Social/tiktok.svg';
import Meta from '../../../../public/assets/Social/meta.svg';

const NavRiderBox = styled.div`
	max-width: 1440px;
	padding: 0.5rem 0;
	display: flex;
	flex-shrink: 0;
	justify-content: flex-end;
	gap: 1rem;
	margin-left: auto;
	margin-right: auto;
`;

export const NavRider = () => {
	return (
		<>
			<NavRiderBox>
				<Facebook />
				<Twitter />
				<Instagram />
				<LinkedIn />
				<TikTok />
				<Meta />
			</NavRiderBox>
		</>
	);
};
