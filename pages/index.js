import { Button } from '../components/widgets/Button';
import { FlexBox } from '../components/util/FlexBox';
import { Spacer } from '../components/util/Spacer';
import { TextBox, InputLabel } from '../components/widgets/Input';
import { NavBar } from '../components/layout/Navigation/components/NavBar';
export default function Home() {
	return (
    <>
      <NavBar />
			<Spacer height='4rem' />
			<FlexBox flexDirection='column' gap='2rem' alignItems='center'>
				<FlexBox flexDirection='row' gap='10rem'>
					<Button size='sm'>Button</Button>
					<Button>Button</Button>
					<Button size='lg'>Button</Button>
				</FlexBox>
				<FlexBox flexDirection='row' gap='10rem'>
					<Button size='sm' variant='outline'>
						Button
					</Button>
					<Button variant='outline'>Button</Button>
					<Button size='lg' variant='outline'>
						Button
					</Button>
				</FlexBox>
				<FlexBox flexDirection='row' gap='10rem'>
					<Button size='sm' variant='pill'>
						Button
					</Button>
					<Button variant='pill'>Button</Button>
					<Button size='lg' variant='pill'>
						Button
					</Button>
				</FlexBox>
				<FlexBox flexDirection='row' gap='10rem'>
					<Button size='sm' variant='link'>
						Button
					</Button>
					<Button variant='link'>Button</Button>
					<Button size='lg' variant='link'>
						Button
					</Button>
				</FlexBox>
				<FlexBox flexDirection='row' gap='10rem'>
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
		</>
	);
}
