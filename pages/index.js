import { Button } from '../components/Button';
import { Box } from '../components/layout/Box';

export default function Home() {
  return (
    <>
      <Box flexDirection='column' gap='1rem' padding='2rem 0rem'>
        <Box flexDirection='row' gap='2rem'>
          <Button>Hello, friends!</Button>
          <Button>Hello, friends!</Button>
        </Box>
      </Box>
    </>
  );
}
