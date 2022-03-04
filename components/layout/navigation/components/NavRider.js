import styled from 'styled-components';
import Facebook from '../../../../public/assets/Social/Facebook.svg';
import Twitter from '../../../../public/assets/Social/twitter.svg';
import Instagram from '../../../../public/assets/Social/instagram.svg';
import LinkedIn from '../../../../public/assets/Social/linkedin.svg';
import TikTok from '../../../../public/assets/Social/tiktok.svg';
import Meta from '../../../../public/assets/Social/meta.svg';
import Link from 'next/link';
import { AniToColor } from '../../../../utils/Animations';

const NavRiderBox = styled.div`
	padding: 0.5rem 2rem;
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
