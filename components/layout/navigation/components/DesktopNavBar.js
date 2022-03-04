import { theme } from '../../../../utils/ThemeConfig';
import { FlexBox } from '../../../util/FlexBox';
import { NavMenuPopover } from './NavMenuPopover';
import { Button } from '../../../widgets/Button';
import styled from 'styled-components';
import { MakerOsIcon16Px as Icon } from '../../../../public/icons/Duotone/Index';
import { NavRider } from './NavRider';
import { NavBanner } from './NavBanner';
import { navMenuBtnList } from '../NavMenuListIndex';

const NavBarWrapper = styled.div`
	margin-left: auto;
	margin-right: auto;

	@media (max-width: ${theme.screen.md}) {
		display: none;
	}
`;

export const DesktopNavBar = () => {
	return (
		<>
			<NavBarWrapper>
				<FlexBox
					alignItems='center'
					justifyContent='space-around'
					padding='0 2rem'
					bg={theme.colors.background.surface100}>
					<Icon color={theme.colors.main} width='2em' height='2em' />
					<FlexBox justifyContent='center' gap='0' flexDirection='row'>
						<NavMenuPopover
							text={navMenuBtnList.btnText.btn01}
							list={navMenuBtnList.btnList.btn01}
							ctaBtnText='Book An Event'
						/>
						<NavMenuPopover
							text={navMenuBtnList.btnText.btn02}
							list={navMenuBtnList.btnList.btn02}
						/>
						<NavMenuPopover
							text={navMenuBtnList.btnText.btn03}
							list={navMenuBtnList.btnList.btn03}
						/>
					</FlexBox>
					<FlexBox gap='2rem' flexShrink='0'>
						<Button variant='outline' size='md' width='null'>
							Membership
						</Button>
						<Button size='md' width='null'>
							Book A Tee Time
						</Button>
					</FlexBox>
				</FlexBox>
			</NavBarWrapper>
		</>
	);
};
