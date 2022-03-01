import { theme } from '../../../../utils/ThemeConfig';
import { FlexBox } from '../../../util/FlexBox';
import { NavMenuPopover } from './NavMenuPopover';
import { Button } from '../../../widgets/Button';
import { BigCenter } from '../../../util/BigCenter';
import { Box } from '../../../util/Box';
import { MakerOsIcon16Px as Icon } from '../../../../public/icons/Duotone/Index';
import { NavRider } from './NavRider';
import {
	navBtn01ListItems,
	navBtn02ListItems,
	navBtn03ListItems,
} from '../NavMenuListIndex';
import { NavBanner } from './NavBanner';

const navMenuBtn = {
	btnText: {
		btn01: 'Events',
		btn02: 'Leagues',
		btn03: 'Course Info',
	},
	btnList: {
		btn01: navBtn01ListItems(),
		btn02: navBtn02ListItems(),
		btn03: navBtn03ListItems(),
	},
};

export const NavBar = () => {
	return (
		<>
			<NavRider />
			<Box bg={theme.colors.background.surface100}>
				<BigCenter>
					<FlexBox
						alignItems='center'
						justifyContent='space-between'
						flexShrink='0'>
						<Icon color={theme.colors.main} width='2em' height='2em' />
						<FlexBox justifyContent='center' gap='0' flexDirection='row'>
							<NavMenuPopover
								text={navMenuBtn.btnText.btn01}
								list={navMenuBtn.btnList.btn01}
								ctaBtnText='Book An Event'
							/>
							<NavMenuPopover
								text={navMenuBtn.btnText.btn02}
								list={navMenuBtn.btnList.btn02}
							/>
							<NavMenuPopover
								text={navMenuBtn.btnText.btn03}
								list={navMenuBtn.btnList.btn03}
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
				</BigCenter>
			</Box>
			<NavBanner />
		</>
	);
};
