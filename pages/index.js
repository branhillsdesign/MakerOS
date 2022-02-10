import {
  Button,
  LargeButton,
  SmallButton,
  SecondaryBtn,
  SecondaryBtnSmall,
  SecondaryBtnLarge,
  TertiaryBtn,
  TertiaryBtnSmall,
  TertiaryBtnLarge,
} from '../components/Button';
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
          <SmallButton>Small Button</SmallButton>
          <Button>Button</Button>
          <LargeButton>Large Button</LargeButton>
        </Box>
        <Box flexDirection='row' gap='10rem' alignItems='center'>
          <SecondaryBtnSmall>Small Button</SecondaryBtnSmall>
          <SecondaryBtn>Button</SecondaryBtn>
          <SecondaryBtnLarge>Large Button</SecondaryBtnLarge>
        </Box>
        <Box flexDirection='row' gap='10rem' alignItems='center'>
          <TertiaryBtnSmall>Small Button</TertiaryBtnSmall>
          <TertiaryBtn>Button</TertiaryBtn>
          <TertiaryBtnLarge>Large Button</TertiaryBtnLarge>
        </Box>
      </Box>
    </>
  );
}
