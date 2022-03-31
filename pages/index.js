import { Button } from '../components/widgets/Button';
import { FlexBox } from '../components/util/FlexBox';
import { Box } from '../components/util/Box';
import { Spacer } from '../components/util/Spacer';
import { TextBox, InputLabel } from '../components/widgets/Input';
import { DesktopNavBar } from '../components/layout/navigation/components/DesktopNavBar';
import { MobileNavBar } from '../components/layout/navigation/components/MobileNavBar';
import { Wrapper } from '../components/util/Wrapper';
import { NavBanner } from '../components/layout/navigation/components/NavBanner';
import { NavRider } from '../components/layout/navigation/components/NavRider';
import { Card01 } from '../components/layout/cards/Cards';
export default function Home() {
	return (
    <>
			<Box>
				<DesktopNavBar />
				<MobileNavBar />
			</Box>
			<NavBanner />
      <Spacer height='2rem' />
      <Card01 />
			<Wrapper>
				<Spacer height='4rem' />
				<FlexBox flexDirection='column' gap='2rem' alignItems='center'>
					<FlexBox flexDirection='row' gap='1rem'>
						<Button size='sm'>Button</Button>
						<Button>Button</Button>
						<Button size='lg'>Button</Button>
					</FlexBox>
					<FlexBox flexDirection='row' gap='1rem'>
						<Button size='sm' variant='outline'>
							Button
						</Button>
						<Button variant='outline'>Button</Button>
						<Button size='lg' variant='outline'>
							Button
						</Button>
					</FlexBox>
					<FlexBox flexDirection='row' gap='1rem'>
						<Button size='sm' variant='pill'>
							Button
						</Button>
						<Button variant='pill'>Button</Button>
						<Button size='lg' variant='pill'>
							Button
						</Button>
					</FlexBox>
					<FlexBox flexDirection='row' gap='1rem'>
						<Button size='sm' variant='link'>
							Button
						</Button>
						<Button variant='link'>Button</Button>
						<Button size='lg' variant='link'>
							Button
						</Button>
					</FlexBox>
					<FlexBox flexDirection='row' gap='1rem'>
						<Button size='sm' variant='disabled'>
							Button
						</Button>
						<Button variant='disabled'>Button</Button>
						<Button size='lg' variant='disabled'>
							Button
						</Button>
					</FlexBox>
					<FlexBox gap='.5rem' flexDirection='column' alignItems='flex-start'>
						<InputLabel>Input Label</InputLabel>
						<TextBox placeholder='Placeholder text' />
						<Spacer height='1rem' />
						<InputLabel>Input Label</InputLabel>
						<TextBox placeholder='Placeholder text' />
						<Spacer height='2rem' />
						<Button>Button</Button>
					</FlexBox>
				</FlexBox>
			</Wrapper>
		</>
	);
}
