import { Button } from '../components/Button';
import { Box } from '../components/layout/Box';
import { Spacer } from '../components/layout/Spacer';

export default function Home() {
  return (
    <>
      <Spacer height='5rem' />
      <Box
        flexDirection='column'
        gap='1rem'
        padding='2rem 0rem'
        alignItems='center'
      >
        <Box flexDirection='row' gap='10rem' alignItems='center'>
          <Button size='sm'>Button</Button>
          <Button>Button</Button>
          <Button size='lg'>Button</Button>
        </Box>
        <Box flexDirection='row' gap='10rem' alignItems='center'>
          <Button size='sm' variant='secondary'>
            Button
          </Button>
          <Button variant='secondary'>Button</Button>
          <Button size='lg' variant='secondary'>
            Button
          </Button>
        </Box>
        <Box flexDirection='row' gap='10rem' alignItems='center'>
          <Button size='sm' variant='tertiary'>
            Button
          </Button>
          <Button variant='tertiary'>Button</Button>
          <Button size='lg' variant='tertiary'>
            Button
          </Button>
        </Box>
      </Box>
    </>
  );
}
