import styled from '@emotion/native';
import { Typo } from '@shared/ui/atoms';
import BaseButton from '@shared/ui/atoms/button/BaseButton';

export default function HomeScreen() {
  return (
    <Section>
      {/* <Typo.H1>Typo.H1</Typo.H1>
      <Typo.H2>Typo.H2</Typo.H2>
      <Typo.H3>Typo.H3</Typo.H3>
      <Typo.H4>Typo.H4</Typo.H4>
      <Typo.H5>Typo.H5</Typo.H5>
      <Typo.H6>Typo.H6</Typo.H6>
      <Typo.Subtitle1>Typo.Subtitle1</Typo.Subtitle1>
      <Typo.Subtitle2>Typo.Subtitle2</Typo.Subtitle2>
      <Typo.Body1>Typo.Body1</Typo.Body1>
      <Typo.Body2>Typo.Body2</Typo.Body2>
      <Typo.Button>Typo.Button</Typo.Button>
      <Typo.Caption>Typo.Caption</Typo.Caption>
      <Typo.Overline>Typo.Overline</Typo.Overline> */}

      <BaseButton variant='highlight'>
        <Typo.Button>highlight</Typo.Button>
      </BaseButton>
      <BaseButton variant='opacity'>
        <Typo.Button>opacity</Typo.Button>
      </BaseButton>
      <BaseButton variant='static'>
        <Typo.Button>static</Typo.Button>
      </BaseButton>
    </Section>
  );
}

const Section = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  gap: 16,
});
