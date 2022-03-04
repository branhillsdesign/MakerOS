import styled from 'styled-components';
import { theme } from '../../../../utils/ThemeConfig';
import { NavButton } from './NavButton';
import { MakerOsIcon16Px } from '../../../../public/icons/Duotone/Index';
import * as Icon from '../../../../public/icons/Duotone/Index';
import { navMenuBtnList } from '../NavMenuListIndex';
import { Spacer } from '../../../util/Spacer';
import { useState } from 'react';
import { Button } from '../../../widgets/Button';
import { NavBanner } from './NavBanner';

const StyledMobileNavBar = styled.div`
	display: flex;
	position: sticky;
	top: 0;
	background-color: ${theme.colors.background.surface100};
	align-items: center;
	justify-content: space-between;
	padding: 1rem 2rem;
	z-index: 2;
	width: 100%;

	@media (min-width: ${theme.screen.md}) {
		display: none;
	}
`;

const DropdownContentBox = styled.div`
	display: flex;
	position: absolute;
	right: 0;
	transform: scale(${({ isOpen }) => (isOpen ? '100%' : '0')});
	transform-origin: top right;
	background-color: ${theme.colors.background.surface100};
	flex-direction: column;
	align-items: center;
	padding: 0 2rem;
	z-index: 1;
	transition: all 0.3s ease-in-out;
	border-radius: 0 0 0 2rem;
	&:before {
		content: '';
		position: absolute;
		width: 100%;
		height: 0.25rem;
		background-color: ${theme.colors.main};
	}
`;

const DropdownContent = styled.div`
	width: 20rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const MobileNavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleClick = () => setIsOpen(!isOpen);

	return (
		<>
			<StyledMobileNavBar>
				<MakerOsIcon16Px color={theme.colors.main} height='2em' width='2em' />
				MakerOS
				<Icon.HamburgerMenu
					color={theme.colors.main}
					height='2em'
					width='2em'
					onClick={handleClick}
				/>
			</StyledMobileNavBar>
			<DropdownContentBox isOpen={isOpen}>
				<DropdownContent>
					<NavButton text={navMenuBtnList.btnText.btn01} variant='mobile' />
					{navMenuBtnList.btnList.btn01}
					<Spacer />
					<NavButton text={navMenuBtnList.btnText.btn02} variant='mobile' />
					{navMenuBtnList.btnList.btn02}
					<Spacer />
					<NavButton text={navMenuBtnList.btnText.btn03} variant='mobile' />
					{navMenuBtnList.btnList.btn03}
					<Spacer height='2rem' />
					<Button size='md'>Book a Tee Time</Button>
					<Spacer />
					<Button variant='outline' size='md'>
						Membership Options
					</Button>
					<Spacer height='4rem' />
				</DropdownContent>
			</DropdownContentBox>
		</>
	);
};
