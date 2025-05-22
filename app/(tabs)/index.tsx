import styled from '@emotion/native';
import { Button, Divider, TextInput, Typo } from '@shared/ui/atoms';

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

      <TextInput.Default placeholder='default' />
      <TextInput.Outlined placeholder='outlined' />
      <TextInput.Underlined placeholder='underlined' />

      <Button.Highlight onPress={() => console.log('highlight')}>
        <Typo.Button>highlight</Typo.Button>
      </Button.Highlight>
      <Button.Opacity onPress={() => console.log('opacity')}>
        <Typo.Button>opacity</Typo.Button>
      </Button.Opacity>
      <Button.Static onPress={() => console.log('static')}>
        <Typo.Button>static</Typo.Button>
      </Button.Static>

      <Divider />
    </Section>
  );
}

const Section = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  gap: 16,
  // backgroundColor: 'tomato',
});
